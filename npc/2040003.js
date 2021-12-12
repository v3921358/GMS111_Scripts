/*
	名字:	助教 尚
	地圖:	玩具工厂&amp;lt;第1工程&gt;第1地区
	描述:	220020000
*/

function start() {
	if (cm.getPlayer().getMapId() == 220020000) {
		cm.sendYesNo("現在我就帶你過去第4地區。");
	} else {
		cm.sendYesNo("你要回去第1地區嗎?");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getPlayer().getMapId() == 220020000) {
			cm.warp(922000000);
		} else {
			cm.warp(220020000);
			}
			}
		cm.dispose();
}