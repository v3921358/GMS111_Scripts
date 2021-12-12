/*
	名字:	忘却的神殿管理人
	地圖:	神的黄昏
	描述:	270050100
*/

function start() {
	cm.sendYesNo("你現在想出去嗎？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(270050000, 0);
		}
	cm.dispose();
}