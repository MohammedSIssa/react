import giftImage from '../assets/gift-square.jpg'

export default function GiftBox() {
  return (
    <div className='w-full h-full z-50 flex flex-col gap-2 items-center justify-center'>
      <img src={giftImage} className='max-h-screen border-3 border-amber-800 shadow-lg mt-5 rounded-2xl' alt="Gift Drawing" />
      <h1 className='w-full gift-text shadow-lg text-rose-800 border-3 border-amber-800 text-xl rounded-2xl rubik text-center font-bold py-5'>
        هاد مفروض انا لاني قصير 🤣 خديها جايبلك وردة توليب هاااالقد عشان بعرفك بتحبيه 🌹🦭
      </h1>
    </div>
  )
}