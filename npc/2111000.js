/*
	����:	��ɭ
	�؈D:	�����Э��
	����:	261000010
*/

function start() {
	if (cm.getQuestStatus(3310) == 1) {
		cm.sendSimple("Ҫ��߾��裬Ҫ��ȥ׌����׃�Ã�����ħ��ꇁK���Ǽ����׵�����\r\n\r\n#L1##b����ȥ�U�����о����ƶR�����᣿#l");
	} else {
		cm.sendOk("�����g����߀�П����gʿ����������Ҫ�� ������Ҫ���ǣ����԰����@һ�еĬ����၆���f���������၆�����uҪ������ȥ�� �����@�������᣿#k");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(926120100, 0);
		}
	cm.dispose();
}