/*
	����:	����˹����Ķ���
	�؈D:	���¶�˹̹��԰��Ȫ����2
	����:	931050110
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
		qm.sendNext("���ˣ��߰ɣ�������Ҳ����ٻ��޵����󣬶��ǹ�ȥ���ҡ�");
	if (status == 1)
		qm.sendAcceptDecline("��Ȼ����Ϊ���Ҵ�������Ļ������û�й�ȥ����ǿ�������Ǹ���Ԫ���ҵ�������˻����ʵ�е�ǿ�ܶࡣ��Ϊ��������Ԫ�����Բ���ͣ��̫��ʱ�䡣��һ��Ҫ��ס��");
	if (status == 2){
		qm.forceStartQuest();
		qm.resetMap(931050120);   //��ͼˢ��
		qm.warp(931050120,0);
		qm.spawnMob(9001038,714,-14);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("������ô�����гɹ��Ļ����һ�����ڵ�״̬��ӡ������");
	if (status == 1)
		qm.sendPrev("�ܸ����ܶ�����������������������ô��������һ�����۰ɣ����ȥ�ɡ��ţ����ࣿ����ҿ�������");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(3111);
		qm.dispose();
}
}

