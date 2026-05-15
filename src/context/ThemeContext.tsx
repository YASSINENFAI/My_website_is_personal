import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'

export type ThemeName = 'noir' | 'ivory' | 'midnight' | 'forest'

interface ThemeColors {
  void: string
  surface: string
  elevated: string
  accent: string
  accentHover: string
  textPrimary: string
  textSecondary: string
  textMuted: string
  border: string
  imageFilter: string
  grainOpacity: string
  scrollbarTrack: string
  scrollbarThumb: string
  scrollbarThumbHover: string
}

interface ThemeConfig {
  name: ThemeName
  label: string
  colors: ThemeColors
}

// Colors stored as "R G B" triplets for Tailwind opacity support
const themes: ThemeConfig[] = [
  {
    name: 'noir',
    label: 'Noir',
    colors: {
      void: '5 5 5',
      surface: '10 10 10',
      elevated: '17 17 17',
      accent: '255 61 0',
      accentHover: '255 107 53',
      textPrimary: '240 235 227',
      textSecondary: '136 136 136',
      textMuted: '68 68 68',
      border: '255 255 255',
      imageFilter: 'none',
      grainOpacity: '0.03',
      scrollbarTrack: '#050505',
      scrollbarThumb: '#444444',
      scrollbarThumbHover: '#888888',
    },
  },
  {
    name: 'ivory',
    label: 'Ivory',
    colors: {
      void: '245 240 235',
      surface: '237 232 227',
      elevated: '255 255 255',
      accent: '139 34 82',
      accentHover: '166 48 102',
      textPrimary: '26 26 26',
      textSecondary: '85 85 85',
      textMuted: '153 153 153',
      border: '0 0 0',
      imageFilter: 'brightness(1.02) saturate(0.95)',
      grainOpacity: '0.02',
      scrollbarTrack: '#F5F0EB',
      scrollbarThumb: '#CCCCCC',
      scrollbarThumbHover: '#999999',
    },
  },
  {
    name: 'midnight',
    label: 'Midnight',
    colors: {
      void: '10 22 40',
      surface: '15 29 50',
      elevated: '22 38 64',
      accent: '212 168 83',
      accentHover: '228 190 106',
      textPrimary: '232 228 223',
      textSecondary: '136 153 170',
      textMuted: '74 90 106',
      border: '212 168 83',
      imageFilter: 'brightness(0.95) saturate(0.9) sepia(0.05)',
      grainOpacity: '0.025',
      scrollbarTrack: '#0A1628',
      scrollbarThumb: '#4A5A6A',
      scrollbarThumbHover: '#8899AA',
    },
  },
  {
    name: 'forest',
    label: 'Forest',
    colors: {
      void: '10 26 15',
      surface: '15 36 22',
      elevated: '22 48 32',
      accent: '193 120 71',
      accentHover: '212 142 94',
      textPrimary: '240 232 220',
      textSecondary: '138 154 133',
      textMuted: '74 90 69',
      border: '193 120 71',
      imageFilter: 'brightness(0.95) sepia(0.08) saturate(0.9)',
      grainOpacity: '0.03',
      scrollbarTrack: '#0A1A0F',
      scrollbarThumb: '#4A5A45',
      scrollbarThumbHover: '#8A9A85',
    },
  },
]

interface ThemeContextType {
  theme: ThemeName
  cycleTheme: () => void
  themeConfig: ThemeConfig
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function applyTheme(config: ThemeConfig) {
  const root = document.documentElement
  const { colors } = config
  root.style.setProperty('--color-void', colors.void)
  root.style.setProperty('--color-surface', colors.surface)
  root.style.setProperty('--color-elevated', colors.elevated)
  root.style.setProperty('--color-accent', colors.accent)
  root.style.setProperty('--color-accent-hover', colors.accentHover)
  root.style.setProperty('--color-text-primary', colors.textPrimary)
  root.style.setProperty('--color-text-secondary', colors.textSecondary)
  root.style.setProperty('--color-text-muted', colors.textMuted)
  root.style.setProperty('--color-border', colors.border)
  root.style.setProperty('--color-image-filter', colors.imageFilter)
  root.style.setProperty('--grain-opacity', colors.grainOpacity)
  root.style.setProperty('--scrollbar-track', colors.scrollbarTrack)
  root.style.setProperty('--scrollbar-thumb', colors.scrollbarThumb)
  root.style.setProperty('--scrollbar-thumb-hover', colors.scrollbarThumbHover)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved && themes.some((t) => t.name === saved)) {
      return saved as ThemeName
    }
    return 'noir'
  })

  const themeConfig = themes.find((t) => t.name === theme) || themes[0]

  useEffect(() => {
    applyTheme(themeConfig)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme, themeConfig])

  const cycleTheme = useCallback(() => {
    setTheme((prev) => {
      const currentIndex = themes.findIndex((t) => t.name === prev)
      const nextIndex = (currentIndex + 1) % themes.length
      return themes[nextIndex].name
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme, themeConfig }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
