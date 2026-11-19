import type { Metadata } from 'next';
import 'theoplayer/ui.css';
import './globals.css';

export const metadata: Metadata = {
    title: 'OptiView Player Next.js sample',
    description: 'OptiView Player Web SDK in a Next.js app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
