import Vue from 'vue'
import VueMaterial from 'vue-material'
import Tripio from 'tripio';

Vue.use(VueMaterial);
Vue.prototype.$tripio = Vue.tripio = new Tripio(web3, {
    env: 'ropsten'
});
