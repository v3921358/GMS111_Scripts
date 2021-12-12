/*
	名字:	水泥路
	地圖:	埃德尔斯坦公园2
	描述:	恶魔二转
*/

function enter(pi) {
	if (pi.getQuestStatus(23210) == 1) {
		pi.warp(931050110,1);     //埃德尔斯坦公园喷泉附近2
		pi.spawnMonster(9001036, 873, -14);   //召唤怪物
	} else if (pi.isQuestFinished(23210)) {
		pi.warp(931050110, 1); //埃德尔斯坦公园喷泉附近2
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}