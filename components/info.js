/* This example requires Tailwind CSS v2.0+ */
import { EmojiHappyIcon, SwitchHorizontalIcon, ColorSwatchIcon, PencilIcon } from '@heroicons/react/outline'


function Info() {
  return (
    <section className="w-full flex flex-wrap flex-col md:flex-row items-center justify-around text-white md:mb-10 md:px-40">
        <div className="cursor-pointer flex flex-col items-center justify-center text-center w-60 h-60 rounded-3xl bg-gray-700 mb-10 md:mb-0 backdrop-brightness-0.5">
            <EmojiHappyIcon className="cursor-pointer block h-12 w-12 mb-1" aria-hidden="true" />
            <h1 className='cursor-pointer text-2xl font-semibold mb-3'>Łatwy w Użyciu</h1>
            <p className='cursor-pointer mb-1'>Nasz prosty i łatwy proces instalacji, zajmuje tylko kilka sekund i nie wymaga żadnych modyfikacji!</p>
            <div className="cursor-pointer relative w-36 h-2 bg-green-500 rounded mt-3"></div>
        </div>
        <div className="cursor-pointer flex flex-col items-center justify-center text-center w-60 h-60 rounded-3xl bg-gray-700 mb-10 md:mb-0">
            <SwitchHorizontalIcon className="cursor-pointer block h-12 w-12 mb-1" aria-hidden="true" />
            <h1 className='cursor-pointer text-2xl font-semibold mb-3'>Cross Client</h1>
            <p className='cursor-pointer mb-1'>Nasz unikalny system pozwala Torrent Cape współpracować z każdym klientem korzystającym Optifine</p>
            <div className="cursor-pointer relative w-36 h-2 bg-green-500 rounded mt-3"></div>
        </div>
        <div className="cursor-pointer flex flex-col items-center justify-center text-center w-60 h-60 rounded-3xl bg-gray-700 mb-10 md:mb-0">
            <ColorSwatchIcon className="cursor-pointer block h-12 w-12 mb-1" aria-hidden="true" />
            <h1 className='cursor-pointer text-2xl font-semibold mb-3'>Wysoka Jakość</h1>
            <p className='cursor-pointer mb-1'>Współpracujemy z najlepszymi projektantami aby jakość i rzadkość peleryny pozostaje wysoki!</p>
            <div className="cursor-pointer relative w-36 h-2 bg-green-500 rounded mt-3"></div>
        </div>
        <div className="cursor-pointer flex flex-col items-center justify-center text-center w-60 h-60 rounded-3xl bg-gray-700 mt-10 md:lg-0">
            <PencilIcon className="cursor-pointer block h-12 w-12 mb-1" aria-hidden="true" />
            <h1 className='cursor-pointer text-2xl font-semibold mb-3'>Custom Cape</h1>
            <p className='cursor-pointer mb-1'>Chcesz mieć możliwość zaprojektowania własnej peleryny? Na naszym discordzie możesz podesłać swój design</p>
            <div className="cursor-pointer relative w-36 h-2 bg-green-500 rounded mt-3"></div>
        </div>
    </section>
  )
}

export default Info