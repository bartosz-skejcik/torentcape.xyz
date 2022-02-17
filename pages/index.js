import Head from 'next/head'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Tails from '../components/tails'

export default function Home() {
  return (
    <section className="bg-gray-800 md:bg-[url('/bg.svg')] md:bg-no-repeat md:bg-cover">
      <Head>
        <title>Home - Torrent Capes | Free HD Minecraft Cosmetics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        color='backdrop-blur'
        list={[
          { name: 'Home', href: '#', current: false },
          { name: 'O nas', href: '#', current: false },
          { name: 'Warunki', href: '/warunki', current: false },
        ]}
        link={['Discord', 'https://disco.gg/asdasdasdas']}
        target='_blank'
      />
      <Hero />
      <Tails />
    </section>
  )
}
