import HeroPage from './hero'
import Purpose from './purpose'
import WhyChooseUs from './whyus'

const Entry = () => {
  return (
    <div className='w-full flex flex-col gap-[50px] '>
        <HeroPage/>
        <Purpose/>
        <WhyChooseUs/>
    </div>
  )
}

export default Entry