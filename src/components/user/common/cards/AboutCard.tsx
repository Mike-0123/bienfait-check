import { pSmallStyles } from "../../../styles"
import { IAboutCard } from "../../../types"
import Button from "../form/Button"
import TeamSection from "./TeamSection"

const AboutCard = ({ index, img, subTitle, btnText, btnLnk, description, title }: IAboutCard) => {
    return (
        <>
        <div className={`bg-bgUserColor text-textUserColor mx-auto w-full my-4 flex flex-col justify-between rounded-md shadow-2xl shadow-middleColor ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="w-full h-80 bg-cover bg-center rounded-sm lg:w-1/2 lg:h-[75vh]" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="bg-white p-5 lg:w-1/2 relative lg:pt-20 lg:px-10 rounded-lg">
                <div className="my-4">
                    <h1 className={`font-bold text-3xl tracking-wider text-wrap`}>{title}</h1>
                    <p className="text-lg text-middleColor my-1">{subTitle}</p>
                </div>
                <p className={`${pSmallStyles} my-8`}> {description} </p>

                <div className="w-full flex justify-center items-center">
                    <Button btnText={btnText} btnLnk={btnLnk} />
                </div>
            </div>
        </div>
  <TeamSection/>
  </>



    )
}

export default AboutCard