/*
	����:	���� ����
	�؈D:	ħ������
	����:	101000000
*/

function start() {
	cm.sendYesNo("�ϲ�����ɭ����һ��Σ�U�ĵط������e���Б�ŭ�ľGĢ�����]�����N�ӣ���ȥ�ϲ�����ɭ���N��");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("����ɭ�ֲ����l������ȥ�ĵط���");
	} else {
		cm.warp(910100002, 0)
		}
	cm.dispose();
}