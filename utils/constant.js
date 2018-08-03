//url相关
var BASE_URL = "http://111.230.253.46/mgd";
var GET_WEL_BACK_URL = BASE_URL.concat("/codeegg_pride.png");
var GET_HOME_BACK_TOP_URL = BASE_URL.concat("/codeegg_top.png");
var GET_REGISTERED_URL = BASE_URL.concat("/registered.png");


//error相关
var ERROR_DATA_IS_NULL = "获取数据为空，请重试";

//各个page的URL
var PAGE_MAIN = "/pages/main/main";

module.exports = {
  BASE_URL: BASE_URL,
  GET_URL: GET_URL,
  ERROR_DATA_IS_NULL: ERROR_DATA_IS_NULL,
  PAGE_MAIN: PAGE_MAIN,
  PAGE_SPECIFIC: PAGE_SPECIFIC,
  PAGE_POSt: PAGE_POST
}