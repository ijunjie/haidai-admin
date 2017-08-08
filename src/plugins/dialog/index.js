/**
 * @author monkeywang
 * Date: 17/8/8
 */
import SuDialog from './dialog.vue'

/* istanbul ignore next */
SuDialog.install = function (Vue) {
  Vue.component(SuDialog.name, SuDialog)
}

export default SuDialog
