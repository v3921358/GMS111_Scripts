/*
	����:	Alien Base	
	�؈D:	Alien Matter-Cloner Entrance
	����:	610040800
*/

function enter(pi) {
	if (pi.getPlayerCount(610040400) == 0) {
		pi.resetMap(610040400);   //��ͼˢ��
		pi.warpParty(610040400);   //BOSS��ͼ
		pi.spawnMobOnMap(9400802,1,540,40,610040400);//�ٻ�����
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
}
}