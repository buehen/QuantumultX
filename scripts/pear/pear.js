/*
Pear unlock vip by 渤涵
#Pear解锁会员无限看
#下载地址
#https://www.pears.live?ivcode=DUJ7&t=20210504
[rewrite_local]
^https:\/\/(cn.youku-ca.com|bkcd\.b-cdn.net|souhu.mett.me|m.pearkin.com|www.baidu.com2.club)\/(api\/movie\/WatchMovieNew|api\/account\/IsVip|api\/account\/IndexDetail) url script-response-body tank0426/scripts/pear/pear.js
[MITM]
hostname = bkcd.b-cdn.net, cn.youku-ca.com, souhu.mett.me, m.pearkin.com, www.baidu.com2.club
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const bf = '/api/movie/WatchMovieNew';

const vip = '/api/account/IsVip';

const user = '/api/account/IndexDetail';

if (url.indexOf(bf) != -1) {
	obj["canWath"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(vip) != -1) {
	obj["data"] = "1";
    obj["value"] = "true";
	body = JSON.stringify(obj);
 }
if (url.indexOf(user) != -1) {
	obj["nickName"] = "buehen";
    obj["vipLevel"] = "99";
    obj["vipEndTime"] = "2099-09-09";
    obj["cartoonVip"] = "true";
	body = JSON.stringify(obj);
 }
$done({body});