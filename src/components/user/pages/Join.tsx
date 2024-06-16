import { FormProvider, useForm } from "react-hook-form"
import constants from "../../../constants"
import { h1Styles, pSmallStyles, subTitleStyles, titleStyles } from "../../styles"
import { join_bg } from "../assets"
import RoleCard, { IRoleCard, RoleTypeEnum } from "../common/cards/RoleCard"
import ContentsDiv from "../common/shared/ContentsDiv"
import PageHeader from "../common/shared/PageHeader"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { applySchema } from "../validation"
import { toast } from "react-toastify"
import AnimatedDiv from "../common/shared/AnimatedDiv"
import Input from "../common/form/Input"
import TextArea from "../common/form/TextArea"
import SubmitButton from "../common/form/SubmitButton"
import { sendJoin } from "../api/userAPI"
import { getErrorMessage } from "../../../utils/errorHandler"

const Join = () => {

  const [isSending, setIsSending] = useState(false);
  const formMethods = useForm({
    resolver: zodResolver(applySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      profession: "",
      skills: "",
      cv: "",
      message: "",
    },
  });

  const handleSubmit = async (data: any) => {
    setIsSending(true);
    try {
      await sendJoin(data);
      toast.success(`${data.firstName.charAt(0).toUpperCase()}${data.firstName.slice(1)}, your application sent successfully.`);
      formMethods.reset();
    }
    catch (error) { toast.error(getErrorMessage(error)) }
    finally { setIsSending(false) }
  };

  const roles: IRoleCard[] = [
    {
      title: "Architect",
      roleType: RoleTypeEnum.FULL_TIME,
      description: `Candidate will be located in our offices in ${constants.webInfo.location}. Minimum ${constants.applyRequirements.experience} of experience. Must be competent in architectural synthesis and fluent with the following software: ${constants.applyRequirements.softwares}`
    },
    {
      title: "Architect",
      roleType: RoleTypeEnum.PART_TIME,
      description: `Candidate will be located in our offices in ${constants.webInfo.location} or remotely. Minimum ${constants.applyRequirements.experience} of experience. Must be competent in architectural synthesis and fluent with the following software: ${constants.applyRequirements.softwares}`
    },
    {
      title: "3D Designer",
      roleType: RoleTypeEnum.PART_TIME,
      description: `Candidate will be located in our offices in ${constants.webInfo.location} or can work remotely. Must be competent in architectural visualisation and graphic design.`
    },
    {
      title: "Architectectural Draftsman",
      roleType: RoleTypeEnum.FULL_TIME,
      description: `Candidate will be located in our offices in ${constants.webInfo.location}. Minimum ${constants.applyRequirements.experience} of experience.  Must be competent in architectural drawings and fluent with the following software: ${constants.applyRequirements.softwares}`
    }
  ]

  return (
    <div className="mb-5">
      <PageHeader
        title="JOIN US"
        backgroundImage={join_bg}
        description={`Interested in joining the ${constants.webInfo.name} team as a local or remote collaborator?`}
      />
      <ContentsDiv>
        <AnimatedDiv className="mb-5 w-8/12 ml-6">
          <h1 className={`${subTitleStyles} text-start my-4`}>Our Unique Model</h1>
          <p className="font-medium text-lg">We collaborate with like-minded architects and other associates, both locally and remotely, to inspire an amalgamation of creative styles, technical skills, and innovative visions that provide a unique, collective and powerful architectural service to all our clients.</p>
        </AnimatedDiv>
        <hr />
        <AnimatedDiv className="w-full flex flex-col lg:flex-row gap-8 lg:gap-0 py-3 my-4 lg:my-4 lg:justify-center pl-6 lg:pl-0">
          <div className="w-10/12 lg:w-1/2">
            <h1 className={h1Styles}>Our Values</h1>
            <p className="text-wrap w-10/12 text-middleColor">We love to associate ourselves with other professionals that share the same vision, philosophy and values.</p>
          </div>
          <div className="w-10/12 lg:w-1/2">
            <ol className="list-decimal text-lg font-semi-bold flex flex-col gap-2 text-nowrap pl-5 lg:pl-0">
              <li>Be visionary</li>
              <li>Practice kindness</li>
              <li>Target innovation</li>
              <li>Seek solutions</li>
              <li>Be creative & resourceful</li>
              <li>Work collectively</li>
              <li>Dream big</li>
            </ol>
          </div>
        </AnimatedDiv>
        <hr />
        <AnimatedDiv className="w-full flex flex-col lg:flex-row gap-8 lg:gap-0 py-3 my-6 lg:my-4 lg:justify-center pl-6 lg:pl-0">
          <div className="w-10/12 lg:w-1/2">
            <h1 className={h1Styles}>Open Roles</h1>
            <p className="text-wrap w-10/12 text-middleColor my-4">
              We offer collaboration and employment opportunities both locally and remotely.
              <span className="font-bold block my-3 mt-8">Don't see a role that matches your profession?</span>
              Don't worry, send us your application and our team will advise you whether your services would be a good extension to the Blackbox team.
            </p>
          </div>
          <div className="w-10/12 lg:w-1/2">
            {roles.map((role, index) => <AnimatedDiv><RoleCard key={index} title={role.title} roleType={role.roleType} description={role.description} /></AnimatedDiv>)}
          </div>
        </AnimatedDiv>

        <h1 className={subTitleStyles}>{constants.webInfo.name} Family</h1>
        <h1 className={titleStyles}>BECOME AN ASSOCIATE</h1>
        <AnimatedDiv className="relative mx-auto w-11/12 md:w-8/12 lg:w-2/3 mt-3">
          <div className="absolute top-0 left-0 w-full h-2 bg-greyTextColor rounded-t"></div>
          <div className="bg-bgUserColor shadow-middleColor shadow-2xl wfull p-2 rounded-md px-3">
            <h1 className={h1Styles}>APPLY NOW</h1>
            <p className={pSmallStyles}>
              Send us your application and our team will get back to you at the earliest
            </p>
            <FormProvider {...formMethods}>
              <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
                <div className="flex justify-between my-2 gap-2">
                  <Input
                    title="First Name"
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    className="w-1/2"
                  />
                  <Input
                    title="Last Name"
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    className="w-1/2"
                  />
                </div>
                <Input
                  title="Email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />
                <Input
                  title="Profession"
                  type="text"
                  placeholder="Enter your profession"
                  name="profession"
                />
                <Input
                  title="Skills"
                  type="text"
                  placeholder="Enter your skills"
                  name="skills"
                />
                <Input
                  title="Portfolio & CV"
                  type="text"
                  placeholder="Enter your CV link"
                  name="cv"
                />

                <TextArea
                  title="Message"
                  placeholder="Enter your message"
                  name="message"
                />
                <SubmitButton
                  title="SEND"
                  loadingTitle="Sending"
                  isLoading={isSending}
                />
              </form>
            </FormProvider>
          </div>
        </AnimatedDiv>

      </ContentsDiv>
    </div>
  )
}

export default Join