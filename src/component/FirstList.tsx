import { useEffect, Suspense } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { getList, postPersonInList } from "../common/api";
import { KEY_LIST } from "../common/key";
import { IList } from "../common/type";
import { MAIN_PAGE_PATH } from "../Router";

// invalidateQueries : QueryClient 에서 제공하는 메서드로, 주어지는 키에 매칭되는 쿼리를 stale 한 상태로 만들어서 리패칭 하게 하는 메서드
// 기본적으로 키를 제공했을 경우 배열속에 같은 키가 들어있다면 매칭되는 모든 쿼리들이 stale 하게 상태가 변화됨
// { exact: true } 옵션을 넣어주면 정확히 매칭이 가능.
function FirstList() {
  // const { data, isLoading } = useQuery<IList[], Error, number>( // 세 번째 제네릭 타입으로 select 의 리턴되는 타입을 지정해줄 수 있음
  const { data, isLoading } = useQuery<IList[], Error>( // 세 번째 제네릭 타입으로 select 의 리턴되는 타입을 지정해줄 수 있음
    KEY_LIST,
    getList,
    { suspense: true }
    // {
    //   select: (data) => {
    //     return data.length;
    //   },
    // }
  );

  useEffect(() => {
    console.log(data, isLoading);
  }, [data, isLoading]);

  const queryCache = useQueryClient();
  const { mutate, isError: isMutateError } = useMutation(postPersonInList, {
    onSuccess: () => {
      console.log("success");
      queryCache.invalidateQueries(KEY_LIST);
    },
    onError: error => {
      console.log(error);
    }
  });

  const location = useLocation();
  const handleClick = () => {
    mutate({ name: "yyy", age: "111" });
    if (isMutateError) {
      console.log("mutation error");
    }
  };

  return (
    <div>
      <h1>this is FirstList</h1>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            <span>name: </span>
            {item.name}
            <br />
            <span>age: </span>
            {item.age}
            <br />
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Person(invalidate On)</button>
      <br />
      {location.pathname !== MAIN_PAGE_PATH && <Link to="/">goMain</Link>}
    </div>
  );
}

export default FirstList;
