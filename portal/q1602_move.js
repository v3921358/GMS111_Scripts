/*
	����:	���ܵ�ͼ
	�؈D:	ά���е��г�
	����:	931050400
*/

function enter(pi) {
	if (pi.getQuestStatus(1602) == 1) {
		pi.warp(931050402,1);
		pi.getMap(931050402).resetFully();//��ͼˢ��
	} else {
		pi.warp(931050402,1); //����̨
}
}