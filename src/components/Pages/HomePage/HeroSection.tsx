import { Button } from "antd";
import Image from "../../../assets/images/hero-section.jpg";

const HeroSection = () => {
  return (
    <div className="flex justify-between gap-x-40 lg:pl-48 xl:pl-56 bg-gray-50 flex-col md:flex-row">
      <div className="flex flex-col gap-y-6 justify-center py-10 px-10 md:px-10 lg:px-0 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
          Learn with expert
          <br /> anytime anywhere
        </h1>
        <p className="max-w-sm text-gray-600">
          Our mision is to help people to find the best course online and learn
          with expert anytime, anywhere.
        </p>
        <Button type="primary" style={{ width: 150 }}>
          Create Account
        </Button>
      </div>
      <img className="w-full md:w-[50%] object-cover" src={Image} />
    </div>
  );
};

export default HeroSection;
