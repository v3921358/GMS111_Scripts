/*
	����:	ʨ����֮��
	�؈D:	��һ����
	����:	211060200
*/

function enter(pi) {
	if (pi.getQuestStatus(3164) == 1 && pi.getPlayerCount(211060201) == 0) {
		pi.warp(211060201,1);  //��һ����¥
		pi.resetMap(211060201);   //��ͼˢ��
		pi.spawnMonster(8210010,1);//�ٻ�����
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}