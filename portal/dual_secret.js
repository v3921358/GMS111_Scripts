/*
	����:	��������
	�؈D:	�϶���ʿ�ư�
	����:	103000003
*/

function enter(pi) {
	if (pi.isQuestActive(2369)) {
		pi.getMap(910350100).resetFully();//��ͼˢ��
		pi.warp(910350100, 1);   //�϶����
		pi.spawnMobOnMap(9001019,5,-129,148,910350100);//�ٻ�����
	} else {
		pi.playerMessage(-7,"[Portal]ǽ���и���");
}
}