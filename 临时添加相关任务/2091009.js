/*
	名字:	封印寺院入口
	地圖:	下级修炼场
	描述:	250020100
*/

function start() {
	if (cm.isQuestActive(21747)) {
		cm.sendOk("你準備幹黑色之翼的手下了嗎？？我將把你傳送過去…");
	} else {
		cm.sendOk("不要亂凍，我只是跟柱子。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.getPlayerCount(925040100) == 0) {
		cm.warp(925040100,1);
		cm.getMap(925040100).resetFully();//地图刷新
		cm.spawnMonster(9300351,831,51);
	} else {
		cm.sendOk("有其它玩家正在执行任务！");
		}
	cm.dispose();
}
}