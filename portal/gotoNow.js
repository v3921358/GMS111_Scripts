/*
	����:	�ڰ�ʱ�����
	�؈D:	��ħ��ʦ����ǰ�����
	����:	272010200
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(272010100, 2);  //ʱ��������2
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}