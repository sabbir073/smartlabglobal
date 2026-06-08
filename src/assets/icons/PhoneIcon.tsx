import React from 'react'

type Props = {
  height?: string
  width?: string
  fill?: string
  stroke?: string
}

const PhoneIcon = ({
  height = "32",
  width = "32",
  fill = "none",
  stroke = "#414042",
}: Props) => {
  return (
    <svg width={width} height={height} viewBox="6 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3346 3.66669H11.668C9.45883 3.66669 7.66797 5.45755 7.66797 7.66669V24.3334C7.66797 26.5425 9.45883 28.3334 11.668 28.3334H20.3346C22.5438 28.3334 24.3346 26.5425 24.3346 24.3334V7.66669C24.3346 5.45755 22.5438 3.66669 20.3346 3.66669Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.668 23.6667H17.3346" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default PhoneIcon