/*
	����:	����еĿ�����
	�؈D:	�Ƕ������
	����:	200101000
*/

function enter(pi) {
	if (pi.isQuestFinished(31010)) {  //�����������
		pi.warp(200101100, 1);  //�Ƕ�������1
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}