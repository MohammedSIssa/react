import { Camera } from 'lucide-react'
import { DynamicIcon } from 'lucide-react/dynamic'

const LucideTest = () => {
  return (
    <>
      <Camera color='#e3e3e3' size={30} />
      <DynamicIcon name="camera" color='#e3e3e3' size={30} />
      <DynamicIcon name="calendar" color='#e3e3e3' size={30} />
      <DynamicIcon name="goal" color='#e3e3e3' size={30} />
      <DynamicIcon name="home" color='#e3e3e3' size={30} />
      <DynamicIcon name="instagram" color='#e3e3e3' size={30} />
      <DynamicIcon name="facebook" color='#e3e3e3' size={30} />
      <DynamicIcon name="youtube" color='#e3e3e3' size={30} />
      <DynamicIcon name="target" color='#e3e3e3' size={30} />
      <DynamicIcon name="star" color='#e3e3e3' size={30} />
      <DynamicIcon name="star-half" color='#e3e3e3' size={30} />
      <DynamicIcon name="star" color='gold' size={30} fill="gold" strokeWidth={0} />
      <DynamicIcon name="star-half" color='gold' size={30} fill="gold" strokeWidth={0} />
      <DynamicIcon name="heart" color='#e3e3e3' size={50} />
      <DynamicIcon name="heart" color='red' size={50} fill="red" />
    </>
  )
}

export default LucideTest