// import { BoxProps } from 'wedex-uikit/src/Box/types';

export default interface MinigameSliderProps {
  name: string
  min: number
  max: number
  value: number
  step?: number | 'any'
  onValueChanged: (newValue: number) => void
  valueLabel?: string
  disabled?: boolean
}
