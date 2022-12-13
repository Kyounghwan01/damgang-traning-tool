import { NavBar, TabBar } from "antd-mobile";
import {
  useNavigate,
  useLocation,
  MemoryRouter as Router
} from "react-router-dom";
import {
  UnorderedListOutline,
  HistogramOutline,
  SetOutline,
  EditSOutline
} from "antd-mobile-icons";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/",
      icon: <UnorderedListOutline />
    },
    {
      key: "/insert",
      icon: <EditSOutline />
    },
    {
      key: "/statistics",
      icon: <HistogramOutline />
    },
    {
      key: "/setting",
      icon: <SetOutline />
    }
  ];

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} />
      ))}
    </TabBar>
  );
};

export default Index;
