/*
	����:	����֮��
	�؈D:	�ŵ��Ƚ���&amp;lt;��Ϣ��&gt;
	����:	920010400
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		pi.warpParty(920010100,3); //�ŵ��Ƚ���&amp;lt;������&gt;
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]����ɽM�L��꠲����M��˂����c");
}
}