/*
	名字:	玩具城
	地圖:	消失的回廊
	描述:	220070400
*/

function enter(pi) {
	if (pi.getQuestStatus(20748) == 1) {  //完成任务条件
		pi.forceStartQuest(20750,"Complete");
		pi.playerMessage(-7,"[Portal]好像有一股力量封鎖此傳送點");
	} else {
		pi.playerMessage(-7,"[Portal]好像有一股力量封鎖此傳送點");
}
}