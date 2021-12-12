/*
	名字:	神秘岛
	地圖:	散步路Ⅱ
	描述:	200060000
*/

function enter(pi) {
	if (pi.isQuestActive(21739)) {   //当前任务
		if (pi.getPlayerCount(920030000) == 0 && pi.getPlayerCount(920030001) == 0) {
			pi.resetMap(920030001);   //地图刷新
			pi.warp(920030000,0);  //人迹罕至的山路
			//pi.spawnMobOnMap(9300348,1,593,-157,920030001);//召唤怪物
		} else {
			pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
			}
		} else {
			pi.warp(200060001,0);  //人迹罕至的山路
}
}