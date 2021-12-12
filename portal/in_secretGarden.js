/*
	名字:	骑士团要塞
	地圖:	骑士团第4区域
	描述:	271030400
*/

function enter(pi) {
	if (pi.getQuestStatus(31146) == 1) {
	if (pi.getPlayerCount(271030410) == 0) {
		pi.resetMap(271030410);   //地图刷新
		pi.warp(271030410, 1);  //秘密庭院
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.playerMessage(-7,"[Portal]需要接受拯救南哈特任务");
}
}