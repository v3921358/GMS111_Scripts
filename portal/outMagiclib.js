/*
	����:	���ص�ͼ
	�؈D:	ħ��ͼ���
	����:	910110000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(101000000, 7); //ħ������
	} else{
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}
