import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { h1Styles, pSmallStyles, subTitleStyles, titleStyles } from "../../styles";
import { contact_bg } from "../assets";
import Input from "../common/form/Input";
import TextArea from "../common/form/TextArea";
import PageHeader from "../common/shared/PageHeader";
import { contactSchema } from "../validation";
import SubmitButton from "../common/form/SubmitButton";
import ContactCard from "../common/cards/ContactCard";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import constants from "../../../constants";
import { FaLocationDot } from "react-icons/fa6";
import AnimatedDiv from "../common/shared/AnimatedDiv";
import ContentsDiv from "../common/shared/ContentsDiv";
import { sendContact } from "../api/userAPI";
import { getErrorMessage } from "../../../utils/errorHandler";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const formMethods = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (data: any) => {
    setIsSending(true);
    try {
      await sendContact(data);
      toast.success(`${data.firstName.charAt(0).toUpperCase()}${data.firstName.slice(1)}, your message sent successfully.`);
      formMethods.reset();
    }
    catch (error) { toast.error(getErrorMessage(error)) }
    finally { setIsSending(false) }
  };


  return (
    <div>
      <PageHeader
        title="CONTACT US"
        backgroundImage={contact_bg}
        description="Ready to start a project? Have a vision you would like to discuss? Get in touch with us."
      />
      <ContentsDiv>
        <AnimatedDiv className="relative mx-auto w-11/12 md:w-8/12 lg:w-1/2 mt-3">
          <div className="absolute top-0 left-0 w-full h-2 bg-greyTextColor rounded-t"></div>
          <div className="bg-bgUserColor shadow-middleColor shadow-2xl wfull p-2 rounded-md px-3">
            <h1 className={h1Styles}>EMAIL US</h1>
            <p className={pSmallStyles}>
              Send us a message and our team will get back to you as soon as possible
            </p>
            <FormProvider {...formMethods}>
              <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
                <Input
                  title="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                />
                <Input
                  title="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                />
                <Input
                  title="Email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
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
        <AnimatedDiv className="py-10 my-5">
          <h1 className={subTitleStyles}>{constants.webInfo.name}</h1>
          <h1 className={titleStyles}>CONTACT DETAILS</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <ContactCard 
  icon={<FaPhone />} 
  title="TELEPHONE" 
  data={<a href={`tel:+250${constants.webInfo.phone}`} className="hover:text-blue-500">+250{constants.webInfo.phone}</a>} 
/>

<ContactCard 
  icon={<FaLocationDot />} 
  title="ADDRESS" 
  data={
    <a 
      href="https://www.google.com/maps/search/?api=1&query=33P7%2B2MG+Kigali" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-blue-500"
    >
      {constants.webInfo.location}
    </a>
  } 
/>

<ContactCard 
  icon={<FaEnvelope />} 
  title="EMAIL" 
  data={<a href={`mailto:${constants.webInfo.email}`} className="hover:text-blue-500">{constants.webInfo.email}</a>} 
/>

            {/* <ContactCard icon={<FaPhone />} title="TELEPHONE" data={`+250${constants.webInfo.phone}`} />
            <ContactCard icon={<FaLocationDot />} title="ADDRESS" data={constants.webInfo.location} />
            <ContactCard icon={<FaEnvelope />} title="EMAIL" data={constants.webInfo.email} /> */}
          </div>
        </AnimatedDiv>
      </ContentsDiv>
    </div>
  );
};

export default Contact;
