/*
	名字:	黄金寺院
	地圖:	950101000
	描述:	950101000
*/

function enter(pi) {
	if (pi.getPlayerCount(809061010) == 0 && pi.getPlayerCount(950101010) == 0 ) {
		pi.openNpc(9000082,"9000082_1");
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
}
}
