import { EmojiHappyIcon, SwitchHorizontalIcon, PencilIcon } from '@heroicons/react/outline'

function Tails() {
  return (
    <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-16 mx-auto flex flex-col">
        <div className="flex flex-wrap flex-col md:flex-row rounded-3xl bg-gray-900 backdrop-blur backdrop-brightness-[0.45] items-center justify-center md:justify-around py-5 mt-10">
            <img src="/dog.png" alt="" className="h-auto w-48 lg:w-80 py-4" />
            <div className='flex flex-col justify-center text-center'>
                <h1 className="md:text-5xl text-3xl font-bold text-gray-100 md:mb-20">Pelerynki</h1>
                <p className="sm:w-96 w-full text-base md:text-xl leading-6 text-gray-300 px-10 md:px-0">Torrent Cape daje każdemu dostęp do pelerynek całkowicie za darmo. Możesz wybrać jedeną z naszego katalogu lub przesłać własną.</p>
            </div>
        </div>
        <div className='flex flex-wrap flex-col md:flex-row rounded-3xl bg-gray-900 items-center justify-center md:justify-around py-5 mt-10 md:flex-row-reverse'>
            <img src="/elytra.png" alt="" className="h-auto w-48 lg:w-80 py-4" />
            <div className='flex flex-col justify-center text-center'>
                <h1 className="md:text-5xl text-3xl font-bold text-gray-100 md:mb-20">Pelerynki</h1>
                <p className="sm:w-96 w-full text-base md:text-xl leading-6 text-gray-300 px-10 md:px-0">Torrent Cape daje każdemu dostęp do pelerynek całkowicie za darmo. Możesz wybrać jedeną z naszego katalogu lub przesłać własną.</p>
            </div>
        </div>
        <div className='flex flex-wrap flex-col md:flex-row rounded-3xl bg-gray-900 items-center justify-center md:justify-around py-5 mt-10'>
            <img src="/horse.png" alt="" className="h-auto w-48 lg:w-80 py-4" />
            <div className='flex flex-col justify-center text-center'>
                <h1 className="md:text-5xl text-3xl font-bold text-gray-100 md:mb-20">Pelerynki</h1>
                <p className="sm:w-96 w-full text-base md:text-xl leading-6 text-gray-300 px-10 md:px-0">Torrent Cape daje każdemu dostęp do pelerynek całkowicie za darmo. Możesz wybrać jedeną z naszego katalogu lub przesłać własną.</p>
            </div>
        </div>
    </div>
  )
}

export default Tails