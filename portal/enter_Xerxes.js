/*
	����:	����еĿ�����
	�؈D:	����Ƕ����ڲ�
	����:	200101400
*/

function enter(pi) {
	if (pi.isQuestFinished(31013)) {  //�����������
	if (pi.getPlayerCount(200101500) == 0) { 
		pi.resetMap(200101500);   //��ͼˢ��
		pi.warpParty(200101500,1);  //��սѦ��˹
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else if (pi.getQuestStatus(31013) == 1) {
		pi.forceStartQuest(31018,"1");
		pi.playerMessage(-1, "��ȥ�����������");	
	} else {
		pi.playerMessage(-7,"[Portal]������һ���������i�˂����c");
}
}