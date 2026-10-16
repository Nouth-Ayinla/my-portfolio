import '../styles.css';

const siteUrl = 'https://oluwaferanmiportfolio.netlify.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Oluwaferanmi Ayinla | Software Engineer Portfolio',
  description: 'Oluwaferanmi Ayinla is a software engineer building web platforms, mobile applications, and AI-powered products with React, React Native, Next.js, and TypeScript.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'Mobile App Developer', 'React Native', 'Next.js', 'TypeScript', 'React Developer', 'Portfolio', 'Oluwaferanmi Ayinla'],
  authors: [{ name: 'Oluwaferanmi Ayinla' }],
  verification: { google: 'GVcJJzvf9gJZt2PHtoN0XF3izGvnrF1oXgWoF1luoZg' },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Oluwaferanmi Ayinla | Software Engineer',
    description: 'Software engineer building web platforms, mobile applications, and AI-powered products. View my portfolio and get in touch.',
    type: 'website',
    url: '/',
    images: ['/images/profile.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oluwaferanmi Ayinla | Software Engineer',
    description: 'Software engineer building web platforms, mobile applications, and AI-powered products.',
    images: ['/images/profile.jpg'],
  },
  icons: {
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/images/site.webmanifest',
};

export const viewport = { themeColor: '#3498db' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
