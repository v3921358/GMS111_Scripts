/*
	����:	�ٲ���
	�؈D:	925100300
	����:	925100300
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(925100400,0); //���˺�����
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}