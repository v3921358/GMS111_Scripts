/*
	����:	��߳�
	�؈D:	��߳Ǵ���
	����:	220000300
*/

function enter(pi) {
	if (pi.isQuestActive(22596) == 1) {  //�����������
		if (pi.getPlayerCount(922030001) == 0) { 
		pi.warp(922030001,0);   //��������ķ���
		pi.getMap(922030001).resetFully();//��ͼˢ��
		pi.spawnMobOnMap(9300393,1,-183,31,922030001);//�ٻ�����
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.warp(922030000,0);  //��������ķ���
}
}