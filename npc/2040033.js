/*
	����:	����
	�؈D:	��߳ǳ���ѵ����
	����:	220000006
*/

function start() {
	cm.sendOk("�������@�e����һ���ܲ��e�ɣ��gӭ�´�߀���ң�");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.useItem(2022070);  // �����ߵ�ף��
		cm.gainClosenessAll(4);
		cm.warp(220000006);
		}
	cm.dispose();
}
