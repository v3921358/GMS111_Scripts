/*
	����:	240080600
	�؈D:	240080600
	����:	240080600
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
		pi.warpParty(pi.getPlayer().getMapId() + 100);
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}