/*
	����:	��ζ��ţ��1
	�؈D:	ũ������
	����:	100030300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOkS("#b���Լ����Ҵ��Ǜ]���õġ�",3);
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�����@���в�ͨ�ġ���߀��Ҫ�e�Ė|�����]��ֲ��]���⡣ʲ�ᣬ����֪�������Ǌ������ˣ���Ҳ���Ҵ󡣊�Ҽ��֪��ʲ�ጦ���к�̎��");
	if (status == 1)
		qm.sendNextPrevS("#b���қ]�С��@�������g���@����ʲ���Pϵ��");
	if (status == 2)
		qm.sendAcceptDecline("��銅��o���ˣ���Ҳ������@�������ϸ��н�򞡣�������˽���ࡣŶ���ܺá��ҕ���Ҽ���Ȋ�����ˣ�");
	if (status == 3)
		qm.sendPrevS("#b(���ѽ����^�ְ�Ҽ���ˣ����Ǌ��]�и��õ����⡣�Ǖr���ن����ˣ�)#k",3);
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}