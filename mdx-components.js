import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

import YouTube from './components/YouTubeEmbed' 
import { Disclaimer } from './components/Disclaimer'
import GameLeads from './components/GameLeads'


// Adding custom components here
const customComponents = {
  YouTube,
  Disclaimer,
  GameLeads,
}

// Get the default MDX components
const themeComponents = getThemeComponents()

export function useMDXComponents(components) {
    return {
        ...themeComponents,
        ...customComponents,
        ...components
    }
}