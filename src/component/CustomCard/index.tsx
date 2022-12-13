import React from "react";
import { Card, Toast, Button } from "antd-mobile";

interface ICard {
  title: string;
  clickEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | string;
  scale: string;
  active: boolean;
}

const Index = ({ title, clickEvent, value, scale, active }: ICard) => {
  return (
    <Card
      title={<div style={{ fontWeight: "normal" }}>{title}</div>}
      // onBodyClick={clickEvent}
      // onHeaderClick={clickEvent}
      style={{
        borderRadius: "16px",
        background: "#eeeeee",
        padding: "10px"
      }}
      // bodyClassName
    >
      <div
        style={{
          textAlign: "right",
          fontWeight: "bold",
          color: active ? "blue" : "gray"
        }}
      >
        <input value={value} onChange={clickEvent} />

        {scale}
      </div>
    </Card>
  );
};

export default Index;
