import { Button, Divider } from "antd";
import Container from "./Container";

const Footer = () => {
  return <FooterTop />;
};

const FooterTop = () => {
  return (
    <Container BackgroundColor="#1D2026">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-white gap-8">
        <div className="">
          <h2 className="text-3xl font-bold">
            Start learning with 67.1k <br /> students around the world.
          </h2>
          <div className="mt-6 flex gap-4">
            <Button type="primary" size="large">
              Join the Family
            </Button>
            <Button
              style={{
                color: "#ddd",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              type="text"
              size="large"
            >
              Browse all courses
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-14">
          <div>
            <h4 className="text-4xl mb-2">6.3K</h4>
            <span className="text-gray-400">Online courses</span>
          </div>
          <div>
            <h4 className="text-4xl mb-2">26K</h4>
            <span className="text-gray-400">Certified Instructor</span>
          </div>
          <div>
            <h4 className="text-4xl mb-2">99.9%</h4>
            <span className="text-gray-400">Sucess Rate</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
