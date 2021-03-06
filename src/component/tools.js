import axios from 'axios';

export const Qs = () => {
    var sStr = window.location.href,
        params = {};
    var pattern = /(\w+)=([^&#]*)*/g;
    var arr = sStr.match(pattern);
    if(arr){
        for(var i = 0; i < arr.length; i++){
            var kv = arr[i].split('=');
            params[kv[0]] = kv[1];
        }
    }
    return params;
    console.log(params);
}
const params = Qs();
const $http = axios.create({
    timeout:80000,
    headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        // "Accept":"application/json",
        // "Content-Type":"application/json",
        'content-type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true // 允许携带cookie
});

$http.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
});

export {$http}

export const json2Form = json =>{
    var str = [];
    for (var p in json) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
    }
    return str.join("&");
    console.log(str)
}

export const toFix = num => {
    if(!isNaN(num)){
        return (num/100).toFixed(2);
    }
    return num;
}

const checkNum = n => {
    return n < 10 ? ("0" + n) : n;
}

export const DateF = (time, f) => {
    if(time){
        let d = new Date(time);
        let YMd = d.getFullYear() + '-' + checkNum(d.getMonth() + 1) + "-" + checkNum(d.getDate());
        let Hms = checkNum(d.getHours()) + ":" + checkNum(d.getMinutes()) + ":" + checkNum(d.getSeconds());
        if(f === 'date'){
            return YMd;
        }
        return YMd + " " + Hms;
    }
    return time;
}

