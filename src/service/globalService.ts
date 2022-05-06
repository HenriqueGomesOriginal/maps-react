import axios from "axios";

import { apiUrls } from "../config/api-urls";

export const url = apiUrls.dev;

const api = axios.create({
    baseURL: url,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });

  export default api;