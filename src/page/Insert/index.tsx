import React, { useState } from "react";
import Layout from "../../component/layout";
import { Card, Toast, Button } from "antd-mobile";
import { AntOutline, RightOutline } from "antd-mobile-icons";
import CustomCard from "../../component/CustomCard";

const Index = () => {
  const [value, setValue] = useState("");
  const [time, setTime] = useState({
    hour: 0,
    min: 0
  });
  const [beatMakerSecond, setBeatMakerSecond] = useState(0);
  const [chinning, setChinning] = useState(0);
  const onHeaderClick = () => {
    Toast.show("点击了卡片Header区域");
  };

  const onBodyClick = () => {
    Toast.show("点击了卡片Body区域");
  };

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === undefined) {
      return;
    }

    console.log(e.currentTarget.value);
    setBeatMakerSecond(Number(e.currentTarget.value));
  };

  return (
    <Layout header={{ isHeader: false }} footer={true}>
      <>
        <div>
          <div>오늘 총 운동시간</div>
          <h1>
            <input value={time.hour} />
            :
            <input value={time.min} />
          </h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            padding: "10px",
            gap: "10px"
          }}
        >
          <CustomCard
            title="비메손걸기"
            clickEvent={handleChangeEvent}
            value={beatMakerSecond}
            scale="초"
            active={!!beatMakerSecond}
          />

          <CustomCard
            title="턱걸이"
            clickEvent={handleChangeEvent}
            value={beatMakerSecond}
            scale="초"
            active={!!beatMakerSecond}
          />
        </div>
      </>
    </Layout>
  );
};

export default Index;
