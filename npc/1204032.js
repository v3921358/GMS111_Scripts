/*
	名字:	赫利娜
	地圖:	陷入危险的弓箭手培训中心
	描述:	910050000
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {//判断地图有没有怪物
		cm.sendOk("終於等到你來了，#b#h0##k。");
	} else {
		cm.sendOk("請消滅人偶師在來解救我！");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(21765, "2");//给可以完成任务的条件
	cm.warp(100000201, 1); 
	cm.dispose();
}