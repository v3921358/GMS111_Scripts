/*
	����:	Ů��֮·
	�؈D:	ʥ��
	����:	130000000
*/

function enter(pi) {
	if (pi.getQuestStatus(20754) == 1) {
		pi.warp(913060000,2); //��֮����֮��
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}