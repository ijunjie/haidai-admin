/**
 * @author monkeywang
 * Date: 17/7/31
 */
import util from '../common/utils'

let api = {
  getShopList () {
    return util.get('/index/getShopList')
  },
  login (params) {
    return util.post('/users/login', params)
  },
  getShopDetail (params) {
    return util.get('/index/getShopDetail', params)
  }
}
export default api
