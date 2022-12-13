import { useState } from "react";
import Layout from "../../component/layout";
import { List, Switch } from "antd-mobile";
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline
} from "antd-mobile-icons";

const Index = () => {
  const [value, setValue] = useState("");

  return (
    <Layout
      header={{
        isHeader: true,
        title: "설정",
        back: true
      }}
      footer={true}
    >
      <List header="설정">
        <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
          방관리
        </List.Item>
        <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
          회원정보관리
        </List.Item>
      </List>
    </Layout>
  );
};

export default Index;
