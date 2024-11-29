import { nextui } from "@nextui-org/theme";

import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "selector",
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx},",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|avatar|button|chip|input|modal|pagination|select|skeleton|table|tabs|popover|user|divider|ripple|spinner|listbox|scroll-shadow|checkbox|spacer).js"
  ],
  theme: {
    light: {
      color: {
        primary: "#0c0a09",
        "primary-light": "#44403c",
        "primary-lighter": "#a8a29e",
      },
    },
    dark: {
      color: {
        primary: "#fff",
        "primary-light": "#44403c",
        "primary-lighter": "#a8a29e",
      },
    },
    extend: {
      fontFamily: {
        "sf-pro-regular": ["sf-pro-regular", "sans-serif"],
        "sf-pro-semibold": ["sf-pro-semibold", "sans-serif"],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0c0a09",
            },
            default: {
              DEFAULT: "#fafaf9",
              50: "#f5f5f4",
              100: "#f5f5f4",
              200: "#e5e5e5",
              300: "#d4d4d4",
            },
          },
        },
        dark: {
          colors: {
            foreground: "#fff",
            primary: {
              DEFAULT: "#fff",
              foreground: "#000",
            },
            content1: "#080808",
            default: {
              DEFAULT: "#18181b",
              50: "#080808",
              100: "#171717",
              200: "#262626",
              300: "#404040",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
