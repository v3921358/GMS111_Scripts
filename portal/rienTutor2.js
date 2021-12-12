/*
	名字:	冰雪岛
	地圖:	寒冷森林2
	描述:	140090200
*/

function enter(pi) {
	if (pi.getQuestStatus(21011) == 2) {
		pi.warp(140090300, 1);  //寒冷森林3
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}