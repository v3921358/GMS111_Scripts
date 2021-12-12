/*
	名字:	精灵竖琴
	地圖:	国王休息处
	描述:	101050010
*/

function start() {
	if (cm.getPlayer().getJob() == 2300) {
		cm.sendYesNo("要去和`偉大的精靈`見面嗎？");
	} else {
		cm.sendOk("國王的風琴。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("我的國王，等待你的再次歸來。");
	} else {
		cm.warp(910150100,0);
		}
	cm.dispose();
}
