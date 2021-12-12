/*
	名字:	冰封谷
	地圖:	万年冰河洞穴
	描述:	921120300
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
		pi.playPortalSE();
		pi.warpParty(921120400);  //峡谷墓地
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中的雷克斯");
}
}