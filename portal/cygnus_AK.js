/*
	����:	ʱ�����
	�؈D:	������
	����:	270000000
*/

function enter(pi) {
	if (pi.getQuestStatus(20752) == 1) {
		pi.getPlayer().updateQuestCustomData(20752,"find");
		pi.playerMessage(-7,"[Portal]�ҵ��˰������յ����");
	} else if (pi.getQuestStatus(20755) == 1) {
		pi.getPlayer().updateQuestCustomData(20755,"Complete");
		pi.playerMessage(-7,"[Portal]ʹ�þ���֮��");
		pi.gainItem(2430564, -1);
	} else if (pi.isQuestFinished(20755)) {
		pi.warp(272030000,1); //��Ԫ��϶
	} else {
		pi.playerMessage(-7,"[Portal]������һ���������i�˂����c");
}
}