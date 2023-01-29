import styled from 'styled-components'

export type VariantType = 'purple' | 'yellow' | 'yellowDark' | 'gray'

const variantColor = {
  purple: '#8047F8',
  yellow: '#DBAC2C',
  yellowDark: '#C47F17',
  gray: '#574F4D',
}

interface ICircleIconProps {
  variant: VariantType
}

export const WrapperIcon = styled.div<ICircleIconProps>`
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  background: ${({ variant }) => {
    return variantColor[variant]
  }};

  svg {
    color: ${({ theme }) => theme.colors['white-50']};
  }
`
