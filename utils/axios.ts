import { TOKEN_KEY } from "@/constants";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const customAxios = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  // baseURL: "https://trievent-api-staging.tribox.me/api",
});

const getToken = () => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    return token;
  } catch {
    return null;
  }
};

// export const handleRefreshToken = async (): Promise<string | null> => {
//   const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
//   if (refreshToken) {
//     try {
//       const body: RefreshTokenBody = { refreshToken }
//       const res = await axios.post<RefreshTokenResponse>(
//         BASE_URL + '/organizer/refresh-token',
//         body,
//       )

//       const { data } = res?.data ?? {}
//       localStorage.setItem(TOKEN_KEY, data.accessToken)
//       localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken)
//       return data.accessToken
//     } catch (error) {
//       console.log(error)
//       localStorage.removeItem(TOKEN_KEY)
//       localStorage.removeItem(REFRESH_TOKEN_KEY)
//       localStorage.removeItem(MERCHANT)
//       message.error('Your session has expired. Please login again.')
//     }
//   }
//   return null
// }

customAxios.interceptors.request.use((config) => {
  const token = getToken();

  if (
    typeof config.headers?.set === "function" &&
    typeof config.headers?.get === "function"
  ) {
    if (token) config.headers?.set("Authorization", "Bearer " + token);

    if (!config.headers.get("allowRetry"))
      config.headers?.set("allowRetry", true);
    else config.headers?.set("allowRetry", null);

    config.headers?.set("Content-Type", "application/json");
  }
  return config;
});

customAxios.interceptors.response.use(
  undefined,
  async (error: { config: AxiosRequestConfig; response: AxiosResponse }) => {
    const config = error.config;
    const allowRetry =
      typeof config.headers?.get === "function" &&
      config.headers?.get("allowRetry");

    if (!error.response) {
      return Promise.reject(error);
    }

    // if (error.response.status === 401 && allowRetry) {
    //   const token = await handleRefreshToken();
    //   if (token && typeof config.headers?.set === "function") {
    //     config.headers?.set("allowRetry", null);
    //     return customAxios(config);
    //   }
    // }

    return Promise.reject(error);
  }
);

export default customAxios;
