import Head from 'next/head'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Tails from '../components/tails'
import Info from '../components/info'

export default function Home() {
  return (
    <section className="bg-gray-800 bg-[url('/bg.svg')] bg-no-repeat bg-cover md:bg-[url('/bg-big.svg')]">
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
        link={['Discord', 'https://discord.gg/ZmYusdMUj9']}
        target='_blank'
      />
      <Hero />
      <Info />
      <Tails />
    </section>
  )
}
