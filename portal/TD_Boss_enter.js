/*
	����:	δ��֮��
	�؈D:	2099����ҹ�ۿڲֿ�
	����:	240070202
*/

function enter(pi) {
	if (pi.getMapId() == 240070202 && pi.getPlayerCount(240070203) == 0 && pi.getQuestStatus(3725) != 1) {
		pi.playPortalSE();
		pi.warpParty(240070203, 1);    //2099����ҹ�ۿ���ͷ
	} else if (pi.getMapId() == 240070202 && pi.getPlayerCount(240070203) == 0 && pi.getQuestStatus(3725) == 1) {
		pi.playPortalSE();
		pi.resetMap(240070203);   //��ͼˢ��
		pi.warpParty(240070203, 1);    //2099����ҹ�ۿ���ͷ
		pi.spawnMobOnMap(7220005,1,570,392,240070203);//�ٻ�����
	} else if (pi.getMapId() == 240070302 && pi.getPlayerCount(240070303) == 0 ) {    //2215���⵽�����ĳ�����ҵ��
		pi.playPortalSE();
		pi.resetMap(240070303);   //��ͼˢ��
		pi.warpParty(240070303, 1);    //2215���⵽�����ĳ�������
	} else if (pi.getMapId() == 240070402 && pi.getPlayerCount(240070403) == 0) {      //2216���ɷ���ĳ��й���
		pi.playPortalSE();
		pi.resetMap(240070403);   //��ͼˢ��
		pi.warpParty(240070403, 1);   //2216���ɷ���ĳ��еر�
	} else if (pi.getMapId() == 240070502 && pi.getPlayerCount(240070503) == 0) {  //2230��Σ�յ�����������
		pi.playPortalSE();
		pi.resetMap(240070503);   //��ͼˢ��
		pi.warpParty(240070503, 1);   //2230��Σ�յ�������
	} else if (pi.getMapId() == 240070602 && pi.getPlayerCount(240070603) == 0) {  //2503�����ս��B��
		pi.playPortalSE();
		pi.resetMap(240070603);   //��ͼˢ��
		pi.warpParty(240070603, 1);   //2503�����ս����β
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
}
}