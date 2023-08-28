import { MaskTextHeading } from "@/components/CustomText";
import { phrasesFooter, footerDetails, footerCard } from "@/constants";
import { User } from "@nextui-org/user";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="p-10 lg:mx-auto flex flex-col py-12 w-full md:gap-16 gap-0"
      id="expertise"
    >
      <MaskTextHeading phrases={phrasesFooter} />
      <div className="flex flex-col md:flex-row md:items-center w-full">
        <div className="grid md:grid-cols-2 gap-5 mt-12 md:mt-0 w-full md:w-[50%]">
          {footerDetails.map((e, index) => (
            <div key={index} className="flex flex-col gap-3">
              <p className="text-sm text-gray-400 mb-3 lg:text-xl">{e.title}</p>
              {e.companies.map((e, index) => (
                <h3
                  key={index}
                  className="flex flex-col text-xl font-medium lg:text-3xl"
                >
                  {e.companyName}
                </h3>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-[#ffd439] p-5 lg:p-10 rounded-3xl w-full md:w-[50%] mt-12 md:mt-0">
          <h4 className="text-sm text-gray-600">Experience</h4>
          {footerCard.map((e, index) => (
            <h3
              key={index}
              className="text-xl font-medium my-3 lg:text-4xl lg:my-6"
            >
              {e.disc}
            </h3>
          ))}
          <div className="flex items-center justify-between w-full">
            <User
              name="Roronoa Zoro"
              description="Emma"
              avatarProps={{
                src: "/ceo1.png",
                size: "lg",
              }}
            />
            <div className="border-1 border-gray-500 rounded-full p-3 cursor-pointer hover:bg-black hover:text-white transition-all">
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
