/*
	����:	��ʿ��Ҫ��
	�؈D:	��������
	����:	271030600
*/

function enter(pi) {
	if (pi.getQuestStatus(31149) == 1) {
		pi.getPlayer().updateQuestCustomData(31149,"find");
		pi.playerMessage(-7,"[Portal]ȷ����ϣ��˹��ͥԺ��λ��");
	} else if (pi.isQuestFinished(31149)) {
		pi.warp(271040000, 1);  //ϣ��˹��ͥԺ  //pi.openNpc(2133005);  ȡ��npc
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}