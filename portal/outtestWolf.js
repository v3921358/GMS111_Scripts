/*
	����:	���ص�ͼ
	�؈D:	�ǵĿ���
	����:	914030000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	if(pi.canHold(4001193, 1)) {
		pi.gainItem(4001193, 1);
		pi.warp(140010210, 0); //Ⱥ��ԭҰ
		pi.forceStartQuest(21620,0);
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]�o���ռ{��Ʒ��Ո���������g");
		return false;
		}
	} else {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
		return false;
}
}