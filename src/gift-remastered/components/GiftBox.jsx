import giftImage from '../assets/gift-square.jpg'

export default function GiftBox() {
  return (
    <div className='w-full h-full z-50 flex flex-col gap-5 items-center justify-center'>
      <img src={giftImage} className='max-h-screen shadow-lg mt-5 rounded-2xl' alt="Gift Drawing" />
      <h1 className='w-full gift-text shadow-lg text-rose-800 text-xl rounded-2xl rubik text-center font-bold py-5'>
        رسمتلك وردة توليب هاااالقد
      </h1>
    </div>
  )
}