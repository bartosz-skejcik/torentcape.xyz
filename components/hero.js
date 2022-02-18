/* This example requires Tailwind CSS v2.0+ */
import { DownloadIcon } from '@heroicons/react/outline'

const Hero = () => {
  return (
    <div className="pb-[110px] pt-10 text-white">
        <div className="flex flex-wrap justify-center lg:justify-around xl:justify-around">
          <div className='flex flex-col items-center text-center lg:justify-start md:mt-16'>
            <h1
              className="
                font-bold
                text-6xl
                sm:text-4xl
                lg:text-3xl
                xl:text-5xl
                leading-snug
                mb-3
              "
            >
              Witaj na Torrent Cape
            </h1>
            <p className="leading-snug mb-8 text-gray-400 text-lg max-w-[480px]">
            Zapewniamy niesamowite darmowe peleryny!
            </p>
            <div className='flex items-left justify-start'>
              <a
                href="https://bartek.paczesny.pl/TorrentCape-Installer.exe"
                className="lg:mt-12 flex mt-auto justify-center text-white border-0 py-2 px-6 shadow-xl font-semibold rounded-xl bg-yellow-500 hover:bg-amber-400 transition duration-300 hover:shadow-amber-400/50 transition duration-300 hover:scale-105 transition duration-300"
              >
                <DownloadIcon className="block h-6 w-6 mr-2" aria-hidden="true" />
                Pobierz Installer
              </a>
            </div>
          </div>
          <div className="pt-11 lg:pt-0">
            <img src="/bg.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Hero