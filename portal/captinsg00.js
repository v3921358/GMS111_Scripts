/*
	名字:	新加坡
	地圖:	幽灵船 7
	描述:	541010060
*/

function enter(pi) {
	if (!pi.haveItem(4000381)) {
		pi.playerMessage(-7,"[Portal]沒有携带白色精華，無法進入此傳送點");
	} else {
	if (pi.getPlayerCount(541010100) <= 0) { // Capt. Lac Map
		var captMap = pi.getMap(541010100);
		captMap.resetFully();
		pi.playPortalSE();
		pi.warp(541010100, "sp");
	} else {
	if (pi.getMap(541010100).getSpeedRunStart() == 0 && (pi.getMonsterCount(541010100) <= 0 || pi.getMap(541010100).isDisconnected(pi.getPlayer().getId()))) {
		pi.playPortalSE();
		pi.warp(541010100, "sp");
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
}
}
}
}