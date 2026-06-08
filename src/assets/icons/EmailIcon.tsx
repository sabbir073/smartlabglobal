import React from 'react'

type Props = {
  height?: string
  width?: string
  fill?: string
  stroke?: string
}

const EmailIcon = ({
  height = "32",
  width = "32",
  fill = "none",
  stroke = "#414042",
}: Props) => {
  return (
    <svg width={width} height={height} viewBox="3 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M24.3346 5.66675H7.66797C5.45883 5.66675 3.66797 7.45761 3.66797 9.66675V22.3334C3.66797 24.5426 5.45883 26.3334 7.66797 26.3334H24.3346C26.5438 26.3334 28.3346 24.5426 28.3346 22.3334V9.66675C28.3346 7.45761 26.5438 5.66675 24.3346 5.66675Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.66797 10.6667L14.888 15.8214C15.2372 15.9819 15.617 16.0649 16.0013 16.0649C16.3856 16.0649 16.7654 15.9819 17.1146 15.8214L28.3346 10.6667" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default EmailIcon