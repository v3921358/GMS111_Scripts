/*
	����:	��ȥ����ľ��
	�؈D:	ȼ�յķ���4
	����:	272000410
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(272000500, 1);  //ȼ�յ���ľ��5
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}