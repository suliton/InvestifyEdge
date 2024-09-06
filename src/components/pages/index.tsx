import AirDropBanner from './airdropbanner'
import ForYou from './foryou'
import HeroPage from './hero'
import Purpose from './purpose'
import TestimonialSlider from './Testimonial'
import WhyChooseUs from './whyus'

const Entry = () => {
  return (
    <div className='w-full flex flex-col '>
        <HeroPage/>
        <Purpose/>
        <WhyChooseUs/>
        <AirDropBanner/>
        <TestimonialSlider/>
        <ForYou/>
    </div>
  )
}

export default Entry