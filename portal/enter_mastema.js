/*
	����:	ˮ��·
	�؈D:	���¶�˹̹��԰2
	����:	��ħ��ת
*/

function enter(pi) {
	if (pi.getQuestStatus(23210) == 1) {
		pi.warp(931050110,1);     //���¶�˹̹��԰��Ȫ����2
		pi.spawnMonster(9001036, 873, -14);   //�ٻ�����
	} else if (pi.isQuestFinished(23210)) {
		pi.warp(931050110, 1); //���¶�˹̹��԰��Ȫ����2
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}