/*
	����:	��еװ��
	�؈D:	ʱ�����ı�Դ
	����:	220080001
*/

function start() {
	cm.sendYesNo("�ཡ������ཡ����������ͨ�^���ӵ�һ������ȫ�ĵط����ཡ������ཡ����������x�_�@���ط��᣿");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�ཡ������ཡ�����");
	} else {
		cm.warp(220080000,5);
		}
	cm.dispose();
}
