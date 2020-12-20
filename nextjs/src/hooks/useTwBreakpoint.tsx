import { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

import twConfigFile from '@/root/tailwind.config'

const twConfig = resolveConfig(twConfigFile)

// grab values
const screens: { [key: string]: string } = twConfig.theme.screens
const BREAKPOINTS: { [key: string]: number } = Object.entries(screens)
  // format {id: size}
  .reduce((breakpoints, [key, val]) => {
    breakpoints[key] = +val.replace('px', '')
    return breakpoints
  }, {})

export const useTwBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(null)

  useEffect(() => {
    const checkScreen = () => {
      const innerWidth = globalThis.window.innerWidth

      // largest first so 'find' gets max breakpoint
      let twBreakpoint = Object.entries(BREAKPOINTS)
        .map(([key, val]) => ({ id: key, size: val }))
        // largest to smallest so find can grab the appropriate breakpoint
        .sort((a, b) => b.size - a.size)
        // min width breakpoints so grab when we go over
        .find(breakpoint => {
          return innerWidth > breakpoint.size
        })

      // if not found then it must be the less than the smallest breakpoint
      if (!twBreakpoint) twBreakpoint = { id: 'xs', size: 0 }

      setCurrentBreakpoint(twBreakpoint)
    }
    checkScreen()

    globalThis.window.addEventListener('resize', checkScreen)
    return () => globalThis.window.removeEventListener('resize', checkScreen)
  }, [])
  return { currentBreakpoint, BREAKPOINTS }
}

// @example : currentBreakpoint && currentBreakpoint.size < BREAKPOINTS['md'] ? () : ()
