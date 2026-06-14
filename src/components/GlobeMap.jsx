import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import './GlobeMap.css';

function interpolateProjection(raw0, raw1) {
  const mutate = d3.geoProjectionMutator((t) => (x, y) => {
    const [x0, y0] = raw0(x, y);
    const [x1, y1] = raw1(x, y);
    return [x0 + t * (x1 - x0), y0 + t * (y1 - y0)];
  });
  let t = 0;
  return Object.assign(mutate(t), {
    alpha(_) {
      return arguments.length ? mutate((t = +_)) : t;
    },
  });
}

export default function GlobeMap() {
  const svgRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState([0]);
  const [worldData, setWorldData] = useState([]);
  const [rotation, setRotation] = useState([0, 0]);
  const [translation, setTranslation] = useState([0, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState([0, 0]);

  const width = 800;
  const height = 500;

  // Load world data
  useEffect(() => {
    const loadWorldData = async () => {
      try {
        const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
        const world = await response.json();
        const countries = feature(world, world.objects.countries).features;
        setWorldData(countries);
      } catch (error) {
        console.error("Error loading world data:", error);
      }
    };
    loadWorldData();
  }, []);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      setLastMouse([event.clientX - rect.left, event.clientY - rect.top]);
    }
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const currentMouse = [event.clientX - rect.left, event.clientY - rect.top];
    const dx = currentMouse[0] - lastMouse[0];
    const dy = currentMouse[1] - lastMouse[1];
    const t = progress[0] / 100;

    if (t < 0.5) {
      const sensitivity = 0.5;
      setRotation((prev) => [prev[0] + dx * sensitivity, Math.max(-90, Math.min(90, prev[1] - dy * sensitivity))]);
    } else {
      const sensitivityMap = 0.25;
      setRotation((prev) => [prev[0] + dx * sensitivityMap, Math.max(-90, Math.min(90, prev[1] - dy * sensitivityMap))]);
    }
    setLastMouse(currentMouse);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Initialize and update visualization
  useEffect(() => {
    if (!svgRef.current || worldData.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const t = progress[0] / 100;
    const alpha = Math.pow(t, 0.5);

    // Zoom out scale slightly to fit better
    const scale = d3.scaleLinear().domain([0, 1]).range([220, 130]);
    const baseRotate = d3.scaleLinear().domain([0, 1]).range([0, 0]);

    const projection = interpolateProjection(d3.geoOrthographicRaw, d3.geoEquirectangularRaw)
      .scale(scale(alpha))
      .translate([width / 2 + translation[0], height / 2 + translation[1]])
      .rotate([baseRotate(alpha) + rotation[0], rotation[1]])
      .precision(0.1);

    projection.alpha(alpha);
    const path = d3.geoPath(projection);

    // Electronics Glow Filter
    const defs = svg.append("defs");
    const filter = defs.append("filter").attr("id", "neon-glow");
    filter.append("feGaussianBlur").attr("stdDeviation", "2.5").attr("result", "coloredBlur");
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Add graticule (circuit grid lines)
    try {
      const graticule = d3.geoGraticule();
      const graticulePath = path(graticule());
      if (graticulePath) {
        svg.append("path")
          .datum(graticule())
          .attr("d", graticulePath)
          .attr("fill", "none")
          .attr("stroke", "rgba(0, 229, 255, 0.15)")
          .attr("stroke-width", 1)
          .attr("stroke-dasharray", "4, 4");
      }
    } catch (e) {}

    // Add countries (circuit traces)
    svg
      .selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d) => {
        try {
          const p = path(d);
          return (p && !p.includes("NaN")) ? p : "";
        } catch (e) { return ""; }
      })
      .attr("fill", "rgba(0, 20, 30, 0.5)")
      .attr("stroke", "#00e5ff")
      .attr("stroke-width", 1.2)
      .attr("filter", "url(#neon-glow)")
      .style("visibility", function () {
        const d = d3.select(this).attr("d");
        return d && d.length > 0 ? "visible" : "hidden";
      })
      .on("mouseover", function() {
        d3.select(this).attr("fill", "rgba(0, 229, 255, 0.2)");
      })
      .on("mouseout", function() {
        d3.select(this).attr("fill", "rgba(0, 20, 30, 0.5)");
      });

    // Add nodes (LEDs) at some country centroids
    const nodes = svg.append("g").attr("class", "circuit-nodes");
    worldData.forEach((d, i) => {
        if (i % 3 === 0) { // Add a node to some countries
            try {
                const centroid = path.centroid(d);
                if (centroid && !isNaN(centroid[0]) && !isNaN(centroid[1])) {
                    nodes.append("circle")
                        .attr("cx", centroid[0])
                        .attr("cy", centroid[1])
                        .attr("r", 3)
                        .attr("fill", "#fff")
                        .attr("stroke", "#00e5ff")
                        .attr("stroke-width", 1.5)
                        .attr("filter", "url(#neon-glow)")
                        .attr("class", `circuit-node anim-delay-${i % 5}`);
                }
            } catch (e) {}
        }
    });

    // Draw sphere outline
    try {
      const sphereOutline = path({ type: "Sphere" });
      if (sphereOutline) {
        svg.append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", "rgba(0, 229, 255, 0.4)")
          .attr("stroke-width", 2)
          .attr("filter", "url(#neon-glow)");
      }
    } catch (e) {}

  }, [worldData, progress, rotation, translation]);

  const handleAnimate = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const startProgress = progress[0];
    const endProgress = startProgress === 0 ? 100 : 0;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const currentProgress = startProgress + (endProgress - startProgress) * eased;
      
      setProgress([currentProgress]);

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    animate();
  };

  const handleReset = () => {
    setRotation([0, 0]);
    setTranslation([0, 0]);
  };

  return (
    <div className="globe-container">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="globe-svg"
        preserveAspectRatio="xMidYMid meet"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      
      {/* HUD Electronics Overlay */}
      <div className="globe-hud">
          <div className="globe-hud-text">SYS.STATE: {progress[0] === 0 ? 'GLOBE' : progress[0] === 100 ? 'MAP' : 'TRANSFORMING'}</div>
          <div className="globe-hud-text">ROT: {rotation[0].toFixed(1)}° {rotation[1].toFixed(1)}°</div>
      </div>

      <div className="globe-controls">
        <button 
          onClick={handleAnimate} 
          disabled={isAnimating} 
          className="btn btn-primary btn-sm globe-btn"
        >
          {isAnimating ? "Processing..." : progress[0] === 0 ? "Deploy Map" : "Form Globe"}
        </button>
        <button
          onClick={handleReset}
          className="btn btn-ghost btn-sm globe-btn"
        >
          Reset Pos
        </button>
      </div>
    </div>
  );
}
