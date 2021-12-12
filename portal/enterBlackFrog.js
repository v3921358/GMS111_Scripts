/*
	名字:	玩具城
	地圖:	玩具城村落
	描述:	220000300
*/

function enter(pi) {
	if (pi.isQuestActive(22596) == 1) {  //完成任务条件
		if (pi.getPlayerCount(922030001) == 0) { 
		pi.warp(922030001,0);   //青蛙嘴里的房子
		pi.getMap(922030001).resetFully();//地图刷新
		pi.spawnMobOnMap(9300393,1,-183,31,922030001);//召唤怪物
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.warp(922030000,0);  //青蛙嘴里的房子
}
}