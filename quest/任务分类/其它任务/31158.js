/*
	����:	�ε���Ƭ
	�؈D:	�ƻ������ִ�
	����:	271010000
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
		qm.sendNextS("����ʲô������Ƭ������֪����ʲô��������Ӧ�õ�����������û����֪����\r\n������Ӧ�û�֪���ɣ�",3);
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}