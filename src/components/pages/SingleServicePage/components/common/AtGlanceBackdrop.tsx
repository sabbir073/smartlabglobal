import { cn } from '@/utils/helpers/cn'
import React from 'react'

type Props = {
  className?: string
}

const AtGlanceBackdrop = ({ className }: Props) => {
  return (
    <div
      className={cn(" absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.55)] backdrop-blur-[4px] filter z-[-1]", className)}
    />
  )
}

export default AtGlanceBackdrop