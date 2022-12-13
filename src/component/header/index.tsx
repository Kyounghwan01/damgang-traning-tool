import React from "react";
import { NavBar, Space, Toast } from "antd-mobile";
import { SearchOutline, MoreOutline, CloseOutline } from "antd-mobile-icons";

// const right = (
//   <div style={{ fontSize: 24 }}>
//     <Space style={{ "--gap": "16px" }}>
//       <SearchOutline />
//       <MoreOutline />
//     </Space>
//   </div>
// );

const Index = ({
  backFunc,
  title,
  back,
  right
}: {
  back: boolean;
  backFunc?: () => void;
  title: string;
  right?: React.ReactNode;
}) => {
  // const back = () =>
  //   Toast.show({
  //     content: "토스트",
  //     duration: 1000
  //   });

  return (
    <>
      {back ? (
        <>
          {right ? (
            <NavBar right={right} onBack={backFunc}>
              {title}
            </NavBar>
          ) : (
            <NavBar onBack={backFunc}>{title}</NavBar>
          )}
        </>
      ) : (
        <NavBar backArrow={<></>}>{title}</NavBar>
      )}
    </>
  );
};

export default Index;
