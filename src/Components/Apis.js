import axios from "axios";
let baseUrl1 = "https://dummyjson.com/products";

let baseUrlPost = "https://dummyjson.com/products/add";

let baseUrlStop = "https://dummyjson.com/products/add";
fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Your Session has been stopped",
  }),
});

const Api = {
  getApiData: () => {
    return axios.get(baseUrl1);
  },
  postApiData: () => {
    return axios.post(baseUrlPost, {
      title: "This is a brand new BMW Modal",
      body: "This is a new post.",
    });
  },

  stopSessionRecoding: () => {
    return axios.post(baseUrlStop, {
      title: "Your Session has been stopped",
      body: "This is a new post.",
    });
  },
};
export default Api;
