/*
	名字:	怪物公园吉普车
	地圖:	金银岛
	描述:	怪物公园出入
*/

function start() {
	if (cm.getMapId() == 951000000) {
		cm.sendYesNo("Welcome to  #b#m951000000##k，妳想回到村裡去嗎？");
	} else {
		cm.sendYesNo("親愛的顧客，妳想到充滿了歡樂的休彼德蔓#b#m951000000##k去嗎？");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getMapId() == 951000000) {
		cm.warp(100000000);
	} else {
		cm.warp(951000000);
		}
		}
	cm.dispose();
}