/*
	����:	��߳�
	�؈D:	��ʧ�Ļ���
	����:	220070400
*/

function enter(pi) {
	if (pi.getQuestStatus(20748) == 1) {  //�����������
		pi.forceStartQuest(20750,"Complete");
		pi.playerMessage(-7,"[Portal]������һ���������i�˂����c");
	} else {
		pi.playerMessage(-7,"[Portal]������һ���������i�˂����c");
}
}