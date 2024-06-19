"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

import { PropsWithChildren } from "react";

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      storageKey="arif-portfolio-theme"
    >
      {children}
    </NextThemeProvider>
  );
}
