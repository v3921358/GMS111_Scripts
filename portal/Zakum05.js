/*
	����:	���ص�
	�؈D:	�������
	����:	211042300
*/

function enter(pi) {
	if (pi.getQuestStatus(100200) != 2) {
		pi.playerMessage(-7,"[Portal]��߀δ��������������P�΄ա�");
		return false;
		} 
	if (!pi.haveItem(4001017)) {
		pi.playerMessage(-7,"[Portal]�����]�л���֮�ۣ����Բ�����������");
		return false;
		}
		pi.playPortalSE();
		pi.warp(pi.getPlayer().getMapId() + 100, "west00");
		return true;
}