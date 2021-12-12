/*
	名字:	Alien Base	
	地圖:	Alien Matter-Cloner Entrance
	描述:	610040800
*/

function enter(pi) {
	if (pi.getPlayerCount(610040400) == 0) {
		pi.resetMap(610040400);   //地图刷新
		pi.warpParty(610040400);   //BOSS地图
		pi.spawnMobOnMap(9400802,1,540,40,610040400);//召唤怪物
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
}
}