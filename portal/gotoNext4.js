/*
	����:	ʨ����֮��
	�؈D:	��ǽ��4
	����:	211060700
*/

function enter(pi) {
	if (pi.getQuestStatus(3143) == 1) {
		pi.getPlayer().updateQuestCustomData(3143,"1");
		pi.warp(211060800, 1);  //��������
	} else {
		pi.warp(211060800, 1);  //��������
}
}