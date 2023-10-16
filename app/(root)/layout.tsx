import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] }); // font

export const metadata = {
  title: 'NextJs 13.5 + Shadcn UI',
  description: 'NextJs 13.5'
}

export default function RootLayout({
  children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <main className='flex flex-row'>
          <section className='flex min-h-screen flex-1 flex-col items-center  px-6 pb-10 pt-28 max-md:pb-32 sm:px-10 overflow-hidden'>
            <div className='w-full '>
              {children}
            </div>
          </section>

        </main>
      </body>
    </html>
  )
}
// max-w-4xl  <RightSidebar />
/* Add suppressHydrationWarning after development!
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange >
          
*/