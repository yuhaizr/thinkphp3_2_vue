import request from '@/utils/request'

export function roleList(param) {
    return request({
        url: 'http://localhost/thinkphp3_2_vue/index.php/Home/Role/roleList',
        method: 'get',
        params
    });
}