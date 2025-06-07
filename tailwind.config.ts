import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      //   fontFamily: {
      //     sans: [
      //       "var(--font-geist-sans)",
      //       ...fontFamily.sans,
      //     ],
      //     mono: [
      //       "var(--font-geist-mono)",
      //       ...fontFamily.mono,
      //     ],
      //   },
      colors: {
        // 필요 시 --primary 등 직접 등록 가능
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
    },
  },
  plugins: [],
};

export default config;
