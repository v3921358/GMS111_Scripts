/*
	����:	�׵õķ���
	�؈D:	�޴����
	����:	101000000
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
		qm.sendAcceptDecline("�ҿ��Ը��V���P����޵����顣 ���@�Ǻ���Ҫ������Ҳ��ܰװ׸��V�㡣 ������܎���һ��æ���Ҿ͸��V�㡣 �������R��Ҳ�]�P�S�������@Щ���޲��������ģ��mȻ���c�P�S�� ���N�ӣ� �������܆᣿");
	if (status == 1){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.warp(910100150);
		qm.dispose();
}
}