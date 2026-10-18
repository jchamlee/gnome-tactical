import "./globals.css";

export const metadata = {
  title: "Gnome Tactical | Parts, Accessories & FFL Transfers",
  description: "Explore firearm parts and accessories, custom build guidance, and FFL transfer support from Gnome Tactical.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
