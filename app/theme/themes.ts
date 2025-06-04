export type ThemeColors = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
};

export type Theme = {
  name: string;
  colors: {
    light?: ThemeColors;
    dark?: ThemeColors;
  } & (
    | {
        light: ThemeColors;
        dark: ThemeColors;
        themeColors: string[];
      }
    | {
        background: string;
        foreground: string;
        card: string;
        cardForeground: string;
        popover: string;
        popoverForeground: string;
        primary: string;
        primaryForeground: string;
        secondary: string;
        secondaryForeground: string;
        muted: string;
        mutedForeground: string;
        accent: string;
        accentForeground: string;
        destructive: string;
        destructiveForeground: string;
        border: string;
        input: string;
        ring: string;
        chart1: string;
        chart2: string;
        chart3: string;
        chart4: string;
        chart5: string;
        themeColors: string[];
      }
  );
};

export const themes: Theme[] = [
  {
    name: "默认",
    colors: {
      light: {
        background: "0 0% 100%",
        foreground: "240 10% 3.9%",
        card: "0 0% 100%",
        cardForeground: "240 10% 3.9%",
        popover: "0 0% 100%",
        popoverForeground: "240 10% 3.9%",
        primary: "240 5.9% 10%",
        primaryForeground: "0 0% 98%",
        secondary: "240 4.8% 95.9%",
        secondaryForeground: "240 5.9% 10%",
        muted: "240 4.8% 95.9%",
        mutedForeground: "240 3.8% 46.1%",
        accent: "240 4.8% 95.9%",
        accentForeground: "240 5.9% 10%",
        destructive: "0 84.2% 60.2%",
        destructiveForeground: "0 0% 98%",
        border: "240 5.9% 90%",
        input: "240 5.9% 90%",
        ring: "240 10% 3.9%",
        chart1: "173 58% 39%",
        chart2: "12 76% 61%",
        chart3: "197 37% 24%",
        chart4: "43 74% 66%",
        chart5: "27 87% 67%",
      },
      dark: {
        background: "240 10% 3.9%",
        foreground: "0 0% 98%",
        card: "240 10% 3.9%",
        cardForeground: "0 0% 98%",
        popover: "240 10% 3.9%",
        popoverForeground: "0 0% 98%",
        primary: "0 0% 98%",
        primaryForeground: "240 5.9% 10%",
        secondary: "240 3.7% 15.9%",
        secondaryForeground: "0 0% 98%",
        muted: "240 3.7% 15.9%",
        mutedForeground: "240 5% 64.9%",
        accent: "240 3.7% 15.9%",
        accentForeground: "0 0% 98%",
        destructive: "0 62.8% 30.6%",
        destructiveForeground: "0 0% 98%",
        border: "240 3.7% 15.9%",
        input: "240 3.7% 15.9%",
        ring: "240 4.9% 83.9%",
        chart1: "220 70% 50%",
        chart2: "340 75% 55%",
        chart3: "30 80% 55%",
        chart4: "280 65% 60%",
        chart5: "160 60% 45%",
      },
      themeColors: ["rgb(245,197,185)", "rgb(170,216,210)"],
    },
  },

  {
    name: "薄荷绿",
    colors: {
      light: {
        background: "0 0% 100%",
        foreground: "240 10% 3.9%",
        card: "0 0% 100%",
        cardForeground: "240 10% 3.9%",
        popover: "0 0% 100%",
        popoverForeground: "240 10% 3.9%",
        primary: "240 5.9% 10%",
        primaryForeground: "0 0% 98%",
        secondary: "240 4.8% 95.9%",
        secondaryForeground: "240 5.9% 10%",
        muted: "240 4.8% 95.9%",
        mutedForeground: "240 3.8% 46.1%",
        accent: "240 4.8% 95.9%",
        accentForeground: "240 5.9% 10%",
        destructive: "0 84.2% 60.2%",
        destructiveForeground: "0 0% 98%",
        border: "240 5.9% 90%",
        input: "240 5.9% 90%",
        ring: "240 10% 3.9%",
        chart1: "12 76% 61%",
        chart2: "173 58% 39%",
        chart3: "197 37% 24%",
        chart4: "43 74% 66%",
        chart5: "27 87% 67%",
      },
      dark: {
        background: "240 10% 3.9%",
        foreground: "0 0% 98%",
        card: "240 10% 3.9%",
        cardForeground: "0 0% 98%",
        popover: "240 10% 3.9%",
        popoverForeground: "0 0% 98%",
        primary: "0 0% 98%",
        primaryForeground: "240 5.9% 10%",
        secondary: "240 3.7% 15.9%",
        secondaryForeground: "0 0% 98%",
        muted: "240 3.7% 15.9%",
        mutedForeground: "240 5% 64.9%",
        accent: "240 3.7% 15.9%",
        accentForeground: "0 0% 98%",
        destructive: "0 62.8% 30.6%",
        destructiveForeground: "0 0% 98%",
        border: "240 3.7% 15.9%",
        input: "240 3.7% 15.9%",
        ring: "240 4.9% 83.9%",
        chart1: "220 70% 50%",
        chart2: "160 60% 45%",
        chart3: "30 80% 55%",
        chart4: "280 65% 60%",
        chart5: "340 75% 55%",
      },
      themeColors: ["rgb(170,216,210)", "rgb(245,197,185)"],
    },
  },

  {
    name: "蓝宝石",
    colors: {
      light: {
        background: "0 0% 100%",
        foreground: "222.2 84% 4.9%",
        card: "0 0% 100%",
        cardForeground: "222.2 84% 4.9%",
        popover: "0 0% 100%",
        popoverForeground: "222.2 84% 4.9%",
        primary: "221.2 83.2% 53.3%",
        primaryForeground: "210 40% 98%",
        secondary: "210 40% 96.1%",
        secondaryForeground: "222.2 47.4% 11.2%",
        muted: "210 40% 96.1%",
        mutedForeground: "215.4 16.3% 44%",
        accent: "210 40% 96.1%",
        accentForeground: "222.2 47.4% 11.2%",
        destructive: "0 72% 51%",
        destructiveForeground: "210 40% 98%",
        border: "214.3 31.8% 91.4%",
        input: "214.3 31.8% 91.4%",
        ring: "221.2 83.2% 53.3%",
        chart1: "221.2 83.2% 53.3%",
        chart2: "212 95% 68%",
        chart3: "216 92% 60%",
        chart4: "210 98% 78%",
        chart5: "212 97% 87%",
      },
      dark: {
        background: "240 10% 3.9%",
        foreground: "0 0% 98%",
        card: "240 10% 3.9%",
        cardForeground: "0 0% 98%",
        popover: "240 10% 3.9%",
        popoverForeground: "0 0% 98%",
        primary: "221.2 83.2% 53.3%",
        primaryForeground: "210 40% 98%",
        secondary: "210 40% 96.1%",
        secondaryForeground: "222.2 47.4% 11.2%",
        muted: "240 3.7% 15.9%",
        mutedForeground: "240 5% 64.9%",
        accent: "240 3.7% 15.9%",
        accentForeground: "0 0% 98%",
        destructive: "0 72% 51%",
        destructiveForeground: "210 40% 98%",
        border: "240 3.7% 15.9%",
        input: "240 3.7% 15.9%",
        ring: "221.2 83.2% 53.3%",
        chart1: "221.2 83.2% 53.3%",
        chart2: "212 95% 68%",
        chart3: "216 92% 60%",
        chart4: "210 98% 78%",
        chart5: "212 97% 87%",
      },
      themeColors: ["rgb(20,45,101)", "rgb(43,72,107)"],
    },
  },

  {
    name: "红宝石",
    colors: {
      light: {
        background: "0 0% 100%",
        foreground: "240 10% 3.9%",
        card: "0 0% 100%",
        cardForeground: "240 10% 3.9%",
        popover: "0 0% 100%",
        popoverForeground: "240 10% 3.9%",
        primary: "346.8 77.2% 49.8%",
        primaryForeground: "355.7 100% 99%",
        secondary: "240 4.8% 95.9%",
        secondaryForeground: "240 5.9% 10%",
        muted: "240 4.8% 95.9%",
        mutedForeground: "240 3.8% 45%",
        accent: "240 4.8% 95.9%",
        accentForeground: "240 5.9% 10%",
        destructive: "0 72% 51%",
        destructiveForeground: "0 0% 98%",
        border: "240 5.9% 90%",
        input: "240 5.9% 90%",
        ring: "346.8 77.2% 49.8%",
        chart1: "347 77% 50%",
        chart2: "352 83% 91%",
        chart3: "350 80% 72%",
        chart4: "351 83% 82%",
        chart5: "349 77% 62%",
      },
      dark: {
        background: "240 10% 3.9%",
        foreground: "0 0% 98%",
        card: "240 10% 3.9%",
        cardForeground: "0 0% 98%",
        popover: "240 10% 3.9%",
        popoverForeground: "0 0% 98%",
        primary: "346.8 77.2% 49.8%",
        primaryForeground: "355.7 100% 99%",
        secondary: "240 4.8% 95.9%",
        secondaryForeground: "240 5.9% 10%",
        muted: "240 3.7% 15.9%",
        mutedForeground: "240 5% 64.9%",
        accent: "240 3.7% 15.9%",
        accentForeground: "0 0% 98%",
        destructive: "0 72% 51%",
        destructiveForeground: "0 0% 98%",
        border: "240 3.7% 15.9%",
        input: "240 3.7% 15.9%",
        ring: "221.2 83.2% 53.3%",
        chart1: "347 77% 50%",
        chart2: "349 77% 62%",
        chart3: "350 80% 72%",
        chart4: "351 83% 82%",
        chart5: "352 83% 91%",
      },
      themeColors: ["rgb(95,17,36)", "rgb(98,38,51)"],
    },
  },

  {
    name: "翡翠",
    colors: {
      light: {
        background: "0 0% 100%",
        foreground: "240 10% 3.9%",
        card: "0 0% 100%",
        cardForeground: "240 10% 3.9%",
        popover: "0 0% 100%",
        popoverForeground: "240 10% 3.9%",
        primary: "142 86% 28%",
        primaryForeground: "356 29% 98%",
        secondary: "240 4.8% 95.9%",
        secondaryForeground: "240 5.9% 10%",
        muted: "240 4.8% 95.9%",
        mutedForeground: "240 3.8% 45%",
        accent: "240 4.8% 95.9%",
        accentForeground: "240 5.9% 10%",
        destructive: "0 72% 51%",
        destructiveForeground: "0 0% 98%",
        border: "240 5.9% 90%",
        input: "240 5.9% 90%",
        ring: "142 86% 28%",
        chart1: "139 65% 20%",
        chart2: "140 74% 44%",
        chart3: "142 88% 28%",
        chart4: "137 55% 15%",
        chart5: "141 40% 9%",
      },
      dark: {
        background: "240 10% 3.9%",
        foreground: "0 0% 98%",
        card: "240 10% 3.9%",
        cardForeground: "0 0% 98%",
        popover: "240 10% 3.9%",
        popoverForeground: "0 0% 98%",
        primary: "142 86% 28%",
        primaryForeground: "356 29% 98%",
        secondary: "240 4.8% 95.9%",
        secondaryForeground: "240 5.9% 10%",
        muted: "240 3.7% 15.9%",
        mutedForeground: "240 5% 64.9%",
        accent: "240 3.7% 15.9%",
        accentForeground: "0 0% 98%",
        destructive: "0 72% 51%",
        destructiveForeground: "0 0% 98%",
        border: "240 3.7% 15.9%",
        input: "240 3.7% 15.9%",
        ring: "142 86% 28%",
        chart1: "142 88% 28%",
        chart2: "139 65% 20%",
        chart3: "140 74% 24%",
        chart4: "137 55% 15%",
        chart5: "141 40% 9%",
      },
      themeColors: ["rgb(8,59,29)", "rgb(12,39,23)"],
    },
  },

  {
    name: "日光",
    colors: {
      light: {
        background: "36 39% 88%",
        foreground: "36 45% 15%",
        primary: "36 45% 70%",
        primaryForeground: "36 45% 11%",
        secondary: "40 35% 77%",
        secondaryForeground: "36 45% 25%",
        accent: "36 64% 57%",
        accentForeground: "36 72% 17%",
        destructive: "0 84% 37%",
        destructiveForeground: "0 0% 98%",
        muted: "36 33% 75%",
        mutedForeground: "36 45% 25%",
        card: "36 46% 82%",
        cardForeground: "36 45% 20%",
        popover: "0 0% 100%",
        popoverForeground: "240 10% 3.9%",
        border: "36 45% 60%",
        input: "36 45% 60%",
        ring: "36 45% 30%",
        chart1: "25 34% 28%",
        chart2: "26 36% 34%",
        chart3: "28 40% 40%",
        chart4: "31 41% 48%",
        chart5: "35 43% 53%",
      },
      dark: {
        background: "36 39% 88%",
        foreground: "36 45% 15%",
        primary: "36 45% 70%",
        primaryForeground: "36 45% 11%",
        secondary: "40 35% 77%",
        secondaryForeground: "36 45% 25%",
        accent: "36 64% 57%",
        accentForeground: "36 72% 17%",
        destructive: "0 84% 37%",
        destructiveForeground: "0 0% 98%",
        muted: "36 33% 75%",
        mutedForeground: "36 45% 25%",
        card: "36 46% 82%",
        cardForeground: "36 45% 20%",
        popover: "0 0% 100%",
        popoverForeground: "240 10% 3.9%",
        border: "36 45% 60%",
        input: "36 45% 60%",
        ring: "36 45% 30%",
        chart1: "25 34% 28%",
        chart2: "26 36% 34%",
        chart3: "28 40% 40%",
        chart4: "31 41% 48%",
        chart5: "35 43% 53%",
      },
      themeColors: ["rgb(176,155,132)", "rgb(185,161,135)"],
    },
  },

  {
    name: "午夜",
    colors: {
      light: {
        background: "240 5% 6%",
        foreground: "60 5% 90%",
        primary: "240 0% 90%",
        primaryForeground: "60 0% 0%",
        secondary: "240 4% 15%",
        secondaryForeground: "60 5% 85%",
        accent: "240 0% 13%",
        accentForeground: "60 0% 100%",
        destructive: "0 60% 50%",
        destructiveForeground: "0 0% 98%",
        muted: "240 5% 25%",
        mutedForeground: "60 5% 85%",
        card: "240 4% 10%",
        cardForeground: "60 5% 90%",
        popover: "240 5% 15%",
        popoverForeground: "60 5% 85%",
        border: "240 6% 20%",
        input: "240 6% 20%",
        ring: "240 5% 90%",
        chart1: "359 2% 90%",
        chart2: "240 1% 74%",
        chart3: "240 1% 58%",
        chart4: "240 1% 42%",
        chart5: "240 2% 26%",
      },
      dark: {
        background: "240 5% 6%",
        foreground: "60 5% 90%",
        primary: "240 0% 90%",
        primaryForeground: "60 0% 0%",
        secondary: "240 4% 15%",
        secondaryForeground: "60 5% 85%",
        accent: "240 0% 13%",
        accentForeground: "60 0% 100%",
        destructive: "0 60% 50%",
        destructiveForeground: "0 0% 98%",
        muted: "240 5% 25%",
        mutedForeground: "60 5% 85%",
        card: "240 4% 10%",
        cardForeground: "60 5% 90%",
        popover: "240 5% 15%",
        popoverForeground: "60 5% 85%",
        border: "240 6% 20%",
        input: "240 6% 20%",
        ring: "240 5% 90%",
        chart1: "359 2% 90%",
        chart2: "240 1% 74%",
        chart3: "240 1% 58%",
        chart4: "240 1% 42%",
        chart5: "240 2% 26%",
      },
      themeColors: ["rgb(106,106,108)", "rgb(89,89,92)"],
    },
  },
];
