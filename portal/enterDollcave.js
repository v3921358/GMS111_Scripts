/*
	����:	�ϲ���ɽ
	�؈D:	ʯڣ��Ұ
	����:	102010100
*/

function enter(pi) {
	if (pi.getQuestStatus(21731) == 1 && pi.getPlayerCount(910510000) == 0) {
		pi.openNpc(1063011);
	} else if (pi.getQuestStatus(22549) == 1) {
		pi.warp(910050300,1);  //������Ѩ
	} else if (pi.getQuestStatus(22549) == 2) {
		pi.warp(910050300,1);
	} else if (pi.getQuestStatus(21728) == 1) {
		pi.forceStartQuest(21761, "0");
		pi.showInstruction("�ҵ�����ż���Ķ�Ѩ���������O���˰�̖�����ȥ���ռ��ɡ�", 150, 5);
		pi.playerMessage(-7,"[Portal]�ҵ�����ż���Ķ�Ѩ���������O���˰�̖�����ȥ���ռ��ɡ�");
	} else if (pi.getQuestStatus(20730) == 1 && pi.getPlayerCount(910510000) == 0) {
		pi.openNpc(1063011);
	} else {
		pi.playerMessage(-7,"[Portal]������һ���������i�˂����c");
		return false;
}
}