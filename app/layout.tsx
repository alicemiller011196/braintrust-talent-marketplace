import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Braintrust | Find your next great collaboration',
  description:
    'Discover vetted independent talent, explore exciting projects, and collaborate with clients in one workspace.',
  applicationName: 'Braintrust Talent Marketplace'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
