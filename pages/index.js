import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jolly Edition</title>
        <meta name="description" content="Custom wedding stationery by Laura Shema @ Jolly Edition" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/kfh0qus.css" />
      </Head>

      <main className='mb-10 border-t-dusk border-t-8 pt-8'>
        <div className='container mx-auto px-4'>
          <header className='flex justify-between mb-16'>
            <Image src="/jolly-edition-logo.svg" alt="Jolly Edition Logo" width={128} height={23} />
            <nav>
              <ul className='flex'>
                <li className='uppercase tracking-widest font-bold border-b-2 border-color-ink ml-4'>About</li>
                <li className='uppercase tracking-widest font-bold ml-4'><Link href='/weddings'>Weddings</Link></li>
                <li className='uppercase tracking-widest font-bold ml-4'><Link href='/contact'>Contact</Link></li>
              </ul>
            </nav>
          </header>
        </div>
      </main>

      <footer>
      </footer>
    </>
  )
}
