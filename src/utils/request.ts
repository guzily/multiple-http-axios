import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

let controller: any;

/**
 * @param index tab索引
 */
export const getTabContent = (index: number) => {
  // 取消上一次请求
  if (controller) {
    controller.abort();
  } 
  // 发起新的请求
  controller = new AbortController();
  return http.get(`/tab/${index}`, { signal: controller.signal });
};

// 未优化的函数
// export const getTabContent = (index: number) => {
//   return http.get(`/tab/${index}`);
// };
