/*
	����:	�ڰ�ʱ�����
	�؈D:	ʱ��������1
	����:	272010100
*/

function enter(pi) {
	if (pi.getPlayerCount(272010200) == 0) {
		pi.resetMap(272010200);   //��ͼˢ��
		pi.warp(272010200, 1);  //��ħ��ʦ����ǰ�����
		pi.spawnMobOnMap(8860001,1,844,71,272010200);
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
}
}
