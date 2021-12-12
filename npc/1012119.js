/*
	名字:	炎海
	地圖:	孢子山丘
	描述:	100020000
*/

var map = 910060000;
var num = 5;
var maxp = 3;

function start() {
	if (cm.getPlayer().getLevel() > 30) {
		cm.sendOk("三十级以後無法使用唷。");
		cm.dispose();
	} else {
		var selStr = "选择一个你想要去的培训中心，30级以後無法使用唷！";
		for (var i = 0; i < num; i++) {
		selStr += "\r\n#b#L" + i + "#培训中心 " + i + " (" + cm.getPlayerCount(map + i) + "/" + maxp + ")#l#k";
		}
		cm.sendSimple(selStr);
}
}

function action(mode, type, selection) {
	if (cm.getPlayerCount(map + selection) >= maxp) {
		cm.sendOk("这个培育中心已经满人，请稍后再尝试！");
	} else {
		cm.warp(map + selection, 0);
		}
	cm.dispose();
}