import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState, useRecoilState } from "recoil";
import { getProjectId } from "../common/api";
import { projectId, testState } from "../common/atom";
import { KEY_PROJECT_ID } from "../common/key";
import FirstList from "../component/FirstList";
import InputData from "../component/InputData";
import SecondList from "../component/SecondList";
import { FIRST_PAGE_PATH, SECOND_PAGE_PATH } from "../Router";

import { Button } from "antd-mobile";

function Main() {
  const { data } = useQuery(KEY_PROJECT_ID, getProjectId);
  const setProjectId = useSetRecoilState(projectId);
  const [test, setTest] = useRecoilState(testState);

  useEffect(() => {
    if (data) {
      setProjectId(data);
    }
  }, [data]);

  return (
    <>
      {test}
      <input value={test} onChange={e => setTest(e.currentTarget.value)} />
      <h1>ProjectId is {data ?? "null"}</h1>
      <FirstList />
      <SecondList />
      <InputData />
      <Button color="primary" fill="solid">
        Solidddd
      </Button>
      <div>
        <Link to="/">goMain</Link>
        <br />
        <Link to={FIRST_PAGE_PATH}>first page</Link>
        <br />
        <Link to={SECOND_PAGE_PATH}>second page</Link>
        <br />
      </div>
    </>
  );
}

export default Main;
