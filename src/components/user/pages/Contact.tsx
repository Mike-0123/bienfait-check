import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { h1Styles, pSmallStyles, subTitleStyles, titleStyles } from "../../styles";
import { bg, contact_bg } from "../assets";
import Input from "../common/form/Input";
import TextArea from "../common/form/TextArea";
import PageHeader from "../common/shared/PageHeader";
import { contactSchema } from "../validation";
import SubmitButton from "../common/form/SubmitButton";
import ContactCard from "../common/cards/ContactCard";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import constants from "../../../constants";
import { FaLocationDot } from "react-icons/fa6";

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

  const handleSubmit = (data: any) => {
    console.log(data);
    setIsSending(true);
    setTimeout(() => {
      toast.success(`${data.firstName.charAt(0).toUpperCase()}${data.firstName.slice(1)}, your message sent successfully.`);
      formMethods.reset();
      setIsSending(false);
    }, 4000);
  };


  return (
    <div className="bg-auto bg-center " style={{ backgroundImage: `url(${bg})` }}>
      <PageHeader
        title="CONTACT US"
        backgroundImage={contact_bg}
        description="Ready to start a project? Have a vision you would like to discuss? Get in touch with us."
      />
      <div className="relative mx-auto w-11/12 md:w-8/12 lg:w-1/2 mt-3">
        <div className="absolute top-0 left-0 w-full h-2 bg-gray-800 rounded-t"></div>
        <div className="bg-bgColor shadow-middleColor shadow-2xl wfull p-2 rounded-md px-3">
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
      </div>
      <div className="py-10 my-5">
        <h1 className={subTitleStyles}>{constants.webInfo.name}</h1>
        <h1 className={titleStyles}>CONTACT DETAILS</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <ContactCard icon={<FaPhone />} title="TELEPHONE" data={`+250${constants.webInfo.phone}`} />
          <ContactCard icon={<FaLocationDot />} title="ADDRESS" data={constants.webInfo.location} />
          <ContactCard icon={<FaEnvelope />} title="EMAIL" data={constants.webInfo.email} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
