/*
	名字:	龙沉睡的岛
	地圖:	寂静的洞穴
	描述:	914100022
*/

function enter(pi) {
	if (pi.getQuestStatus(22605) == 1) {
		pi.warp(914100010, 2); //冰雪覆盖的森林 
		pi.forceStartQuest(22600, "1");
		pi.forceCompleteQuest(22588);
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}