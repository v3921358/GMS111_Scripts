/*
	名字:	拉兰丝修女
	地圖:	結婚小鎮
	描述:	680000000
*/

function start() {
	if (cm.getPlayer().getMapId() == 680000000) {
		cm.sendYesNo("你要去結婚禮堂嗎？");
	} else {
		cm.sendYesNo("你要回去結婚小鎮嗎？");
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("你想好了可以隨時帶你過去！");
		}
	if (mode == 1) {
		if (cm.getPlayer().getMapId() == 680000000) {
			cm.warp(680000200);
		} else {
			cm.warp(680000000);
			}
			}
		cm.dispose();
}