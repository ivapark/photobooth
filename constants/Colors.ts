/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

// theme structure from previous project
// update values based on final figma design

/*
const COLORS = {
  white: "#FFFFFF",
  accent: "#2FBD71",
  accentMed: "#9CE2B4",
  accentLight: "#EFFBED",
  black: "#000000",
  background: "#FEFEFC",
  pink: "#FF71A4",
  yellow: "#FFDE69",
  gray800: "#2E2E2E",
  gray700: "#525252",
  gray600: "#727272",
  gray500: "#ADADAD",
  gray400: "#D4D4D4",
  gray300: "#9E9E9",
  gray200: "#F5F5F5",
  gray100: "#F9F9F9",
};

const FONTSIZES = {
  heading1: 28,
  heading2: 24,
  heading3: 20,
  heading4: 18,
  heading5: 16,
  heading6: 14,
  body: 16,
  bodyMedium: 14,
  bodySmall: 12,
  button: 16,
  buttonSmall: 14,
};

const SIZES = {
  xSmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  xLarge: 32,
  xxLarge: 48,
};

const FONT = {
  regular: "todo",
  bold: "todo",
};

export { COLORS, FONT, FONTSIZES, SIZES };
*/