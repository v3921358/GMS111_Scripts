/*
	����:	�ٲ���
	�؈D:	���˺�����
	����:	925100400
*/

function enter(pi) {
	if (pi.getMap().getReactorByName("sMob1").getState() >= 1 && pi.getMap().getReactorByName("sMob2").getState() >= 1 && pi.getMap().getReactorByName("sMob3").getState() >= 1 && pi.getMap().getReactorByName("sMob4").getState() >= 1) {
	if (pi.isLeader()) {
		pi.warpParty(925100500,0); //��������������
	} else {
		pi.playerMessage(-7,"[Portal]����ɽM�L��꠲����M��˂����c");
		}
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}