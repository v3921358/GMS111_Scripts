/*
	����:	���������ǵ�
	�؈D:	�������������
	����:	600010200
*/

function enter(pi) {
	if (pi.getQuestStatus(28746) == 1) {
		pi.getPlayer().updateQuestCustomData(28746,"1");
		pi.warp(600010300,1);   //����ɽ��
		pi.playerMessage(-7,"[Portal]��������ɵ����ԭ����");
	} else if (pi.isQuestFinished(28746)) { 
		pi.warp(600010300,1);   //����ɽ��
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}