/*
	����:	Ů��֮·
	�؈D:	����ɭ��1
	����:	130010000
*/

function enter(pi) {
	if (pi.getQuestStatus(20303) == 1) {  //�����������
	if (pi.haveItem(4032179, 1)) { 
		pi.resetMap(913002100);   //��ͼˢ��
		pi.warp(913002100, 1);
		pi.spawnNpc(1104102, 3307, 88);
	} else {
		pi.playerMessage(-7,"[Portal]��������}���L���C");
		}
	} else {
		pi.warp(130010020, "out00");  //�᲼֮��
}
}