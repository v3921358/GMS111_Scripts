/*
	����:	Ů��֮·
	�؈D:	���䳡���
	����:	�������䳡
*/

function enter(pi) {
	if (pi.getQuestStatus(20601) == 1 || pi.getQuestStatus(20602) == 1 || pi.getQuestStatus(20603) == 1 || pi.getQuestStatus(20604) == 1 || pi.getQuestStatus(20605) == 1) {
	if (pi.getPlayerCount(913010200) == 0) {
		pi.resetMap(913010200);   //��ͼˢ��
		pi.warp(913010200, 0);  //�������䳡
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.playerMessage(-7,"[Portal]�M����������Ψһ;���ǽ���100��������Ӗ");
}
}