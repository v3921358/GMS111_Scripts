/*
	����:	��³˹��ί��2
	�؈D:	���ִ�
	����:	100000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("������˼�������黹���ڰ�����һ�£�");
	if (status == 1)
		qm.sendAcceptDecline("�����������о��Ŵ�Ģ�������ӣ����ֹŴ�Ģ�������Ӻ�#b#t4032966##k�����ƣ�����������ԭ���������ܰ���ȥ�Ѽ����ʵ�#v4032966:#��");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}