/*
	����:	����֮·
	�؈D:	��ɳɳĮ
	����:	260020300
*/

function enter(pi) {
	if (pi.getQuestStatus(23271) == 1) {
		pi.warp(926030010,1);  //ɳĮƫƧ����2
		pi.getMap(926030010).resetFully();//��ͼˢ��
		pi.spawnMobOnMap(9300457,1,802,199,926030010);//�ٻ�����
		pi.spawnMobOnMap(9300458,1,689,220,926030010);//�ٻ�����

	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}