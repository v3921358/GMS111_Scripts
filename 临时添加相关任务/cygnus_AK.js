/*
	名字:	时间神殿
	地圖:	三个门
	描述:	270000000
*/

function enter(pi) {
	if (pi.getQuestStatus(20752) == 1) {
		pi.getPlayer().updateQuestCustomData(20752,"find");
		pi.playerMessage(-7,"[Portal]找到了阿卡伊勒的入口");
	} else if (pi.getQuestStatus(20755) == 1) {
		pi.getPlayer().updateQuestCustomData(20755,"Complete");
		pi.playerMessage(-7,"[Portal]使用精灵之光");
		pi.gainItem(2430564, -1);
	} else if (pi.isQuestFinished(20755)) {
		pi.warp(272030000,1); //次元缝隙
	} else {
		pi.playerMessage(-7,"[Portal]好像有一股力量封鎖此傳送點");
}
}