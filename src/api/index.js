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
  sign (params) {
    return util.post('/users/sign', params)
  },
  getShopDetail (params) {
    return util.get('/index/getShopDetail', params)
  },
  getUserInfo (params) {
    return util.get('/users/getUserInfo', params)
  }
}
export default api
