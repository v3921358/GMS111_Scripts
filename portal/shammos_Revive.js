/*
	����:	�����
	�؈D:	Ͽ��Ĺ��
	����:	921120400
*/

function enter(pi) {
	if (pi.getPlayer().getEventInstance() != null) {
	if (pi.canHold(4001530, 1) ) {
		pi.gainExp_PQ(200, 1.5);
		pi.gainNX(2500);
		pi.addTrait("will", 15);
		pi.addTrait("insight", 3);
		pi.gainItem(4001530, 1);
		pi.warp(211000002,0);  //аĦ˹�ķ���
	} else {
		pi.playerMessage(-7,"[Portal]�o���ռ{��Ʒ��Ո���������g");
}
}
}