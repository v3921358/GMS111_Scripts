/*
	����:	˹ͽŵ
	�؈D:	������С��
	����:	3000200
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
		qm.sendAcceptDecline("������������ȥ���µ�ʱ�����Ѿ��ѵ��װ��װ���˴����ϡ����ˣ��²��˳٣��������ϳ����ɣ�");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(912060200, 0);
		qm.dispose();
}
}