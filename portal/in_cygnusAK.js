/*
	名字:	次元缝隙
	地圖:	黑暗祭坛入口
	描述:	272030300
*/

function enter(pi) {
	if (pi.getPlayerCount(272010200) == 0) {    //pi.openNpc(1104209);
		pi.resetMap(272030400);   //地图刷新   
		pi.warp(272030400, 1);  //黑暗祭坛
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
}
}