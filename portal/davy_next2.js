/*
	����:	�ٲ���
	�؈D:	925100200
	����:	925100200
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(925100300,0); //next
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}