/*
	����:	��߳�
	�؈D:	��ʧ�Ļ���
	����:	220070400
*/

function enter(pi) {
	if (pi.getQuestStatus(20749) == 1) {  //�����������
	if (pi.getPlayerCount(922000030) == 0) { 
		pi.warp(922000030, 1);
		pi.resetMap(922000030);   //��ͼˢ��
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.playerMessage(-7,"[Portal]������һ���������i�˂����c");
}
}