import { MaskTextBodyText, MaskTextHeading } from "@/components/CustomText";
import { phrasesTestimonials, phrasesBodyTestimonials } from "@/constants";

const Testimonials = () => {
  return (
    <div className="p-10 lg:mx-auto flex flex-col justify-between bg-white text-black py-32">
      <MaskTextHeading phrases={phrasesTestimonials} />
      <div className="flex flex-col items-start gap-10 mt-14 md:flex-row md:justify-between md:items-end">
        <div className="flex gap-5 md:flex-row flex-col">
          <h3 className="text-7xl font-medium">
            11<span className="text-sm ml-1">verified reviews</span>
          </h3>
          <h3 className="text-7xl font-medium">
            5.0<span className="text-sm ml-1">average rating</span>
          </h3>
        </div>
        <MaskTextBodyText phrases={phrasesBodyTestimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
