import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import { patchProjectId } from "../common/api";
import { projectId } from "../common/atom";
// import { queryInvalidate } from "../common/helper";
import { KEY_PROJECT_ID } from "../common/key";

function InputData() {
  const [val, setVal] = useState(0);
  const { setQueryData } = useQueryClient();
  const setProjectId = useSetRecoilState(projectId);

  const { mutate, isSuccess } = useMutation(patchProjectId, {
    // onSuccess: () => queryInvalidate(KEY_PROJECT_ID),
    onSuccess: data => {
      // mutation 성공 후 해당 서버 데이터를 패칭하지 않고도 데이터를 바꿔줄 수 있음
      // cached 된 쿼리의 데이터를 즉시 변경해줌
      setQueryData(KEY_PROJECT_ID, data);
    }
  });

  const handleChangeValue = (event: React.FormEvent<HTMLInputElement>) => {
    setVal(+event.currentTarget.value);
  };

  const handleChangeId = () => {
    mutate(val);

    if (isSuccess) {
      setProjectId(val);
    }
  };

  return (
    <div>
      <input value={val} onChange={handleChangeValue} />
      <button onClick={handleChangeId}>Change Id</button>
    </div>
  );
}

export default InputData;
