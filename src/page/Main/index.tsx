import { useState } from "react";
import Layout from "../../component/layout";
import { List, Switch } from "antd-mobile";
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline
} from "antd-mobile-icons";
import { Popup, Space, Button } from "antd-mobile";
import dayjs from "dayjs";

import { Calendar } from "antd-mobile";

const Index = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const today = dayjs();

  const [val, setVal] = useState<[Date, Date] | null>(() => [
    today.subtract(2, "day").toDate(),
    today.add(2, "day").toDate()
  ]);

  const defaultSingle = new Date();
  const defaultRange: [Date, Date] = [
    new Date("2022-03-09"),
    new Date("2022-03-21")
  ];

  const handleClick = () => {};

  return (
    <Layout
      header={{
        isHeader: false
      }}
      footer={true}
    >
      <>
        12:13 ~ 12:15일까지 운동기록!
        <List header="12/13">
          {/* 클릭하면 해당 일 기록하는 곳으로 이동 */}
          {/* [{type: 'exercicsTime', value: 90, scale: 'hm'}] */}
          <List.Item
            extra="1시간30분"
            prefix={<UnorderedListOutline />}
            // onClick={() => {}}
          >
            운동시간
          </List.Item>
          <List.Item
            extra="3개"
            prefix={<UnorderedListOutline />}
            // onClick={() => {}}
          >
            비매
          </List.Item>
          <List.Item
            extra="1개"
            prefix={<PayCircleOutline />}
            onClick={() => {}}
          >
            턱걸이
          </List.Item>
        </List>
        <List header="12/13">
          <List.Item
            extra="3개"
            prefix={<UnorderedListOutline />}
            // onClick={() => {}}
          >
            비매
          </List.Item>
          <List.Item
            extra="1개"
            prefix={<PayCircleOutline />}
            onClick={() => {}}
          >
            턱걸이
          </List.Item>
        </List>
        <button onClick={() => setVisible1(true)}>calendar date Picker</button>
        <Popup
          visible={visible1}
          onMaskClick={() => {
            setVisible1(false);
          }}
          bodyStyle={{ height: "90vh", borderRadius: "10px 10px 0 0 " }}
        >
          {/* datePick pop calendar */}
          <div style={{ paddingTop: "20px" }}>
            <Calendar
              selectionMode="single"
              defaultValue={defaultSingle}
              onChange={val => {
                console.log(val);
              }}
              renderLabel={date => {
                // if (dayjs(date).isSame(today, 'day')) return '今天'
                if (date.getDay() === 0 || date.getDay() === 6) {
                  return "周末";
                }
              }}
            />
          </div>
        </Popup>
        <div>
          <button onClick={() => setVisible2(true)}>
            range calendar date Picker
          </button>
          <Popup
            visible={visible2}
            onMaskClick={() => {
              setVisible2(false);
            }}
            bodyStyle={{ borderRadius: "10px 10px 0 0 " }}
          >
            {/* datePick week pop calendar */}
            <div style={{ padding: "20px 0 80px" }}>
              <Calendar
                selectionMode="range"
                value={val}
                onChange={val => {
                  console.log(val);
                  setVal(val);
                }}
              />

              <Button
                style={{
                  position: "absolute",
                  bottom: "0px",
                  borderRadius: "0"
                }}
                block
                color="primary"
                size="large"
                disabled={val?.length !== 2}
                onClick={() => setVisible2(false)}
              >
                선택
              </Button>
            </div>
          </Popup>
        </div>
      </>
    </Layout>
  );
};

export default Index;
