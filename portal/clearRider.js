/*
	����:	���ص�ͼ
	�؈D:	��ʿƽԭ
	����:	921110000
*/

function enter(pi) {
	if (pi.getQuestStatus(21610) == 1) {
		pi.forceStartQuest(21619,0);
	} else {
		pi.playerMessage(-7,"[Portal]���Ŭ����ϣ���ܺú��ƴ��������");
}
}