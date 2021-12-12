/*
	名字:	冰雪岛
	地圖:	寒冷森林1
	描述:	140090100
*/

function enter(pi) {
	if (pi.getQuestStatus(21010) == 2) {
		pi.warp(140090200, 1);  //寒冷森林2
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}