/*
	����:	��ϲ�Ĳ���2
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
		qm.sendAcceptDecline("�mȻ�Һ������Č���������߀����Ҫ�M�Мyԇ~���� ���ϴ�һ�ӣ��ҕ������͵������Ŀ��g�Yȥ~���� �����e��#r#o3230100#��ǿ����#k�ڵ����㡣 ��ֻҪ�����40������~���� �ʂ���ˆ�~��~��~��");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(910100120);
		qm.dispose();
}
}