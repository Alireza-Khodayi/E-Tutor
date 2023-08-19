type I_Props = {
  icon: JSX.Element;
  title: string;
  numberOfCourses: string | number;
  color: string;
  iconBackgroundColor?: string;
};
const SingleCategory = ({
  icon,
  title,
  numberOfCourses,
  color,
  iconBackgroundColor,
}: I_Props) => {
  return (
    <div
      className="flex w-full px-4 py-4 gap-x-4 items-center hover:shadow-lg transition-all duration-500 cursor-pointer"
      style={{ backgroundColor: `${color}22` }}
    >
      <span
        style={{
          backgroundColor: `${
            iconBackgroundColor ? iconBackgroundColor : "white"
          }`,
        }}
        className=" p-2"
      >
        {icon}
      </span>
      <div className="flex flex-col gap-y-1">
        <h5 className="">{title}</h5>
        <span className="text-gray-500 text-sm">{numberOfCourses} Courses</span>
      </div>
    </div>
  );
};

export default SingleCategory;
