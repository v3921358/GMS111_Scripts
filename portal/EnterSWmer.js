/*
	����:	������
	�؈D:	����·��
	����:	104020000
*/

function enter(pi) {
	if (pi.getQuestStatus(24079) == 1) {
	if (pi.getPlayerCount(910510400) == 0) {
		pi.resetMap(910510400);   //��ͼˢ��
		pi.warp(910510400,1);  //Ư��������֮��
		pi.spawnMobOnMap(9300431,1,650, 236,910510400);//�ٻ�����
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else{
		pi.warp(105000000,6);  //����֮��
}
}
