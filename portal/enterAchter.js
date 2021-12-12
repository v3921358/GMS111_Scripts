/*
	名字:	射手村
	地圖:	射手村
	描述:	100000000
*/

function enter(pi) {
	map = pi.getPlayer().getMap();
	if (pi.isQuestFinished(21754)) {
		pi.warp(100000201, 3);
	} else if (!pi.getPlayerCount(910050000) <= 0 && pi.isQuestFinished(21754)) {//判断地图是否有人。判断任务
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
	} else if (pi.isQuestFinished(21753)) {
		pi.getMap(910050000).resetFully();     //地图刷新
		pi.warp(910050000, 1);        //陷入危险的弓箭手培训中心
		pi.spawnMobOnMap(9300355,1,-14,107,910050000);//召唤怪物
		pi.getPlayer().startMapTimeLimitTask(600, map);
	} else{
		pi.warp(100000201, 3);   //弓箭手培训中心
}
}