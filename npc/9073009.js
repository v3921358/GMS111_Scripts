/*
	����:	���ܵ�ͼ
	�؈D:	�о���C-4����
	����:	931050417
*/

function start() {
	if (cm.getQuestStatus(1628) == 1) {
		cm.sendOk("Σ�U�� ���W�_������");
	} else {
		cm.sendOk("Σ�U�� ���W�_������");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(1641,"bomb");
	cm.dispose();
}