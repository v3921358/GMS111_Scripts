/*
	����:	��Ԫ��϶
	�؈D:	�ڰ���̳
	����:	272030400
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(272030300, 3);  //�ڰ���̳���
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}