/*
	����:	ʯ����Ժ
	�؈D:	1�׶� : ʯ����Ժ1
	����:	952000000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warpParty(pi.getMapId() + 100,0); //next
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}