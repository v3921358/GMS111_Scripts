/*
	����:	����˯�ĵ�
	�؈D:	��ѩ���ǵ�ɭ��
	����:	914100010
*/

function enter(pi) {
	if (pi.getQuestStatus(22589) == 1) {
		pi.resetMap(914100023);   //��ͼˢ��
		pi.warp(914100023,1);  //�ž��Ķ�Ѩ
		pi.forceStartQuest(22604, "1");
		pi.spawnNpc(1205000, 407,140);
	} else if (pi.isQuestFinished(22589)) {
		pi.warp(914100021, 1);   //�ž��Ķ�Ѩ
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}
