/*
	����:	����ɭ��
	�؈D:	�⵽�����ķ��ⶴѨ·
	����:	910150220
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(101050000, 9);  //��ŷ��
	} else{
		pi.playerMessage(-7,"[Portal]����؈D������Ϯ����");
}
}
