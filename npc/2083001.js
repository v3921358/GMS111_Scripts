/*
	名字:	暗黑龙王的里程碑
	地圖:	洞穴入口
	描述:	240050000
*/

function start() {
	cm.sendYesNo("你確定要進入?");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(240050400,0);
		}
	cm.dispose();
}