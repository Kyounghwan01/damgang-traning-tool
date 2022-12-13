import { useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { errorAtom } from "./common/atom";
import Router from "./Router";
import { ConfigProvider } from "antd-mobile";
import koKR from "antd-mobile/es/locales/ko-KR";

function App() {
  // 모든 에러가 여기서 잡힘
  const [error, setError] = useRecoilState(errorAtom);
  const queryClient = useQueryClient();
  queryClient.setDefaultOptions({
    queries: {
      onError: err => {
        setError(prev => [...prev, (err as any).message as string]);
      },
      retry: 1
    }
  });
  return (
    <ConfigProvider locale={koKR}>
      {error.length !== 0 &&
        error.map((err, index) => {
          return <div key={index}>{err}</div>;
        })}
      <Router />
    </ConfigProvider>
  );
}

export default App;
