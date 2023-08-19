import { Typography, Button } from "antd";
import SingleCategory from "./SingleCategory";
import {
  Cpu,
  Handshake,
  CreditCard,
  ChartBarHorizontal,
  BugDroid,
} from "../../../../core/utilities/Icons";
import Container from "../../../template/layout/Container";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;
const items = [
  { icon: <Cpu />, title: "Label", numberOfCourses: 63476, color: "#564FFD" },
  {
    icon: <Handshake />,
    title: "Business",
    numberOfCourses: 52822,
    color: "#23BD33",
  },
  {
    icon: <CreditCard />,
    title: "Finance & Accounting",
    numberOfCourses: 33841,
    color: "#FD8E1F",
  },
  {
    icon: <ChartBarHorizontal />,
    title: "IT & Software",
    numberOfCourses: 22649,
    color: "#E34444",
  },
  {
    icon: <BugDroid />,
    title: "Personal Development",
    numberOfCourses: 22649,
    color: "#aaaaaa",
    iconBackgroundColor: "#FF6636",
  },
];
const Categories = () => {
  return (
    <Container>
      <div className="py-16">
        <Title className="text-center" level={3}>
          Browse top category
        </Title>
        <div className="py-10 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((category) => (
            <SingleCategory
              icon={category.icon}
              title={category.title}
              numberOfCourses={category.numberOfCourses}
              color={category.color}
              iconBackgroundColor={category.iconBackgroundColor}
              key={category.title}
            />
          ))}
        </div>
        <div className="text-sm text-center flex flex-col gap-y-6 items-center">
          <span>We have more category & subcategory.</span>
          
          <Button icon={<ArrowRightOutlined />}>Browse All Categories</Button>
        </div>
      </div>
    </Container>
  );
};

export default Categories;
