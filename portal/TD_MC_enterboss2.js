/*
	����:	Ģ����
	�؈D:	���ĳ���
	����:	106021402
*/

function enter(pi) {
	if (pi.getPlayerCount(106021700) == 0) {
		pi.resetMap(106021700);   //��ͼˢ��
		pi.warpParty(106021700, 1);  //��Ѩ�
		pi.spawnMobOnMap(3300008,1,292, 143,106021700);//�ٻ�����
               
		//var em = pi.getEventManager("MK_PrimeMinister");
		//      em.startInstance(pi.getPlayer().getParty(), pi.getPlayer().getMap());
		} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
}
}