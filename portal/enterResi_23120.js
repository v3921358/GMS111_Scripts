/*
	名字:	黑色之翼领地
	地圖:	埃德尔斯坦
	描述:	310000000
*/

function enter(pi) {
	if (pi.getQuestStatus(23120) == 1) {
	if (pi.getPlayerCount(931000410) == 0) {       //判断地图是否有其它玩家
		pi.resetMap(931000410);   //地图刷新
		pi.warp(931000410, 0);   //苏阿尔的水仓库
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}