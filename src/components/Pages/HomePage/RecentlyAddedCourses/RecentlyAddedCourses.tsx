import { Button, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { coursesData } from "./courses-data";
import Container from "../../../template/layout/Container";
import CourseItem from "./CourseItem";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Title } = Typography;
const RecentlyAddedCourses = () => {
  return (
    <Container BackgroundColor="#F5F7FA">
      <Title className="text-center" level={3}>
        Best selling courses
      </Title>
      <Swiper
        className="mt-10"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        // navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ paddingBottom: 50 }}
        loop={true}
        speed={500}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          0: {
            width: 0,
            slidesPerView: 1,
          },
          460: {
            width: 460,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          640: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
        {coursesData.map((course) => (
          <SwiperSlide
            key={course.id}
            className="flex items-center justify-center "
          >
            <CourseItem
              id={course.id}
              title={course.title}
              image={course.image}
              authorName={course.authorName}
              authorAvatar={course.authorAvatar}
              category={course.category}
              price={course.price}
              students={course.students}
              rating={course.rating}
              categoryColor={course.categoryColor}
              level={course.level}
              duration={course.duration}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-6">
        <Button className="" icon={<ArrowRightOutlined />}>
          Browse All Courses
        </Button>
      </div>
    </Container>
  );
};

export default RecentlyAddedCourses;
