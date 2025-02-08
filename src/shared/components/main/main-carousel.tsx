import React from 'react'

interface IProps {
  className?: string
}

export const mainCorusel: React.FC<IProps> = ({ className }) => {
  return <div className={className}></div>
}
