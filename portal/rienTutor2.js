/*
	����:	��ѩ��
	�؈D:	����ɭ��2
	����:	140090200
*/

function enter(pi) {
	if (pi.getQuestStatus(21011) == 2) {
		pi.warp(140090300, 1);  //����ɭ��3
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}