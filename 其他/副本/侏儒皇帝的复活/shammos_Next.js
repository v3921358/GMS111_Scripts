/*
	名字:	冰封谷
	地圖:	冰封谷2
	描述:	921120100
*/

function enter(pi) {
try {
	if (pi.getPlayer().getParty() != null && pi.getMap().getMonsterById(9300275) == null && pi.isLeader()) {
	if (pi.getPlayer().getEventInstance() != null) {
		pi.warpParty_Instanced(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
	} else {
		pi.warpParty(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
		}
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]侏儒必須在傳送點附近才能開啟");
		}
	} catch (e) {
		pi.playerMessage(5, "Error: " + e);
}
}