/*
	����:	����ɭ��
	�؈D:	ɭ�ֿյ�
	����:	930000500
*/

function start() {
	if (cm.haveItem(4001163)) {
		cm.sendOk("���ҵ���#v4001163:##b#t4001163##k�������ھ������ȥ��");
	} else {
		cm.sendOk("�Ҳ�����·�᣿�ҿ��԰��㎧��ȥ�����^��Ҫһ�K#v4001163:##b#t4001163##k������r���@��������ԓ�����ҵ�����Ҫ�ģ�������Єӿ�һЩ���ҿ��Ǜ]ʲ�N���ġ�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4001163, -1);
		cm.warpParty(930000600);
		}
	cm.dispose();
}