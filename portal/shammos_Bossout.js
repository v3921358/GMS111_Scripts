/*
	����:	�����
	�؈D:	������Ӷ�Ѩ
	����:	921120300
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
		pi.playPortalSE();
		pi.warpParty(921120400);  //Ͽ��Ĺ��
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�е��׿�˹");
}
}