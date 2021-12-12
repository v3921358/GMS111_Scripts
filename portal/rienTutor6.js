/*
	名字:	冰雪岛
	地圖:	寒冷森林5
	描述:	140090500
*/

function enter(pi) {
	if (pi.getInfoQuest(21019).equals("helper=clear")) {
		pi.updateInfoQuest(21019, "miss=o;helper=clear");
		pi.playerSummonHint(false);
}
}