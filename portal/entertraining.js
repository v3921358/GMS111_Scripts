/*
	����:	�ʺ絺
	�؈D:	ð�ռ����������
	����:	1010000
*/

function enter(pi) {
	if (pi.getQuestStatus(1041) == 1) {
		pi.warp(1010100, 4);   //ð�ռ�������1
	} else if (pi.getQuestStatus(1042) == 1) {
		pi.warp(1010200, 4);   //ð�ռ�������2
	} else if (pi.getQuestStatus(1043) == 1) {
		pi.warp(1010300, 4);   //ð�ռ�������3
	} else if (pi.getQuestStatus(1044) == 1) {
		pi.warp(1010400, 4);   //ð�ռ�������4
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}