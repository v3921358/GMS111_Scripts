/*
	����:	Ů��֮·
	�؈D:	����ɭ��3
	����:	130010200
*/

function enter(pi) {
	if (pi.getQuestStatus(20305) == 1) {  //�����������
	if (pi.haveItem(4032179, 1)) { 
		pi.resetMap(913002400);   //��ͼˢ��
		pi.warp(913002400, 1);
		pi.spawnNpc(1104104, 542, 88);
	} else {
		pi.playerMessage(-7,"[Portal]��������}���L���C");
		}
	} else {
		pi.warp(130020000, 10);  //���䳡���
}
}