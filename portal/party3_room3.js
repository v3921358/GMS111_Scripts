/*
	����:	���ܵ�ͼ
	�؈D:	�ŵ��Ƚ���&amp;lt;������&gt;
	����:	920010600
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		pi.warpParty(920010400,1); //�ŵ��Ƚ���&amp;lt;��Ϣ��&gt;
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]����ɽM�L��꠲����M��˂����c");
}
}