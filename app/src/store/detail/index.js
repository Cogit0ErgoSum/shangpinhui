import Vue from 'vue';
import Vuex from 'vuex';
import { reqAddOrUpdateShopCart, reqGoodsInfo } from '@/api';
import {getUUID} from '@/utils/uuid_token'

Vue.use(Vuex);

const state = {
    goodsInfo: {},
    uuid_token: getUUID()
}

const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo;
    },
    
}

const actions = {
    async getGoodsInfo({commit}, skuid) {
        let result = await reqGoodsInfo(skuid);
        if(result.code == 200) {
            commit("GETGOODSINFO", result.data);
        }
    },

    async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
        
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    }
}

const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || [];
    }
}

export default ({
    namespaced: true,
    state,
    mutations,
    actions,
    getters
});