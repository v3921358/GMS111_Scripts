/*
	����:	���ص�ͼ
	�؈D:	�����о������
	����:	926100400
*/

function enter(pi) {
	if (pi.getMap().getCharactersSize() > 0 || pi.getMap(926100401).getCharactersSize() > 0) {  //�޸Ĺ� if (pi.getMap().getCharactersSize() >= 1
		pi.warpParty(926100401, 0);  //�����о���
	} else {
		pi.playerMessage(-7,"[Portal]���нM�T������@�e");
}
}