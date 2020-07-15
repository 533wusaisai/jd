
import config from "../../assets/js/conf/config";
import {request} from "../../assets/js/utils/request";

export function getNavsData(data){
    return request(config.baseApi+'/home/index/nav?token='+config.token)
}