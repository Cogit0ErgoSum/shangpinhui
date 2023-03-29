import Vue from 'vue';
import Vuex from 'vuex';
import { reqBannerList, reqCategoryList, reqFloorList } from '@/api';

Vue.use(Vuex);

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList; 
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
}

const actions = {
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if(result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    async getBannerList({commit}) {
        let result = await reqBannerList();
        if(result.code == 200) {
            commit("BANNERLIST", result.data);
        }
    },
    async getFloorList({commit}) {
        let result = await reqFloorList();
        if(result.code == 200) {
            commit("FLOORLIST", result.data);
        }
    }
}

const getters = {

}

export default ({
    namespaced: true,
    state,
    mutations,
    actions,
    getters
});