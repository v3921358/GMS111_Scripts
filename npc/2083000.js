/*
	����:	�����ӵİ���ʯ��
	�؈D:	��Ѩ���
	����:	240050000
*/

function start() {
	if (cm.haveItem(4001086)) {
		cm.sendYesNo("ʯ���ϵ����ְl��������Ĺ�â��ʯ�����һ��С�T�_���ˡ� ��Ҫʹ������ͨ���᣿");
	} else {
		cm.sendOk("�㿴����ʯ���ϵ��֡� �㲻֪�������eʹ������\r\n#b����Ҫ����#v4001086:##e#b#t4001086##k�����M�룩");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(240050400, 0);
		}
	cm.dispose();
}