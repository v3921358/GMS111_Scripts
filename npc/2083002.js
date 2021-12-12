/*
	名字:	树根水晶
	地圖:	暗黑龙王洞穴入口
	描述:	240050400
*/

function start() {
	if (cm.getMapId() == 240050400) {
		cm.sendYesNo("Do you want to go back to #m240050000#?");
	} else {
		cm.sendYesNo("Do you want to go back to #m240050400#?");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getMapId() == 240050400) {
			cm.warp(240050000);
		} else {
			cm.warp(240050400);
			}
			}
		cm.dispose();
}