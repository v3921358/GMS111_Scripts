/*
	名字:	玩具城
	地圖:	消失的回廊
	描述:	220070400
*/

function enter(pi) {
	if (pi.getQuestStatus(20749) == 1) {  //完成任务条件
	if (pi.getPlayerCount(922000030) == 0) { 
		pi.warp(922000030, 1);
		pi.resetMap(922000030);   //地图刷新
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.playerMessage(-7,"[Portal]好像有一股力量封鎖此傳送點");
}
}