/*
	����:	���ص�ͼ
	�؈D:	��������ĶԾ�
	����:	914020000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
		return false;
	} else {
		pi.warp(140000000, 0);  //���
}
}