/*

#樊登读书 unlock vip by 渤涵

[rewrite_local]
^https:\/\/api\.dushu\.io\/(userInfo|books\/freeList|app\/hasUserBlackCard) url script-response-body buehen0426/Scripts/fdds/fdds.js

[MITM]
hostname:api.idaddy.cn

*/


const path1 = "/userInfo";
const path2 = "/books/freeList";
const path3 = "/app/hasUserBlackCard";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path2) != -1){
obj.books.contents["memberOnly"] = "true";

}

if ($request.url.indexOf(path1) != -1){
obj["ilisten_vip"] = true;
obj["expire_time"] = "1999999999000";
obj["is_vip"] = true;
obj["isTrial"] = false;
obj["forever_vip"] = true;

}

if ($request.url.indexOf(path3) != -1){
obj["inActivity"] = "true";
obj["had"] = "true";
obj["oldUser"] = "true";
}

$done({body: JSON.stringify(obj)});