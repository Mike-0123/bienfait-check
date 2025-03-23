import { h1Styles, pSmallStyles } from '../../../styles'

const ContactCard = ({ title, data, icon }: { title: string, data: string, icon: any }) => {
  return (
    <div className="w-[80%] md:w-[70%] py-5 bg-white mx-auto my-4 flex flex-col justify-center items-center gap-5 relative rounded-md shadow-2xl shadow-middleColor">
      <div className="bg-slate-200 w-16 h-16 rounded-full flex justify-center items-center">
        <h1 className="text-3xl font-extrabold">{icon}</h1>
      </div>
      <div className="px-2 w-full flex flex-col justify-center items-center mb-8">
        <p className={`${pSmallStyles} text-center`}>{title}</p>
        <p className="font-bold w-full px-4 break-words my-1 text-center overflow-hidden">{data}</p>
      </div>
    </div>
  )
}

export default ContactCard