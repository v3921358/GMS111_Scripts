/*
	����:	��ϲ�Ĳ���3
	�؈D:	�޴����
	����:	101030000
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
		qm.sendAcceptDecline("���ˣ���Ҳ֪���ˡ� �F����Ҫ�yԇһ����Č�����ǿ�˶���~���� �yԇ������#r#o9100017##k�� �������50�����У�һ��Ҫ���ó�ֵĜʂ�~����\r\n����F��ȥ���Q��~����");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(910100130);
		qm.dispose();
}
}