/*
	����:	�������
	�؈D:	�������1¥
	����:	925020100
*/

function enter(pi) {
	if (!pi.haveMonster(9300216)) {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
	} else {
		pi.dojo_getUp();
		pi.getMap().setReactorState();
}
}