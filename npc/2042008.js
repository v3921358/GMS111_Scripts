/*
	名字:	红队助手
	地圖:	嘉年华战斗地图&amp;lt;准备地图&gt;
	描述:	980031000
*/

function start() {
	cm.sendYesNo("返回休彼德蔓的办公室！");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(980030000,4);
		}
	cm.dispose();
}