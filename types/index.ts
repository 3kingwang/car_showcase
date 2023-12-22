import { MouseEventHandler } from "react"
export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: "button" | "submit"
  rightIcon?: string
  isDisabled?: boolean
  textStyles?: string
}
export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}
export interface CarProps{
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  id: number
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}
