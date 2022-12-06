import axios from "axios";
import { IList } from "./type";

function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

export async function getList() {
  return sleep(1000).then(async () => {
    // const { data } = await axios.get("http://localhost:3001/list");
    // return data;
    throw Error("ddddd");
  });
}

export const postPersonInList = (data: IList) => {
  return axios.post("http://localhost:3001/list", {
    name: data.name,
    age: data.age,
    id: Date.now()
  });
};

export async function getProjectId() {
  const {
    data: { id }
  } = await axios.get("http://localhost:3001/project");
  return id;
}

export const patchProjectId = (id: number) => {
  return axios.patch("http://localhost:3001/project", { id });
};
