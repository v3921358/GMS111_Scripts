/*
	����:	���ܵ�ͼ
	�؈D:	�ŵ��Ƚ���&amp;lt;������&gt;
	����:	920010600
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		pi.warpParty(920010200,13); //�ŵ��Ƚ���&amp;lt;ɢ��·&gt;
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]����ɽM�L��꠲����M��˂����c");
}
}