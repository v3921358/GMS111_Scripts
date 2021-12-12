/*
	名字:	冰封谷
	地圖:	冰封谷1
	描述:	921120005
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
		pi.playPortalSE();
		pi.warpParty(921120100);  //冰封谷2
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}