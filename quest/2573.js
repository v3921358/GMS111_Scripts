/*
	����:	��ð�յĿ�ʼ
	�؈D:	ͨ��ð�յ�
	����:	3000600
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
		qm.sendNext("���!�ⲻ�����ʺ����е�������?���Ǵ��������Һô��Ĵ�������һ���Ǹ���̽�ռҰ�?�ܸ��˼����㡣");
	if (status == 1)
		qm.sendAcceptDecline("���ǻ�û����ȫ׼�����뿪�������ڵȴ��ڼ䣬�������ڴ����Ĵ�������");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.warp(3000000,0);
		qm.dispose();
}
}
