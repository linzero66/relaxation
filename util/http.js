import {config} from '/config.js'
class HTTP{
    request(params){
        wx.request({
            url:config.api_base_url + params.url
        })
    }
}