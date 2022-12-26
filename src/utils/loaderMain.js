import axios from "axios";

import { BASE_URL } from "../const";

export const loaderMain = async({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get(`page`);

  const res = await axios.get(`${BASE_URL}&page=${searchTerm}`)

  if (res.status === 200) {
    return await res.json();
  }

}

