/*
	����:	��ʿ������ǲ����ʼ֮ǰ
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
		qm.sendAcceptDecline("�@�Εr�g����߀����᣿�F�ڑ�ԓ��#m103000000#�M�нM��΄հɡ��mȻ������Ҫ������߀��Ҫ���r�����Tʿ�F���΄��ˡ�������µ������ˡ�");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}
