/*
	����:	��ȥ����ľ��
	�؈D:	ȼ�յķ���4
	����:	272000410
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(272000310, 2);  //ȼ�յķ���
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}