/*
	����:	�ٲ���
	�؈D:	�ִﺣ������·
	����:	925100000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(925100100,0); //ͻ�ƴ�ͷ��
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}