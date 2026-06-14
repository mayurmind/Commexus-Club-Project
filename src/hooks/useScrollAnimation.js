import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const refs = useRef([])

  const addRef = useCallback((el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el)
    }
  }, [])

  useEffect(() => {
    const animations = refs.current.map((el) => {
      return gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => {
      animations.forEach((anim) => anim.scrollTrigger?.kill())
      animations.forEach((anim) => anim.kill())
    }
  }, [])

  return { addRef }
}

export function useStaggerReveal(containerRef, selector = '.stagger-item') {
  useEffect(() => {
    if (!containerRef.current) return

    const items = containerRef.current.querySelectorAll(selector)
    if (items.length === 0) return

    const anim = gsap.fromTo(
      items,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [containerRef, selector])
}
