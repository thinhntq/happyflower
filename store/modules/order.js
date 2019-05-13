import RestApiCall from '@/services/RestApiCall.js';

export const namespaced = true

export const state = {
    order : []
}
export const mutations = {
    LIST_EVENT(state, data) {
        state.order = data
    }
}
export const actions = {
    listOrder( { commit } ) {
        return RestApiCall.GET('/orders').then((order) => {
            commit("LIST_EVENT", order)
        })
    }
}