/*
	����:	Ů��֮·
	�؈D:	���䳡���
	����:	��һ���䳡
*/

function enter(pi) {
	if (pi.getQuestStatus(20701) == 1) {
		pi.warp(913000000, 1);   //��һ���䳡
	} else if (pi.getQuestStatus(20702) == 1) {
		pi.warp(913000100, 1);   //��һ���䳡
	} else if (pi.getQuestStatus(20703) == 1) {
		pi.warp(913000200, 1);   //��һ���䳡
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}