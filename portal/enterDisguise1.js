/*
	����:	Ů��֮·
	�؈D:	����ɭ��1
	����:	130010000
*/

function enter(pi) {
	if (pi.getQuestStatus(20302) == 1) {  //�����������
	if (pi.haveItem(4032179, 1)) { 
		pi.resetMap(913002000);   //��ͼˢ��
		pi.warp(913002000, 1);
		pi.spawnNpc(1104101, 2517, 88);
	} else {
		pi.playerMessage(-7,"[Portal]��������}���L���C");
		}
	} else {
		pi.warp(130010010, "out00");  //��ŵ֮��
}
}