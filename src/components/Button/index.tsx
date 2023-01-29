import { ButtonHTMLAttributes } from 'react'
import { ContainerButton } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button({ text, ...rest }: IButtonProps) {
  return <ContainerButton {...rest}>{text}</ContainerButton>
}
