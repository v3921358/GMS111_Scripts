/*
	����:	����ԭҰ
	�؈D:	932000400
	����:	932000400
*/

function enter(pi) {
	if (pi.getPlayer().getEventInstance() != null) {
	if (pi.canHold(4001529, 1)) { //TODO JUMP
		pi.gainExp_PQ(70, 1.0);
		pi.gainNX(1000);
		pi.gainItem(4001529, 1);
		pi.warp(932000000,0);  //����ԭҰ���
	} else {
		pi.playerMessage(-7,"[Portal]�o���ռ{��Ʒ��Ո���������g");
}
}
}