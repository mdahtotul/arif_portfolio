import { Exo_2, Fira_Sans_Condensed, Signika } from "next/font/google";

const signika_init = Signika({
  subsets: ["latin"],
  variable: "--font-signika",
  weight: ["400", "500", "600", "700"],
});

const exo2_init = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
  weight: ["400", "500", "600", "700", "800"],
});

const firaSansCondensed_init = Fira_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-fira-sans-condensed",
  weight: ["400", "500", "600", "800"],
});

export const signika = signika_init.variable;
export const exo2 = exo2_init.variable;
export const firaSansCondensed = firaSansCondensed_init.variable;
