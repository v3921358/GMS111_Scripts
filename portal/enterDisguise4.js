/*
	����:	Ů��֮·
	�؈D:	����ɭ��2
	����:	130010100
*/

function enter(pi) {
	if (pi.getQuestStatus(20304) == 1) {  //�����������
	if (pi.haveItem(4032179, 1)) { 
		pi.resetMap(913002300);   //��ͼˢ��
		pi.warp(913002300, 1);
		pi.spawnNpc(1104103, -1766, 88);
	} else {
		pi.playerMessage(-7,"[Portal]��������}���L���C");
		}
	} else {
		pi.warp(130010120, "out00");   //��³֮��
}
}