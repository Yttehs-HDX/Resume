import { createTamagui, createTokens } from 'tamagui'

/**
 * Material You color palette
 * Includes primary, secondary, tertiary, neutral, and error color scales
 */
const materialYouColors = {
  // Primary colors - Purple/Blue gradient
  primary0: '#000000',
  primary1: '#1B1B2F',
  primary2: '#2A2A4A',
  primary3: '#3A3A5A',
  primary4: '#4A4A6A',
  primary5: '#5A5A7A',
  primary6: '#6750A4', // Material You primary color
  primary7: '#7965AF',
  primary8: '#8B7AB8',
  primary9: '#9D8FC2',
  primary10: '#CFC4E3',
  primary11: '#E8DEF8',
  primary12: '#FFFFFF',

  // Secondary colors
  secondary0: '#000000',
  secondary1: '#1D1A22',
  secondary2: '#332D41',
  secondary3: '#4A4458',
  secondary4: '#625B71',
  secondary5: '#7A7289',
  secondary6: '#938F99',
  secondary7: '#ABA5AF',
  secondary8: '#C4BFC6',
  secondary9: '#DDD9DE',
  secondary10: '#E8DEF8',
  secondary11: '#F3EDF7',
  secondary12: '#FFFFFF',

  // Tertiary colors
  tertiary0: '#000000',
  tertiary1: '#31111D',
  tertiary2: '#492532',
  tertiary3: '#633B48',
  tertiary4: '#7D5260',
  tertiary5: '#986977',
  tertiary6: '#B58392',
  tertiary7: '#D29DAC',
  tertiary8: '#EFB8C8',
  tertiary9: '#FFD8E4',
  tertiary10: '#FFE8EE',
  tertiary11: '#FFF0F4',
  tertiary12: '#FFFFFF',

  // Neutral colors
  neutral0: '#000000',
  neutral1: '#1C1B1F',
  neutral2: '#2B2930',
  neutral3: '#48464C',
  neutral4: '#605D64',
  neutral5: '#79767D',
  neutral6: '#938F96',
  neutral7: '#ADA9B0',
  neutral8: '#C8C5CB',
  neutral9: '#E4E1E6',
  neutral10: '#E6E1E5',
  neutral11: '#F4EFF4',
  neutral12: '#FFFBFE',

  // Error colors
  error0: '#000000',
  error1: '#410002',
  error2: '#690005',
  error3: '#93000A',
  error4: '#BA1A1A',
  error5: '#DE3730',
  error6: '#F2B8B5',
  error7: '#F9DEDC',
  error8: '#FEEAE9',
  error9: '#FFF8F7',
  error10: '#FFFBFF',
  error11: '#FFFBFF',
  error12: '#FFFFFF',
}

/**
 * Custom tokens configuration
 * Defines color palette, spacing, sizing, border radius, and z-index values
 */
const customTokens = createTokens({
  color: {
    ...materialYouColors,
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 40,
    10: 48,
    11: 56,
    12: 64,
    true: 16,
  },
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 40,
    10: 48,
    11: 56,
    12: 64,
    true: 16,
  },
  // Material You border radius specifications
  radius: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 28, // Material You large radius
    7: 32,
    8: 40,
    9: 48,
    true: 12,
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },
})

/**
 * Light theme configuration
 * Material You light color scheme
 */
const lightTheme = {
  primary: materialYouColors.primary6,
  primaryContainer: materialYouColors.primary11,
  onPrimary: '#FFFFFF',
  onPrimaryContainer: materialYouColors.primary1,
  
  secondary: materialYouColors.secondary4,
  secondaryContainer: materialYouColors.secondary11,
  onSecondary: '#FFFFFF',
  onSecondaryContainer: materialYouColors.secondary1,
  
  tertiary: materialYouColors.tertiary5,
  tertiaryContainer: materialYouColors.tertiary11,
  onTertiary: '#FFFFFF',
  onTertiaryContainer: materialYouColors.tertiary1,
  
  error: materialYouColors.error4,
  errorContainer: materialYouColors.error6,
  onError: '#FFFFFF',
  onErrorContainer: materialYouColors.error1,
  
  background: '#FFFBFE',
  onBackground: '#1C1B1F',
  
  surface: '#FFFBFE',
  surfaceVariant: '#E7E0EC',
  surfaceContainer: '#F3EDF7',
  surfaceContainerHigh: '#ECE6F0',
  surfaceContainerHighest: '#E6E0E9',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  
  outline: '#79747E',
  outlineVariant: '#CAC4D0',
  
  borderColor: '#CAC4D0',
  borderColorHover: '#79747E',
  
  color: '#1C1B1F',
  colorHover: '#49454F',
  colorPress: '#1C1B1F',
  colorFocus: '#1C1B1F',
  
  shadowColor: 'rgba(0,0,0,0.12)',
  shadowColorHover: 'rgba(0,0,0,0.16)',
}

/**
 * Dark theme configuration
 * Material You dark color scheme
 */
const darkTheme = {
  primary: materialYouColors.primary10,
  primaryContainer: materialYouColors.primary3,
  onPrimary: materialYouColors.primary2,
  onPrimaryContainer: materialYouColors.primary11,
  
  secondary: materialYouColors.secondary9,
  secondaryContainer: materialYouColors.secondary3,
  onSecondary: materialYouColors.secondary2,
  onSecondaryContainer: materialYouColors.secondary11,
  
  tertiary: materialYouColors.tertiary8,
  tertiaryContainer: materialYouColors.tertiary3,
  onTertiary: materialYouColors.tertiary2,
  onTertiaryContainer: materialYouColors.tertiary11,
  
  error: materialYouColors.error6,
  errorContainer: materialYouColors.error3,
  onError: materialYouColors.error2,
  onErrorContainer: materialYouColors.error6,
  
  background: '#1C1B1F',
  onBackground: '#E6E1E5',
  
  surface: '#1C1B1F',
  surfaceVariant: '#49454F',
  surfaceContainer: '#211F26',
  surfaceContainerHigh: '#2B2930',
  surfaceContainerHighest: '#36343B',
  onSurface: '#E6E1E5',
  onSurfaceVariant: '#CAC4D0',
  
  outline: '#938F99',
  outlineVariant: '#49454F',
  
  borderColor: '#49454F',
  borderColorHover: '#938F99',
  
  color: '#E6E1E5',
  colorHover: '#CAC4D0',
  colorPress: '#E6E1E5',
  colorFocus: '#E6E1E5',
  
  shadowColor: 'rgba(0,0,0,0.24)',
  shadowColorHover: 'rgba(0,0,0,0.32)',
}

/**
 * Tamagui configuration
 * Combines tokens and themes into the final configuration
 */
const tamaguiConfig = createTamagui({
  tokens: customTokens,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
