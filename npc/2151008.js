/*
	名字:	黑杰克
	地圖:	反抗者本部
	描述:	310010000
*/

var map = 931000500;
var num = 10;
var maxp = 1;

function start() {
	var selStr = "Would you like to go into the Jaguar Room?";
	for (var i = 0; i < num; i++) {
	selStr += "\r\n#b#L" + i + "#Jaguar Room " + (i+1) + " (" + cm.getPlayerCount(map + i) + "/" + maxp + ")#l#k";
	}
	cm.sendSimple(selStr);
}

function action(mode, type, selection) {
	if (selection < 0 || selection >= num) {
		cm.dispose();
	} else if (cm.getPlayerCount(map + selection) >= maxp) {
		cm.sendOk("這個培訓中心已經客滿了。");
	} else {
		cm.warp(map + selection, 0);
		}
	cm.dispose();
}