import { Flex, Row, Col } from "antd";
import { PiFishSimpleBold, PiFishFill } from "react-icons/pi";

export const CustomerDashBoard = () => {
  return (
    <div>
      <br />
      <div>CustomerDashBoard</div>
      <br />
      <Flex vertical={false} gap="large">
        <div>
          <PiFishSimpleBold size={30} />
        </div>
        <div>
          <PiFishSimpleBold size={30} />
        </div>
        <div>
          <PiFishSimpleBold size={30} />
        </div>
        <div>
          <PiFishSimpleBold size={30} />
        </div>
      </Flex>
      <br />
      <Row gutter={20}>
        <Col span={3}>
          <PiFishFill size={30} />
        </Col>
        <Col span={3}>
          <PiFishFill size={30} />
        </Col>
        <Col span={3}>
          <PiFishFill size={30} />
        </Col>
        <Col span={3}>
          <PiFishFill size={30} />
        </Col>
      </Row>
    </div>
  );
};
