import axios from "axios";

const BASE_URL = "http://localhost:3001/api/";

function getUrl(resource: string) {
  return `${BASE_URL}${resource}`;
}

async function get(resource: string, queryParams?: object): Promise<any> {
  const res = await axios.get(getUrl(resource), { params: queryParams });
  return res.data;
}

async function post(resource: string, body?: object): Promise<any> {
  const res = await axios.post(getUrl(resource), body);
  return res.data;
}

export { get, post };
