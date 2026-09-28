import '../styles.css';

const siteUrl = 'https://oluwaferanmiportfolio.netlify.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Oluwaferanmi Ayinla | Frontend Developer Portfolio',
  description: 'Oluwaferanmi Ayinla - Frontend Developer specializing in React, JavaScript, and modern web development. View my portfolio of responsive web applications and contact me for projects.',
  keywords: ['Frontend Developer', 'Web Developer', 'React Developer', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Portfolio', 'Oluwaferanmi Ayinla'],
  authors: [{ name: 'Oluwaferanmi Ayinla' }],
  verification: { google: 'GVcJJzvf9gJZt2PHtoN0XF3izGvnrF1oXgWoF1luoZg' },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Oluwaferanmi Ayinla | Frontend Developer',
    description: 'Frontend Developer specializing in React, JavaScript, and modern web development. View my portfolio and get in touch.',
    type: 'website',
    url: '/',
    images: ['/images/profile.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oluwaferanmi Ayinla | Frontend Developer',
    description: 'Frontend Developer specializing in React, JavaScript, and modern web development.',
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
      <body>{children}</body>
    </html>
  );
}
