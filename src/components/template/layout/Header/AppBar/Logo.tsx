import { Typography } from "antd";
import { GraduationCap } from "../../../../../core/utilities/Icons";

const { Title } = Typography;

const Logo = () => {
  return (
    <div className="flex items-center gap-x-3 min-w-[120px]">
      <GraduationCap />
      <Title level={4}>E-tutor</Title>
    </div>
  );
};

export default Logo;
