/*
	名字:	内拉
	地圖:	第一次同行&amp;lt;1号门&g
	描述:	910340100
*/

function start() {
	cm.sendYesNo("你想離開組隊地圖！");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(910340700,0);
		}
	cm.dispose();
}