import { Button, Divider } from "antd";
import { StarFilled, ShoppingCartOutlined } from "@ant-design/icons";

import {
  User,
  BarChart,
  Clock,
  LikeButton,
  Check,
} from "../../../../core/utilities/Icons";
import { useCart } from "../../../../core/context/CartContext";

type I_Props = {
  id: number;
  title: string;
  authorAvatar: string;
  authorName: string;
  category: string;
  categoryColor: string;
  rating: number;
  duration: number;
  level: string;
  students: number;
  price: number;
};

const CourseItemHovered = ({
  id,
  title,
  authorAvatar,
  authorName,
  category,
  categoryColor,
  rating,
  students,
  level,
  duration,
  price,
}: I_Props) => {
  const ctx = useCart();
  return (
    <div className="absolute bg-white w-full  min-w-[330px] py-4 -translate-y-12 ">
      <div className="px-4">
        <span
          style={{
            backgroundColor: `${categoryColor}22`,
            color: categoryColor,
          }}
          className="text-xs px-2 py-1"
        >
          {category}
        </span>
        <h3 className="mt-3">{title}</h3>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-x-2">
            <img className="w-10 h-10" src={authorAvatar} />
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm">Course by</span>
              <span className="text-sm">{authorName}</span>
            </div>
          </div>
          <div className="flex items-center">
            <StarFilled style={{ color: "#ffba24" }} />
            <span className="text-sm">&nbsp;{rating}</span>{" "}
            <span className="text-gray-400 text-xs">&nbsp;(357,914)</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <User />
            <div>
              <span className="text-xs">&nbsp;{students}K</span>
              <span className="text-xs">&nbsp;students</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <BarChart />
            <span className="text-xs">{level}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <Clock />
            <span className="text-xs">{duration}</span>
            <span className="text-xs text-gray-500">hours</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <span className="text-lg ">
              ${(price - (25 / 100) * price).toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 text line-through">
              ${price.toFixed(2)}
            </span>
            <span className="py-1 px-2 bg-[#ff663622] text-primary">
              25% OFF
            </span>
          </div>
          <LikeButton />
        </div>
      </div>
      <Divider />
      <div className="px-4">
        <h4 className="uppercase text-sm">What you’ll learn</h4>
        <div className="flex gap-x-1 px-1 mt-2">
          <Check className="w-10" />
          <span className="text-sm text-gray-500">
            Learn to use Python professionally, learning both Python 2 and
            Python 3!
          </span>
        </div>
        <div className="flex gap-x-1 px-1 mt-2">
          <Check className="w-10" />
          <span className="text-sm text-gray-500">
            Learn to use frameworks smooth, learning both Django and Flask!
          </span>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col mt-3 px-4 gap-y-3">
        <Button
          onClick={() => ctx?.addToCart({ id, title, price })}
          icon={<ShoppingCartOutlined />}
          size="large"
          type="primary"
        >
          Add To Cart
        </Button>
        <Button size="large">Course Details</Button>
      </div>
    </div>
  );
};

export default CourseItemHovered;
