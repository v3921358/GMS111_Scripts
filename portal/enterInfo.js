/*
	����:	�����
	�؈D:	�����
	����:	104000000
*/

function enter(pi) {
	if (pi.getQuestStatus(21733) == 1) {    //��ǰ��������
	if (pi.getPlayerCount(910400000) == 0) {
		pi.getMap(910400000).resetFully();//��ͼˢ��
		pi.spawnMobOnMap(9300345,1,72,116,910400000);//�ٻ�����
		pi.warp(910400000, 1); //Σ�յ��鱨�̵�
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.warp(104000004, 1);  //��³���鱨�̵�
}
}