/*
	����:	��ɫ֮�����
	�؈D:	���¶�˹̹
	����:	310000000
*/

function enter(pi) {
	if (pi.getQuestStatus(23120) == 1) {
	if (pi.getPlayerCount(931000410) == 0) {       //�жϵ�ͼ�Ƿ����������
		pi.resetMap(931000410);   //��ͼˢ��
		pi.warp(931000410, 0);   //�հ�����ˮ�ֿ�
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}