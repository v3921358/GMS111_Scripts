/*
	����:	���ص�ͼ
	�؈D:	�����о������
	����:	926110400
*/

function enter(pi) {
	if (pi.getMap().getCharactersSize() > 0 || pi.getMap(926110401).getCharactersSize() > 0) { //�޸Ĺ� if (pi.getMap().getCharactersSize() >= 1
		pi.warpParty(926110401,0);  //�����о���
	} else {
		pi.playerMessage(-7,"[Portal]���нM�T������@�e");
}
}