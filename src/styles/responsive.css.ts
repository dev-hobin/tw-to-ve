import { CSSProperties, StyleRule } from '@vanilla-extract/css'

type BreakPointName = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type ResponsiveStyleFunction = (styles: Partial<Record<BreakPointName, CSSProperties>>) => StyleRule

const BREAK_POINTS: Record<BreakPointName, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}
export const responsiveStyle: ResponsiveStyleFunction = (styles) => {
  const rules: StyleRule['@media'] = {}
  Object.entries(styles).forEach(
    ([name, props]) =>
      (rules[`screen and (min-width: ${BREAK_POINTS[name as BreakPointName]}px)`] = props),
  )
  return {
    '@media': rules,
  }
}
