/*
	����:	δ��������
	�؈D:	ʥ��
	����:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("#b#h0##k�����ǲ�������ѽ��^��90��������ޟ��ˣ� ��_����ǿ�����ޟ�߀�h�]�нY���� Ո����Щ�Tʿ�F�L���W���ɣ������ɞ��ˌ�����ħ������������ޟ����ء�");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}