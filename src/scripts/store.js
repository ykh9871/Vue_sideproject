import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            account: {
                email: '',
                exp : '',
                isLogin : false
            }
        }
    },
    mutations: {
        setAccount(state, {email, exp, isLogin}) {
            state.account.email = email;
            state.account.exp = exp;
            state.account.isLogin = isLogin;
        }
    }
})

export default store;