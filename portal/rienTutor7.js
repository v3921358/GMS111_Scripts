/*
	����:	��ѩ��
	�؈D:	�����������
	����:	140010000
*/

function enter(pi) {
	if (pi.getQuestStatus(21014) == 2 || pi.getPlayer().getJob() != 2000) {
		pi.warp(140010100, 2);  //������������
	} else {
		pi.playerMessage(-7,"[Portal]�e�������߅������߅����ڣ��M��ȥҊ����");
}
}