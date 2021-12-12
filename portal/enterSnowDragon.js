/*
	名字:	龙沉睡的岛
	地圖:	冰雪覆盖的森林
	描述:	914100010
*/

function enter(pi) {
	if (pi.getQuestStatus(22589) == 1) {
		pi.resetMap(914100023);   //地图刷新
		pi.warp(914100023,1);  //寂静的洞穴
		pi.forceStartQuest(22604, "1");
		pi.spawnNpc(1205000, 407,140);
	} else if (pi.isQuestFinished(22589)) {
		pi.warp(914100021, 1);   //寂静的洞穴
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}
