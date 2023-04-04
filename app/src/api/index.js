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

export const reqGoodsInfo = (skuid) => {
    return requests({url:`/item/${skuid}`, methods:'get'});
}

export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return requests({url:`/cart/addToCart/${skuId}/${skuNum}`, method:"post"});
}

export const reqCartList = () => {
    return requests({url:'/cart/cartList', method:'get'});
}

export const reqDeleteCartById = (skuId) => {
    return requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});
}

export const reqUpdateCheckedById = (skuId, isChecked) => {
    return requests({url:`/cart/checkCart/${skuId}/${isChecked}`, method:'get'});
}