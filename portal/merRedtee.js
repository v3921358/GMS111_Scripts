/*
	����:	��߳�
	�؈D:	ʱ��֮·&amp;lt;2&gt;
	����:	220040100
*/

function enter(pi) {
	if (pi.getQuestStatus(24084) == 1) {
		pi.warp(922030100,1);  //��������
		pi.resetMap(922030100);   //��ͼˢ��
		pi.spawnMobOnMap(9300432,1,-135, 492,922030100);//�ٻ�����
	} else{
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}
