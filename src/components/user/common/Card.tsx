import { h1Styles, pSmallStyles } from '../../styles'

const Card = ({ title, description, number, img }: { title: string, description: string, number: number, img: string }) => {
  return (
    <div className="w-80 h-96 lg:w-96 lg:h-96 bg-white mx-auto my-4 flex flex-col justify-between relative rounded-md shadow-2xl shadow-middleColor">
      <img src={img} className="rounded-md w-full" />
      <div className="bottom-32 left-[40%] lg:bottom-20 lg:left-[40%] absolute z-10 bg-white h-20 w-20 rounded-full flex justify-center items-center">
        <div className="bg-slate-200 w-16 h-16 rounded-full flex justify-center items-center">
          <h1 className="text-3xl font-extrabold">{number}</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className={h1Styles}>{title}</h1>
        <p className={pSmallStyles}>{description}</p>
      </div>
    </div>
  )
}

export default Card