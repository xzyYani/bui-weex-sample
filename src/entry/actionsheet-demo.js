import UiControlDemo from '../views/example/actionsheet-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
UiControlDemo.el="#root";
new Vue(UiControlDemo);

