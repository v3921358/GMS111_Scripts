/*
	����:	��ɫ֮�����
	�؈D:	���¶�˹̹
	����:	310000000
*/

function enter(pi) {
	if (pi.getQuestStatus(23121) == 1) {
	if (pi.getPlayerCount(931000420) == 0) {
		pi.resetMap(931000420);   //��ͼˢ��
		pi.warp(931000420, 1);   //Σ�գ���ʱ����
	} else {
		pi.playerMessage("Being searched by someone else. Better come back later.");
	}
	} else if (pi.getQuestStatus(23023) == 1 || pi.getQuestStatus(23024) == 1 || pi.getQuestStatus(23025) == 1) {
		if (pi.getPlayerCount(931000100) == 0) {
		pi.resetMap(931000100);   //��ͼˢ��
		pi.spawnNpc(2159100, -157, -23);//�ٻ�npc
		pi.warp(931000100, 1);   //2��תְ
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else if (pi.getQuestStatus(23141) == 1) {
		pi.warp(931000600, 1); 
	} else {
		pi.warp(310000010, 1);  //���¶�˹̹��ʱ����
}
}