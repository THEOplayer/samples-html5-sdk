import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import '../src/style.css';

export default function Root() {
  return <html lang="en">
    <head><meta charSet="utf-8" /><link rel="icon" href="data:," /><meta name="viewport" content="width=device-width, initial-scale=1" /><Meta /><Links /><title>OptiView Player — React Router</title></head>
    <body><Outlet /><ScrollRestoration /><Scripts /></body>
  </html>;
}
