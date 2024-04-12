import React from 'react'

export interface IDashboard {
  id: number
  icons?: React.ReactNode
  title: string
}

export interface IconProps {
  width?: number
  height?: number
  className?: {
    classNameSvg?: string
    classNamePath?: string
  }
}

export interface IActiveDasboard extends IDashboard {
  isActive: boolean
}
