/*
	����:	����ɭ��
	�؈D:	������ɭ��2
	����:	300030300
*/

function enter(pi) {
	if (pi.getPlayerCount(300030310) == 0) {
		pi.resetMap(300030310);   //��ͼˢ��
		pi.warpParty(300030310, 1);  //Ů������     pi.openNpc(2133005);   ȡ��npc
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
}
}