/*
	����:	��ѩ��
	�؈D:	����
	����:	140030000
*/

function enter(pi) {
	if (pi.getQuestStatus(21201) == 1) {
		pi.warp(914021000, 1);  //��Ӣ��������
		pi.forceStartQuest(21203,"0");  //������������
	} else if (pi.getQuestStatus(21302) == 1) {
	if (pi.getPlayerCount(914022100) == 0 && pi.getPlayerCount(914022200) == 0) {
		pi.warp(914022100, 1);  //��������
		pi.forceStartQuest(21203,"1");   //������������
		pi.getMap(914022100).resetFully();//��ͼˢ��
		pi.spawnMobOnMap(9001013,1,-168,454,914022200);//�ٻ�����
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}