/*
	����:	���ִ�
	�؈D:	���ִ�
	����:	100000000
*/

function enter(pi) {
	map = pi.getPlayer().getMap();
	if (pi.isQuestFinished(21754)) {
		pi.warp(100000201, 3);
	} else if (!pi.getPlayerCount(910050000) <= 0 && pi.isQuestFinished(21754)) {//�жϵ�ͼ�Ƿ����ˡ��ж�����
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
	} else if (pi.isQuestFinished(21753)) {
		pi.getMap(910050000).resetFully();     //��ͼˢ��
		pi.warp(910050000, 1);        //����Σ�յĹ�������ѵ����
		pi.spawnMobOnMap(9300355,1,-14,107,910050000);//�ٻ�����
		pi.getPlayer().startMapTimeLimitTask(600, map);
	} else{
		pi.warp(100000201, 3);   //��������ѵ����
}
}