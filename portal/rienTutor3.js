/*
	����:	��ѩ��
	�؈D:	����ɭ��3
	����:	140090300
*/

function enter(pi) {
	if (pi.getQuestStatus(21012) == 2) {
		pi.warp(140090400, 1);  //����ɭ��4
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}