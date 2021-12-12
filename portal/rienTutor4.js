/*
	名字:	冰雪岛
	地圖:	寒冷森林4
	描述:	140090400
*/

function enter(pi) {
	if (pi.getQuestStatus(21013) == 2) {
		pi.warp(140090500, 1);  //寒冷森林5
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}