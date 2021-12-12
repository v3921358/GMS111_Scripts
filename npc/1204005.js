/*
	名字:	特鲁
	地圖:	危险的情报商店
	描述:	910400000
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {//判断地图有没有怪物
		cm.sendOk("真是大意了，居然發生了這樣的狀況，太丟臉了！");
	} else {
		cm.sendOk("請消滅人偶師在來解救我！");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(21762, "2");  //给予完成任务条件
	cm.warp(104000004, 0);
	cm.dispose();
}