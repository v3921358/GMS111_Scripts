/*
	名字:	天空中的克里塞
	地圖:	进入角斗场内部
	描述:	200101400
*/

function enter(pi) {
	if (pi.isQuestFinished(31013)) {  //完成任务条件
	if (pi.getPlayerCount(200101500) == 0) { 
		pi.resetMap(200101500);   //地图刷新
		pi.warpParty(200101500,1);  //激战薛西斯
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else if (pi.getQuestStatus(31013) == 1) {
		pi.forceStartQuest(31018,"1");
		pi.playerMessage(-1, "回去报告下情况。");	
	} else {
		pi.playerMessage(-7,"[Portal]好像有一股力量封鎖此傳送點");
}
}