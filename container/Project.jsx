import { MaskTextHeading, MaskTextBodyText } from "@/components/CustomText";
import { phrasesProject, phrasesBodyProject } from "@/constants";

const Project = () => {
  return (
    <div className="p-10 lg:mx-auto flex flex-col justify-between bg-black text-white py-32">
      <MaskTextHeading phrases={phrasesProject} />
      <div className="flex flex-col items-start gap-10 mt-14 md:flex-row md:justify-between md:items-end">
        <div className="flex items-center gap-5 md:flex-row flex-col">
          <h3 className="text-7xl font-medium">
            18<span className="text-sm ml-1">completed projects</span>
          </h3>
          <h3 className="text-7xl font-medium">
            22<span className="text-sm ml-1">awards & features</span>
          </h3>
        </div>
        <MaskTextBodyText phrases={phrasesBodyProject} />
      </div>
    </div>
  );
};

export default Project;
