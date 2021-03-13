import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
        async getUsers () {
            try {
                const { data } = await axios('https://raw.githubusercontent.com/IceIce1030/iceice1030.github.io/master/lottery/player.json');
                return data;
            }
            catch (error) {
                console.error(error.message);
            }
        }
    },
    modules: {
    }
});
