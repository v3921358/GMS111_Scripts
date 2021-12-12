/*
	名字:	OSSS Researcher
	地圖:	BOSS戰
	描述:
*/

function start() {
	cm.sendYesNo("你要從這裡出去嗎？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(980010000,0);
		}
	cm.dispose();
}