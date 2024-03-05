import cookies from "js-cookie";

type StringObj = {
  [k in string]: string | number | boolean | undefined;
};

/** 对象拼接成查询字符串 */
export const objToQuery = (obj: StringObj) => {
  return Object.keys(obj)
    .filter((d) => obj[d] !== undefined)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
};

/**
 * 将给定的数据编码为URL安全的Base64格式。
 * @param {string} data - 要进行编码的数据。
 * @returns {string} URL安全的Base64编码字符串。
 */
export function encodeToUrlSafeBase64(data: string) {
  // 将数据转换为UTF-8编码的字节数组
  const utf8Bytes = new TextEncoder().encode(data);
  // 使用btoa()函数将字节数组转换为Base64编码的字符串
  const base64Str = btoa(String.fromCharCode(...utf8Bytes));
  // 进行URL安全转换
  return base64Str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

const hostMap = {
  wx3: "ymh53",
  wx1: "ymh51",
  wx: "ymh5",
  ymh53: "wx3",
  ymh51: "wx1",
  ymh5: "wx",
};

const ssoLogin = (redirect: string) => {
  const key = location.host.slice(0, location.host.indexOf("."));
  const tk = cookies.get("_xzkj_") || "";
  // sso登录地址
  const url = `https://${
    hostMap[key]
  }.scmttec.com/passport/sso.do?redirect=${window.encodeURIComponent(
    redirect
  )}&tk=${encodeToUrlSafeBase64(tk)}&from=${location.host}`;
  location.href = url;
};
export default ssoLogin;
