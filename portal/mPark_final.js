/*
	����:	ʯ����Ժ
	�؈D:	6�׶� : ���ص�ʯ��
	����:	952000500
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		if (pi.canHold(4001529, 1)) { //TODO JUMP		
			pi.gainItem(4310020, 1);  //ԭ pi.givePartyItems(4310020, 1);
			pi.warpParty(951000000,0); //���﹫԰
		} else {
			pi.playerMessage(-7,"[Portal]�o���ռ{��Ʒ��Ո���������g");
			}
		} else {
			pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}