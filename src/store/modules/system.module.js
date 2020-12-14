
import { bookService } from '@/services/bookService.js';


export default {
    state: {
        msg: {
            txt: '',
            type: '',
        }
    },
    getters: {
        msgToShow(state){
            return state.msg
        }
    },
    mutations: {
        setMsg(state, { msg }) {
            state.msg = msg
        },
    },
    actions: {},
    modules: {}
}