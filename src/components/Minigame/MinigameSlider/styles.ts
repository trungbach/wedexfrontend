import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import Text from '../../Text/Text'
import bunnyButt from './svg/bunnybutt.svg'

interface SliderLabelProps {
  progress: string
}

interface DisabledProp {
  disabled?: boolean
}

const getBaseThumbStyles = ({ disabled }: InputHTMLAttributes<HTMLInputElement>) => `
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: 2rem;
  cursor: pointer;
  margin-top: 18px;
  width: 29px;
  height: 42px;
  filter: ${disabled ? 'grayscale(100%)' : 'none'};
  transform: translate(-2px, -2px);
  transition: 200ms transform;

  &:hover {
    transform: ${disabled ? 'scale(1) translate(-2px, -2px)' : 'scale(1.1) translate(-3px, -3px)'};
  }
`

export const SliderLabelContainer = styled.div<SliderLabelProps>`
  bottom: calc(100% + 20px);
  position: absolute;
  left: ${({ progress }) => progress};
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.input};
`

export const SliderLabel = styled(Text)<SliderLabelProps>`
  font-size: 18px;
  left: ${({ progress }) => progress};
  text-align: center;
  min-width: 24px; // Slider thumb size
  color: ${({ theme }) => theme.colors.textSubtle};
`

export const BunnyButt = styled.div<DisabledProp>`
  background: url(${bunnyButt}) no-repeat;
  height: 32px;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  position: absolute;
  width: 15px;
`

export const BunnySlider = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
`

export const StyledInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  cursor: pointer;
  height: 32px;
  position: relative;
  &:hover {
    .slider-label {
      opacity: 1 !important;
    }
  }

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`

export const BarBackground = styled.div<DisabledProp>`
  position: absolute;
  top: 18px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  height: 10px;
  border-radius: 1.5rem;
`

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  height: 10px;
  position: absolute;
  top: 18px;
  border-radius: 1.5rem;
`
