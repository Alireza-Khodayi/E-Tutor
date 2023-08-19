import { Button, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
const AuthButtons = () => {
  return (
    <div className="flex items-center gap-x-3 pl-3">
      <Tooltip
        className="flex lg:hidden items-center justify-center"
        title="Login/SignUp"
      >
        <Button type="link" size="large" icon={<UserOutlined />} />
      </Tooltip>
      <Button className="hidden lg:flex" type="default" size="large">
        Create Account
      </Button>
      <Button className=" hidden lg:flex" type="primary" size="large">
        Sign In
      </Button>
    </div>
  );
};

export default AuthButtons;
