/*
	����:	���ܵ�ͼ
	�؈D:	ʵ����ͨ��
	����:	926100001
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(926100100, 0);  //���õ�ʵ����
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}