/*
	名字:	伊帕娅
	地圖:	第五座塔楼
	描述:	211061001
*/

function start() {
	cm.sendYesNo("你想去接見室走廊嗎？");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("呜。。呜。。呜呜。。。。");
	} else {
		cm.warp(211070000, 1);
		}
	cm.dispose();
}