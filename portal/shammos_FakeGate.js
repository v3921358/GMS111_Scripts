/*
	����:	�����
	�؈D:	�����1
	����:	921120005
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
		pi.playPortalSE();
		pi.warpParty(921120100);  //�����2
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}