/*
	����:	��ѩ��
	�؈D:	����ɭ��1
	����:	140090100
*/

function enter(pi) {
	if (pi.getQuestStatus(21010) == 2) {
		pi.warp(140090200, 1);  //����ɭ��2
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}