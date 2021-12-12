/*
	名字:	240080600
	地圖:	240080600
	描述:	240080600
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
		pi.warpParty(pi.getPlayer().getMapId() + 100);
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}