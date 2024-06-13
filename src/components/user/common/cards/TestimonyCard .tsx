import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { h1Styles, pSmallStyles, pStyles } from '../../../styles'

const TestimonyCard = ({ name, testimony, title, img }: { title: string, testimony: string, name: string, img: string }) => {
  return (
    <div className="bg-white mx-auto flex flex-col justify-between rounded-lg shadow-sm shadow-shineColor items-center w-full p-5">
      <p className={`${pStyles} mt-3 flex gap-1`}><FaQuoteLeft size={8} />{testimony}<FaQuoteRight size={8} /></p>

      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col justify-center mb-8 text-start">
          <h1 className={h1Styles}>{name}</h1>
          <p className={pSmallStyles}>{title}</p>
        </div>
        <img src={img} className="w-12 h-12 rounded-full" />
      </div>

    </div>
  )
}

export default TestimonyCard 