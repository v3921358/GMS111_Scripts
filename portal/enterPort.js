/*
	����:	��ѩ��
	�؈D:	��ѩ���ǵ�ԭҰ3
	����:	140020200
*/

function enter(pi) {
	if (pi.getQuestStatus(21301) == 1) {
	if (pi.getPlayerCount(914022000) == 0) {
		pi.warp(914022000, 1);  //����С͵��ѻ
		pi.getMap(914022000).resetFully();//��ͼˢ��
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.warp(140020300, 1); //���ۿ�
}
}
