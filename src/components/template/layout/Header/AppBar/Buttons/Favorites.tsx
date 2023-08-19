import { Button, Tooltip } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const Favorites = () => {
  return (
    <Tooltip
      className="hidden lg:flex items-center justify-center"
      title="Favorites"
    >
      <Button type="link" size="large" icon={<HeartOutlined />} />
    </Tooltip>
  );
};

export default Favorites;
