/*
	����:	����֮��
	�؈D:	�ŵ��Ƚ���&amp;lt;ͥ԰&gt;
	����:	920010800
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() && pi.haveItem(4001055,1)) {
		pi.warpParty(920010100,3); //�ŵ��Ƚ���&amp;lt;������&gt;
	} else {
		pi.playerMessage(-7,"[Portal]����ɽM�L���������ݲ����M���_���˂����c");
}
}