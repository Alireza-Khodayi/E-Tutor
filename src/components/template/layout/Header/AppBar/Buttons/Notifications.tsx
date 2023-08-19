import { Button, Tooltip } from "antd";
import { BellOutlined } from "@ant-design/icons";

const Notifications = () => {
  return (
    <Tooltip className="hidden lg:flex items-center justify-center" title="Notifications">
      <Button type="link" size="large" icon={<BellOutlined />} />
    </Tooltip>
  );
};

export default Notifications;
