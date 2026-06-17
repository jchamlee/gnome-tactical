
import './globals.css';

export const metadata = {
  title: 'Gnome Tactical LLC',
  description: 'Firearms Parts & Accessories'
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
