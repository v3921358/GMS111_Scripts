/*
	����:	Ů��֮·
	�؈D:	���䳡���
	����:	130020000
*/

function enter(pi) {
	if (pi.getQuestStatus(20201) == 1 || 
		pi.getQuestStatus(20202) == 1 ||
		pi.getQuestStatus(20203) == 1 ||
		pi.getQuestStatus(20204) == 1 ||
		pi.getQuestStatus(20205) == 1) {
		pi.warp(913001000, 0);   //�ڶ����䳡
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}