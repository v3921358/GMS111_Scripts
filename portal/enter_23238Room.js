/*
	����:	�����߱���
	�؈D:	ѵ�������
	����:	310010010
*/

function enter(pi) {
	if (pi.getQuestStatus(23238) == 1) {
		pi.warp(931050200,1);    //ѵ������ֿ�
		pi.resetMap(931050200);   //��ͼˢ��
		pi.spawnMobOnMap(9300456,1,400, -4,931050200);//�ٻ�����
	} else{
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}
