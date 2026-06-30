import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── Basic scroll animation (individual element) ─── */
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

/* ─── Per-element stagger reveal (each item gets its own ScrollTrigger) ─── */
export function useStaggerReveal(containerRef, selector = '.stagger-item') {
  useEffect(() => {
    if (!containerRef.current) return

    const items = containerRef.current.querySelectorAll(selector)
    if (items.length === 0) return

    const animations = Array.from(items).map((item) => {
      return gsap.fromTo(
        item,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => {
      animations.forEach((anim) => {
        anim.scrollTrigger?.kill()
        anim.kill()
      })
    }
  }, [containerRef, selector])
}

/* ─── Card grid reveal — groups cards by parent and staggers them ─── */
export function useCardReveal(containerRef, selector = '.animate-card') {
  useEffect(() => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll(selector)
    if (cards.length === 0) return

    // Group cards by their parent grid wrapper
    const parents = new Set()
    cards.forEach((card) => parents.add(card.parentElement))

    const animations = []

    parents.forEach((parent) => {
      const parentCards = Array.from(parent.querySelectorAll(selector))
      const anim = gsap.fromTo(
        parentCards,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: parent,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
      animations.push(anim)
    })

    return () => {
      animations.forEach((anim) => {
        anim.scrollTrigger?.kill()
        anim.kill()
      })
    }
  }, [containerRef, selector])
}

/* ─── Hero entrance: badge → title → subtitle → desc → button ─── */
export function useHeroEntrance(heroRef) {
  useEffect(() => {
    if (!heroRef.current) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    const badge    = heroRef.current.querySelector('.arduino-hero__badge')
    const title    = heroRef.current.querySelector('.arduino-hero__title')
    const subtitle = heroRef.current.querySelector('.arduino-hero__subtitle')
    const desc     = heroRef.current.querySelector('.arduino-hero__desc')
    const actions  = heroRef.current.querySelector('.arduino-hero__actions')

    if (badge)    tl.fromTo(badge,    { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, 0.05)
    if (title)    tl.fromTo(title,    { y: 48,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.80 }, 0.25)
    if (subtitle) tl.fromTo(subtitle, { y: 32,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.70 }, 0.50)
    if (desc)     tl.fromTo(desc,     { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, 0.70)
    if (actions)  tl.fromTo(actions,  { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.60 }, 0.90)

    return () => tl.kill()
  }, [heroRef])
}

/* ─── Slide in from left or right ─── */
export function useSlideIn(ref, direction = 'left', duration = 0.8) {
  useEffect(() => {
    if (!ref.current) return
    const x = direction === 'left' ? -80 : 80
    const anim = gsap.fromTo(
      ref.current,
      { x, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [ref, direction, duration])
}

/* ─── Infinite floating animation ─── */
export function useFloatingAnimation(ref, yDist = 14, duration = 2.5) {
  useEffect(() => {
    if (!ref.current) return
    const anim = gsap.to(ref.current, {
      y: yDist,
      duration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
    return () => anim.kill()
  }, [ref, yDist, duration])
}
