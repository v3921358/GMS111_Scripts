/*
	����:	��������
	�؈D:	ʨ����֮��
	����:	921140000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 1) {
		pi.warp(921140001, 3);  //��������
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}