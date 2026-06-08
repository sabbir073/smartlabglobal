'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type MarqueeProps = {
  children: React.ReactNode
  direction?: 'left' | 'right'
  speed?: number // pixels per second
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = 'left',
  speed = 100,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    const contentWidth = content.offsetWidth
    const containerWidth = container.offsetWidth
    const distance = contentWidth + containerWidth

    tweenRef.current?.kill()

    tweenRef.current = gsap.fromTo(
      content,
      { x: direction === 'left' ? 0 : -contentWidth },
      {
        x: direction === 'left' ? -contentWidth : 0,
        duration: distance / speed,
        ease: 'none',
        repeat: -1,
      }
    )

    return () => {
      tweenRef.current?.kill()
    }
  }, [direction, speed])

  useEffect(() => {
    const container = containerRef.current
    if (!container || !tweenRef.current) return

    const handleEnter = () => tweenRef.current?.pause()
    const handleLeave = () => tweenRef.current?.resume()

    container.addEventListener('mouseenter', handleEnter)
    container.addEventListener('mouseleave', handleLeave)

    return () => {
      container.removeEventListener('mouseenter', handleEnter)
      container.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden whitespace-nowrap w-full"
    >
      <div ref={contentRef} className="inline-block">
        {/* Duplicate content to make sure screen is always filled */}
        <span className="px-4 inline-block">{children}</span>
        <span className="px-4 inline-block">{children}</span>
      </div>
    </div>
  )
}

export default Marquee
