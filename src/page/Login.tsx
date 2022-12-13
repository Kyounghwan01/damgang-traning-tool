import { useState } from "react";
import { Form, Input, Button } from "antd-mobile";
import Layout from "../component/layout";

const Login = () => {
  const [value, setValue] = useState("");

  return (
    <Layout
      header={{
        isHeader: true,
        title: "로그인",
        back: true
      }}
      footer={true}
    >
      <div>
        <Form layout="vertical">
          <Form.Item label="아이디" name="username">
            <Input placeholder="아이디를 입력해주세요" clearable />
          </Form.Item>
          <Form.Item label="패스워드" name="password">
            <Input
              placeholder="패스워드를 입력해 주세요"
              clearable
              type="password"
            />
          </Form.Item>
        </Form>

        <Button block color="primary" size="large">
          로그인
        </Button>
      </div>
    </Layout>
  );
};

export default Login;
