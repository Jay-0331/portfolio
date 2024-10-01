import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { project } from '@/data/project'
import { FaGithub, FaLink } from 'react-icons/fa6'

type props = {
  data: project
}

export const Project = ({ data }: props) => {
  return (
    <div
      id="card"
      className="w-full rounded-xl grid grid-rows-subgrid row-span-4 gap-x-6 border border-neutral-50/10 bg-neutral-900/60 p-6"
    >
      <div className="bg-gradient-to-bl from-neutral-800/40 to-neutral-800 rounded-lg">
        <Image
          src={data.image}
          alt="screenshot"
          width={1000}
          height={1000}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="grid grid-rows-subgrid row-span-3 gap-y-4">
        <div className="flex flex-wrap self-end items-center leading-none gap-2 py-3 text-neutral-50/50 font-medium">
          <span className="bg-neutral-800/30 text-neutral-500 rounded-md px-3 py-1.5 text-xs md:text-sm">
            {data.type}
          </span>
          {data.tech.map((tech, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-x-2 bg-blue-800/20 text-blue-600 rounded-md px-3 py-1.5 text-xs md:text-sm"
              >
                {/* <span className="h-1 w-1 rounded-full bg-neutral-50/50" /> */}
                <span>{tech}</span>
              </div>
            )
          })}
        </div>
        <div className="flex justify-between items-center text-xl md:text-2xl font-bold">
          <h4 className="ml-1">{data.name}</h4>
          <div className="flex space-x-2">
            {data.link && (
              <Link
                target="_blank"
                href={data.link}
                className="p-3 border border-neutral-50/10 rounded-xl bg-neutral-800/60"
              >
                <FaLink className="w-5 h-5" />
              </Link>
            )}
            {data.github && (
              <Link
                target="_blank"
                href={data.github}
                className="p-3 border border-neutral-50/10 rounded-xl bg-neutral-800/60"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
        <p className="text-base p-4 bg-neutral-950 rounded-lg border border-neutral-50/5">
          {data.description}
        </p>
      </div>
    </div>
  )
}
