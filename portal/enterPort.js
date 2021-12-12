/*
	名字:	冰雪岛
	地圖:	冰雪覆盖的原野3
	描述:	140020200
*/

function enter(pi) {
	if (pi.getQuestStatus(21301) == 1) {
	if (pi.getPlayerCount(914022000) == 0) {
		pi.warp(914022000, 1);  //驱赶小偷乌鸦
		pi.getMap(914022000).resetFully();//地图刷新
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.warp(140020300, 1); //企鹅港口
}
}
