import TabbarScrollDemo from '../views/example/tabbar-bottom-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
TabbarScrollDemo.el="#root";
new Vue(TabbarScrollDemo);