/*
	����:	����еĿ�����
	�؈D:	���������
	����:	200100000
*/

function enter(pi) {
	if (pi.isQuestFinished(31001)) {  //�����������
		pi.warp(200100010, 0);  //��������
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}