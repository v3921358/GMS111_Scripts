/*
	����:	���ܵ�ͼ
	�؈D:	���壡ʵ���Ҽ���
	����:	931000310
*/

function enter(pi) {
	if (pi.isQuestActive(23049)) {
		pi.getMap(pi.getMapId() + 10).resetFully();    //����������ʵ���� 931000320
		pi.warp(pi.getMapId() + 10, 0);
	} else {
		pi.playerMessage(-7,"[Portal]�c���ָ���ώ�ՄՄ");
}
}