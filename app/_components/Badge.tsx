import React, { ReactElement } from 'react'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { skillArray } from '../_utils/data'
import { GiSparkles } from 'react-icons/gi'
import { PiStarFourBold } from 'react-icons/pi'

type Props = {
    size: "sm" | "md" | "lg"
    children: React.ReactNode
    highlight?: boolean
    icon: ReactElement
    highlighted?: boolean
}

const sizeClasses = {
    sm: "text-sm px-2 py-1 w-fit",
    md: "text-md px-3 py-2 w-fit",
    lg: "text-lg px-4 py-3 w-fit"
}



const Badge = (props: Props) => {
  return (
    <div className={`${sizeClasses[props.size]} flex items-center gap-2 rounded-full h-fit text-white outline outline-1 outline-white grow-0 shrink-0 ${props.highlighted ? "bg-grass-500/20" : ""}`}>
      {props.icon && props.icon}
      {props.children}
    </div>
  )
}

export default Badge