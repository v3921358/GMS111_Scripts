/*
	����:	����
	�؈D:	��1����
	����:	910360000
*/

function start() {
	cm.sendYesNo("����Ҫ�������");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���ʵ�ڴ�����ȥ���ҿ��԰����ȥ��");
	} else {
		cm.warp(103020000, 2);  //������Ʊ��
		}
	cm.dispose();
}