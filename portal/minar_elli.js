/*
	����:	����ɭ��
	�؈D:	��ɫ��֦
	����:	101030100
*/

function enter(pi) {
	if (pi.haveItem(4031346)) {
	if (pi.getMapId() == 240010100) {
		pi.warp(101030100, "minar00");
	} else {
		pi.warp(240010100, "elli00");
		}
		pi.gainItem(4031346, -1);
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫħ���N�ӣ����܆��Ӵ˂����T");
		return false;
}
}