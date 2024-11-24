import React from 'react'

type Props = {
    size: "sm" | "md" | "lg"
    color: "grass" | "ash" | "white"
    children: React.ReactNode
    onClick?: () => void
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
    icon?: React.ReactElement
}

const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-md px-6 py-3",
    lg: "text-lg px-8 py-4"
}
const colorClasses = {
    grass: "bg-grass-500 text-white hover:bg-grass-500/80",
    ash: "bg-ash-500 text-white hover:bg-ash-500/80",
    white: "bg-white text-black hover:bg-white/80"
}

const Button = (props: Props) => {
  return (
    <button className={`${sizeClasses[props.size]} ${colorClasses[props.color]} flex gap-2`} {...props.buttonProps} onClick={props.onClick}>
      {props.icon && React.cloneElement(props.icon, { className: "w-4 h-4" })}
      {props.children}
    </button>
  )
}

export default Button