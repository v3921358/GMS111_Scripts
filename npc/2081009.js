/*
	����:	ķ˹
	�؈D:	ɭ�ֲ��
	����:	240010400
*/

function start() {
	if (cm.getQuestStatus(6180) == 1) {
		cm.sendYesNo("��Ҫȥ����Ӗ�������ҕ������ȥ�ģ�");
	} else {
		cm.sendOk("�@�e�Ǻ�Σ�U�ĵط����]�������ľͿ��c�x�_��");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(924000000, 0);
		}
	cm.dispose();
}
