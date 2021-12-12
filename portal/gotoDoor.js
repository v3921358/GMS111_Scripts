/*
	名字:	黑暗时间神殿
	地圖:	时间神殿回廊1
	描述:	272010100
*/

function enter(pi) {
	if (pi.getPlayerCount(272010200) == 0) {
		pi.resetMap(272010200);   //地图刷新
		pi.warp(272010200, 1);  //黑魔法师房间前面回廊
		pi.spawnMobOnMap(8860001,1,844,71,272010200);
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
}
}
