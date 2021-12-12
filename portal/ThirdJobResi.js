/*
	名字:	莱班矿山
	地圖:	电站保安队
	描述:	310050100
*/

function enter(pi) {
	if (pi.getQuestStatus(23033) == 1 || pi.getQuestStatus(23034) == 1 || pi.getQuestStatus(23035) == 1) {
	if (pi.getPlayerCount(931000200) == 0) {
		pi.resetMap(931000200);   //地图刷新
		pi.warp(931000200, 1);  //3次转职
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else if (pi.getQuestStatus(24090) == 1) {
	if (pi.getPlayerCount(931040010) == 0) {
		pi.resetMap(931040010);   //地图刷新
		pi.warpParty(931040010,1);  //危险的电站
		pi.spawnNpc(1033230, 540,15);
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}