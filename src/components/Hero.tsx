/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col min-h-screen justify-center items-start font-semibold gap-y-1"
    >
      <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold">
        <span className="inline-block transition-transform animate-wave origin-bottom-right">
          👋🏼
        </span>{' '}
        <span className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
          Hello, I'm
        </span>
      </h2>
      <h1 className="text-4xl md:text-5xl xl:text-7xl font-black leading-none bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent pb-2.5">
        Jay Vekariya
      </h1>
      <p className="text-lg md:text-xl xl:text-3xl leading-snug">
        Software Engineer · Go, TypeScript, Cloud-Native Systems
      </p>
      <p className="text-base md:text-lg xl:text-xl text-neutral-50/90 pt-2">
        Software Engineer with 2+ years of experience building distributed
        systems and cloud-native applications. Led large-scale
        monolith-to-microservices migration improving system throughput and
        deployment velocity. Proficient in TypeScript, Go, and Python with
        hands-on experience in Kubernetes, AWS, and CI/CD infrastructure.
      </p>
    </section>
  )
}
