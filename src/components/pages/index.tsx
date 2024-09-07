import AirDropBanner from './airdropbanner'
import Footer from './footer'
import ForYou from './foryou'
// import Header from './header'
import HeroPage from './hero'
import NeedHelp from './needhelp'
import Purpose from './purpose'
import TestimonialSlider from './Testimonial'
import WhyChooseUs from './whyus'

const Entry = () => {
  return (
    <div className='w-full flex flex-col '>
      {/* <Header /> */}
      <HeroPage />
      <Purpose />
      <WhyChooseUs />
      <AirDropBanner />
      <TestimonialSlider />
      <ForYou />
      <NeedHelp />
      <Footer/>
    </div>
  )
}

export default Entry