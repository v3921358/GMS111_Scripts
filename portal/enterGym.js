/*
	����:	��ѩ��
	�؈D:	������������
	����:	140010100
*/

function enter(pi) {
	if (pi.getQuestStatus(21701) == 1) {
		pi.warp(914010000, 1);  //������1
	} else if (pi.getQuestStatus(21702) == 1) {
		pi.warp(914010100, 1);  //������2
	} else if (pi.getQuestStatus(21703) == 1) {
		pi.warp(914010200, 1); //������3
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}