/*
	����:	���ܵ�ͼ
	�؈D:	ʵ����ͨ��
	����:	926110001
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(926110100, 0);  //���õ�ʵ����
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}