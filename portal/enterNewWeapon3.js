/*
	����:	���ܵ�ͼ
	�؈D:	���壡ʵ���Ҽ���
	����:	931000312
*/

function enter(pi) {
	if (pi.isQuestActive(23051)) {
		pi.getMap(pi.getMapId() + 10).resetFully();    //����������ʵ���� 931000322
		pi.warp(pi.getMapId() + 10, 0);
	} else {
		pi.playerMessage(-7,"[Portal]�c���ָ���ώ�ՄՄ");
}
}