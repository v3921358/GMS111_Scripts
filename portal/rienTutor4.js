/*
	����:	��ѩ��
	�؈D:	����ɭ��4
	����:	140090400
*/

function enter(pi) {
	if (pi.getQuestStatus(21013) == 2) {
		pi.warp(140090500, 1);  //����ɭ��5
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}