/*
	����:	����ɭ��
	�؈D:	��ɽ��Ѩ
	����:	300010410
*/

function enter(pi) {
	if (pi.getPlayerCount(300010420) == 0) { 
		pi.resetMap(300010420);   //��ͼˢ��
		pi.warpParty(300010420, 1);  //��Ѩ�
		//pi.spawnMobOnMap(5250004,1,409,93,300010420);//�ٻ�����
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
}
}
