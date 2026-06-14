import "./globals.css";

// The locale segment (`src/app/[locale]/layout.tsx`) owns <html> and <body>
// so it can set the correct `lang` attribute. This root layout is a passthrough.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
