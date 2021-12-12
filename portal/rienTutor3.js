/*
	名字:	冰雪岛
	地圖:	寒冷森林3
	描述:	140090300
*/

function enter(pi) {
	if (pi.getQuestStatus(21012) == 2) {
		pi.warp(140090400, 1);  //寒冷森林4
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}