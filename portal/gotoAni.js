/*
	����:	ʨ����֮��
	�؈D:	��������
	����:	211061000
*/

function enter(pi) {
	if (pi.getQuestStatus(3142) == 1) {
	if (pi.getPlayerCount(211061100) == 0) {
		pi.resetMap(211061100);   //��ͼˢ��
		pi.warpParty(211061100,1);  //������η�
		pi.spawnMobOnMap(8210013,1,117,-580,211061100);//�ٻ�����
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ��������΄�");
}
}
