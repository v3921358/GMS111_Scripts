/*
	����:	����˯�ĵ�
	�؈D:	�ž��Ķ�Ѩ
	����:	914100022
*/

function enter(pi) {
	if (pi.getQuestStatus(22605) == 1) {
		pi.warp(914100010, 2); //��ѩ���ǵ�ɭ�� 
		pi.forceStartQuest(22600, "1");
		pi.forceCompleteQuest(22588);
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}