/*
	����:	�����ɽ
	�؈D:	��վ������
	����:	310050100
*/

function enter(pi) {
	if (pi.getQuestStatus(23033) == 1 || pi.getQuestStatus(23034) == 1 || pi.getQuestStatus(23035) == 1) {
	if (pi.getPlayerCount(931000200) == 0) {
		pi.resetMap(931000200);   //��ͼˢ��
		pi.warp(931000200, 1);  //3��תְ
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else if (pi.getQuestStatus(24090) == 1) {
	if (pi.getPlayerCount(931040010) == 0) {
		pi.resetMap(931040010);   //��ͼˢ��
		pi.warpParty(931040010,1);  //Σ�յĵ�վ
		pi.spawnNpc(1033230, 540,15);
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}