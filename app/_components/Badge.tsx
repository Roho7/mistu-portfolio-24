import React from 'react'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { skillArray } from '../_utils/data'

type Props = {
    size: "sm" | "md" | "lg"
    children: React.ReactNode
}

const sizeClasses = {
    sm: "text-sm px-2 py-1 w-fit",
    md: "text-md px-3 py-2 w-fit",
    lg: "text-lg px-4 py-3 w-fit"
}



const Badge = (props: Props) => {
  return (
    <div className={`${sizeClasses[props.size]} flex items-center gap-2 rounded-full text-white outline outline-1 outline-white`}>
      {skillArray.find(item => item.name === props.children)?.icon} {props.children}
    </div>
  )
}

export default Badge