/*
	名字:	冰峰原野
	地圖:	冰峰原野小道
	描述:	932000100
*/

function enter(pi) {
try {
	if (pi.getPlayer().getParty() != null && pi.getMap().getMonsterById(9300438) == null && pi.isLeader()) {
		pi.warpParty(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]請確保冰騎士在這裡，才能進入此傳送點");
		}
	} catch (e) {
		pi.playerMessage(5, "Error: " + e);
}
}