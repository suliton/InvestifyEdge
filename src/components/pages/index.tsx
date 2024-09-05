import AirDropBanner from './airdropbanner'
import HeroPage from './hero'
import Purpose from './purpose'
import WhyChooseUs from './whyus'

const Entry = () => {
  return (
    <div className='w-full flex flex-col '>
        <HeroPage/>
        <Purpose/>
        <WhyChooseUs/>
        <AirDropBanner/>
    </div>
  )
}

export default Entry