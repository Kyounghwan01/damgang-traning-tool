import { useNavigate } from "react-router-dom";
import Gnb from "../gnb";
import Header from "../header";

interface ILayout {
  header: {
    isHeader: boolean;
    title?: string;
    back?: boolean;
    backFunc?: () => void;
    right?: React.ReactNode;
  };
  footer: boolean;
  children: React.ReactChild;
}

const Index = ({ children, footer, header }: ILayout) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {header.isHeader && (
        <Header
          back={header.back || false}
          backFunc={header.backFunc || goBack}
          right={header.right}
          title={header.title || ""}
        />
      )}
      <div style={{ paddingBottom: footer ? "50px" : "0px" }}>{children}</div>

      {footer && (
        <div
          style={{
            position: "fixed",
            width: "100%",
            bottom: 0,
            zIndex: 1,
            background: "white"
          }}
        >
          <Gnb />
        </div>
      )}
    </>
  );
};

export default Index;
