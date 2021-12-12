/*
	名字:	托马斯
	地圖:	金银岛
	描述:	100000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 0) {
		cm.sendOk("好的，當你有什麼需要的時候，歡迎隨時來找我！");
		cm.dispose();
		return;
	}
	status--;
	}
	if (status == 0) {
		if (cm.getMapId() == 100000000) {
			cm.sendYesNo("你想不想去結婚小鎮?");
		} else if (cm.getMapId() == 680000500 || cm.getMapId() == 680000501 || cm.getMapId() == 680000502) {
			cm.setQuestRecord(cm.getPlayer(), 160002, "0");
			cm.warp(680000000, 0);
			cm.dispose();
		} else {
			cm.sendYesNo("你想回去原来的地方?");
			}
			}
	if (status == 1) {
		if (cm.getMapId() == 100000000) {
			cm.warp(680000000, 0);
		} else {
			cm.warp(100000000, 5);
			}
		cm.dispose();
}
}