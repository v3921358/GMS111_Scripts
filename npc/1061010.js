/*
	����:	��ҫ��ˮ��
	�؈D:	��Ԫ������
	����:	910540500
*/

function start() {
	cm.sendAcceptDecline("(�����ͨ�^ѩԭ�}�ص����}��ʯ�^�ٴ��M����_��Ҫ��ȥ�᣿)");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�������ҪһЩ�r�g��");
	} else {
		cm.warp(211040401, 0);  //ѩԭʥ��
		}
	cm.dispose();
}