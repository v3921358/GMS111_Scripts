/*
	����:	Ů��֮·
	�؈D:	����ɭ��2
	����:	130010100
*/

function enter(pi) {
	if (pi.getQuestStatus(20301) == 1) {  //�����������
	if (pi.haveItem(4032179, 1)) { 
		pi.resetMap(913002200);   //��ͼˢ��
		pi.warp(913002200, 1);
		pi.spawnNpc(1104100, 263, 88);
	} else {
		pi.playerMessage(-7,"[Portal]��������}���L���C");
		}
	} else {
		pi.warp(130010110, "out00");  //��ķ֮��
}
}