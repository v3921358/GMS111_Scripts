/*
	����:	��ȥ����ľ��
	�؈D:	ȼ�յķ���
	����:	272000310
*/

function enter(pi) {
	if (pi.isQuestActive(31175) && !pi.isQuestFinished(31176)) {
		pi.warp(272000410, 2); //ȼ�յ���ľ��4
	} else {
		pi.warp(272000400, 1); //ȼ�յ���ľ��4
}
}
