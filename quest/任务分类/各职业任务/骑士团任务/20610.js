/*
	����:	��δ����������
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
		qm.sendAcceptDecline("#b#h0##k���@�Εr�g�W���ܶ༼���ˆ᣿��ԓ�ஔ��Ϥ�˰ɡ����ԬF��Ҫ�W��#b�µļ����ˆ᣿");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}