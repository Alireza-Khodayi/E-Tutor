import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";

const MobileMenu = () => {
  return (
    <div className="flex sm:hidden p-2">
      <Button type="link" icon={<MenuOutlined />} />
    </div>
  );
};

export default MobileMenu;
