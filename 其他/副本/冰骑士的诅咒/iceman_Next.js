/*
	����:	����ԭҰ
	�؈D:	����ԭҰС��
	����:	932000100
*/

function enter(pi) {
try {
	if (pi.getPlayer().getParty() != null && pi.getMap().getMonsterById(9300438) == null && pi.isLeader()) {
		pi.warpParty(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]Ո�_�����Tʿ���@�e�������M��˂����c");
		}
	} catch (e) {
		pi.playerMessage(5, "Error: " + e);
}
}