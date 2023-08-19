import Container from "../../template/layout/Container";

const instructSteps = [
  {
    number: 1,
    text: "Apply to become instructor",
    color: "#564FFD",
  },
  {
    number: 2,
    text: "Build & edit your profile",
    color: "#FF6636",
  },
  {
    number: 3,
    text: "Create your new course",
    color: "#E34444",
  },
  {
    number: 4,
    text: "Start teaching & earning",
    color: "#23BD33",
  },
];
const BecomeInstructor = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-x-4">
        <img className="object-cover aspect-auto md:w-[50%]" src="src\assets\images\Banner1.jpg" />
        <div className=" px-6 py-6 bg-slate-50 shadow-sm">
          <h3 className="text-2xl font-bold">Your teaching & earning steps</h3>
          <div className="grid grid-cols-2 gap-5 mt-4">
            {instructSteps.map((step) => (
              <Item number={step.number} text={step.text} color={step.color} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

type Items_Props = {
  number: number;
  text: string;
  color: string;
};
const Item = ({ number, text, color }: Items_Props) => {
  return (
    <div className="flex gap-x-2 items-center">
      <span
        className="px-5 py-4 rounded-full"
        style={{ backgroundColor: `${color}11`, color: color }}
      >
        {number}
      </span>
      <h5 className="text-sm">{text}</h5>
    </div>
  );
};
export default BecomeInstructor;
