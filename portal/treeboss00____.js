/*
	名字:	新加坡
	地圖:	克雷塞尔遗迹 I
	描述:	541020700
*/

function enter(pi) {
	if (pi.getPlayerCount(541020800) <= 0) { // krex. Map
	var krexMap = pi.getMap(541020800);  //千年树精王遗迹Ⅱ
		krexMap.resetFully();
		pi.playPortalSE();
		pi.warp(541020800, "sp");
		return true;
	} else {
	if (pi.getMap(541020800).getSpeedRunStart() == 0 && (pi.getMonsterCount(541020800) <= 0 || pi.getMap(541020800).isDisconnected(pi.getPlayer().getId()))) {
		pi.playPortalSE();
		pi.warp(541020800, "sp");
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		return false;
}
}
}