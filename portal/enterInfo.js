/*
	名字:	明珠港
	地圖:	明珠港
	描述:	104000000
*/

function enter(pi) {
	if (pi.getQuestStatus(21733) == 1) {    //当前任务条件
	if (pi.getPlayerCount(910400000) == 0) {
		pi.getMap(910400000).resetFully();//地图刷新
		pi.spawnMobOnMap(9300345,1,72,116,910400000);//召唤怪物
		pi.warp(910400000, 1); //危险的情报商店
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.warp(104000004, 1);  //特鲁的情报商店
}
}