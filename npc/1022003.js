/*
	����:	����
	�؈D:	��ʿ����
	����:	102000000
*/

function start() {
	cm.sendYesNo("���rֻ�����;ö�������.\r\n���ޏ��;ö��N��");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("��Ҫ�ĕr������S�r�����ң���Ҋ���ѡ�");
	} else {
		cm.sendRepairWindow();
		}
	cm.dispose();
}
