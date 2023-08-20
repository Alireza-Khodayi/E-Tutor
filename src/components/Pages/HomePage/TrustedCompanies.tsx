import Netflix from "../../../assets/images/Companies/Netflix.svg";
import Google from "../../../assets/images/Companies/Google.svg";
import Lenovo from "../../../assets/images/Companies/Lenovo.svg";
import Lexmark from "../../../assets/images/Companies/Lexmark.svg";
import Verizon from "../../../assets/images/Companies/Verizon.svg";
import Slack from "../../../assets/images/Companies/Slack.svg";
import Youtube from "../../../assets/images/Companies/YouTube.svg";
import Microsoft from "../../../assets/images/Companies/Microsoft.svg";

import { Typography } from "antd";

import Container from "../../template/layout/Container";

const companies = [
  Netflix,
  Google,
  Lenovo,
  Lexmark,
  Verizon,
  Slack,
  Youtube,
  Microsoft,
];
const { Title } = Typography;
const TrustedCompanies = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <Title level={3}>6.3k trusted companies</Title>
          <p className="mt-4 text-gray-500 text-sm">
            Nullam egestas tellus at enim ornare tristique. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra.
          </p>
        </div>
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {companies.map((company) => (
            <div className="shadow p-6 flex items-center justify-center">
              <img src={company} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TrustedCompanies;
