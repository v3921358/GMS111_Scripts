/*
	����:	���ﰲ��
	�؈D:	���ﰲ�ع���&amp;lt;����&gt
	����:	260000302
*/

function enter(pi) {
	if (pi.getQuestStatus(3935) == 1) {  //�����������
	if (pi.getPlayerCount(926000010) == 0) { 
		pi.resetMap(926000010);   //��ͼˢ��
		pi.warp(926000010, 0);  //�����ı���ֿ�
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}