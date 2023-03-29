import requests from "./request";
import mockRequests from "./mockRequest";

export const reqCategoryList = () => {
    return requests({url:'product/getBaseCategoryList', method:'get'})
}

export const reqBannerList = () => {
    return mockRequests("/banner");
}

export const reqFloorList = () => {
    return mockRequests("/floor");
}

export const reqGetSearchInfo = (params) => {
    return requests({url:'/list', method:'post', data:params});
}