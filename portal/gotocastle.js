/*
	����:	Ģ����
	�؈D:	ѡ����
	����:	106020400
*/

function enter(pi) {
	if (pi.getQuestStatus(2322) == 1) {
		pi.getPlayer().updateQuestCustomData(2322,"1");
		pi.showInstruction("��ħ�����ϣ����r�����^��ȥ����ȥ��������", 150, 5);
	} else  if (pi.getQuestStatus(2324) == 1) {
		pi.warp(106020501,0);  //��ǽ����
		pi.getPlayer().updateQuestCustomData(2324,"1");
		pi.showInstruction("�������������ȥ�������������", 150, 5);
	} else  if (pi.isQuestFinished(2324)) {//�ж��Ƿ��������
		pi.warp(106020501,0);
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�y�����������");
}
}