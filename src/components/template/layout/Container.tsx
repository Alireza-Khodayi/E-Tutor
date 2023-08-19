type I_Props = {
  children: JSX.Element | JSX.Element[];
  BackgroundColor?: string;
};
const Container = ({ children, BackgroundColor }: I_Props) => {
  return (
    <div
      style={{
        backgroundColor: `${BackgroundColor ? BackgroundColor : "white"}`,
      }}
      className="flex items-center justify-center"
    >
      <div className=" w-full px-10 md:px-20 lg:px-48 xl:px-56 py-16">{children}</div>
    </div>
  );
};

export default Container;
