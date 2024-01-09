import '@/styles/globals.scss'

import type { Metadata } from 'next';

// Next.js allows you to import CSS directly in .js files.
// It handles optimization and all the necessary Webpack configuration to make this work.
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
import ProgressBar from '@/components/bar/ProgressBar';

// Config to Font Awesome core SVG library not insert <style> elements into the <head> of the page.
// See https://fontawesome.com/v6/docs/web/use-with/react/use-with#next-js
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'CoreUI Next.js 14',
  description: 'Dashboard template admin from CoreUI integrated with Next.js 14',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'CoreUI', 'react-components'],

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        {children}
      </body>
    </html>
  )
}
