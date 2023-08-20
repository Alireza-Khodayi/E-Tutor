import { instructorsData } from "../../../core/utilities/instructors-data";
import Container from "../../template/layout/Container";
import { Typography, Button, Divider } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRightOutlined, StarFilled } from "@ant-design/icons";

const { Title } = Typography;
const TopInstructors = () => {
  return (
    <Container BackgroundColor="#F5F7FA">
      <Title className="text-center" level={3}>
        Best selling courses
      </Title>
      <Swiper
        className="mt-10"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        // navigation
        pagination={{ clickable: true }}
        style={{ paddingBottom: 50 }}
        loop={true}
        speed={500}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
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
            slidesPerView: 2,
          },
          768: {
            width: 1024,
            slidesPerView: 5,
          },
        }}
      >
        {instructorsData.map((instructor) => (
          <SwiperSlide
            key={instructor.id}
            className="flex items-center justify-center"
          >
            <InstructorCard
              name={instructor.name}
              expertise={instructor.expertise}
              image={instructor.image}
              rating={instructor.rating}
              students={instructor.students}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col items-center gap-3 justify-center mt-4">
        <span>
          Thousands of students waiting for a instructor. Start teaching &
          earning now!
        </span>
        <Button className="" icon={<ArrowRightOutlined />}>
          Become Instructor
        </Button>
      </div>
    </Container>
  );
};
type InstructorCard_Props = {
  name: string;
  expertise: string;
  image: string;
  rating: number;
  students: number;
};
const InstructorCard = ({
  name,
  expertise,
  image,
  rating,
  students,
}: InstructorCard_Props) => {
  return (
    <div className="border border-solid border-gray-200">
      <img className="" src={image} />
      <div className="flex flex-col items-center gap-1 justify-center">
        <h5 className="text-sm">{name}</h5>
        <span className="text-gray-400 text-xs">{expertise}</span>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      </div>
      <div className="flex justify-between items-center px-3 pb-3">
        <div className="flex items-center">
          <StarFilled style={{ color: "#ffba24" }} />
          <span className="text-xs">&nbsp;{rating}</span>
        </div>
        <div className="flex gap-x-1">
          <span className="text-xs">{students}</span>
          <span className="text-xs text-gray-500">students</span>
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
