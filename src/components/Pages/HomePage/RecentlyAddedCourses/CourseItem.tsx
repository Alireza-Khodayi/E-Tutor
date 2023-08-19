import { Divider, Popover } from "antd";
import { StarFilled } from "@ant-design/icons";
import CourseItemHovered from "./CourseItemPopover";

type I_Props = {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  students: number;
  rating: number;
  categoryColor: string;
  authorAvatar: string;
  authorName: string;
  level: string;
  duration: number;
};

const CourseItem = ({
  id,
  title,
  image,
  category,
  price,
  rating,
  students,
  categoryColor,
  authorAvatar,
  authorName,
  level,
  duration,
}: I_Props) => {
  return (
    <Popover
      content={
        <CourseItemHovered
          id={id}
          title={title}
          rating={rating}
          category={category}
          categoryColor={categoryColor}
          authorAvatar={authorAvatar}
          authorName={authorName}
          students={students}
          level={level}
          duration={duration}
          price={price}
        />
      }
      arrow={false}
      placement="topLeft"
      trigger="click"
    >
      <div className="flex items-center z-10">
        <div className="w-full relative bg-white hover:shadow-md  transition-all duration-500 cursor-pointer ">
          <img className="w-full" src={image} />
          <div className="px-3 ">
            <div className="flex mt-3 justify-between items-center w-full">
              <span
                style={{
                  backgroundColor: `${categoryColor}22`,
                  color: categoryColor,
                }}
                className="text-xs px-2 py-1"
              >
                {category}
              </span>
              <span className="text-primary">${price}</span>
            </div>
            <h3 className="text-sm mt-2 text-gray-800 hover:text-primary">
              {title}
            </h3>
          </div>
          <Divider style={{ marginBottom: 10, marginTop: 10 }} />
          <div className="flex justify-between items-center px-3 pb-3">
            <div className="flex items-center">
              <StarFilled style={{ color: "#ffba24" }} />
              <span className="text-xs">&nbsp;{rating}</span>
            </div>
            <div>
              <span className="text-sm">{students}K</span>{" "}
              <span className="text-xs text-gray-500">students</span>
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
};

export default CourseItem;
