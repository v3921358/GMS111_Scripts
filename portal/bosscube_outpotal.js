/*
	����:	502030011
	�؈D:	502030011
	����:	502030011
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(502029000,0);
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}