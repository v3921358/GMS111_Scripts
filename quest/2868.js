/*
	����:	Ӣ�۵İ���
	�؈D:	�϶�ҽԺ
	����:	103000004
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
		qm.sendNext("�п�����ĳ�����⵽ڤ�����`���u����׃�����`���[ʎ�ڵ��Fվ�e��");
	if (status == 1)
		qm.sendAcceptDecline("�y��������һ�ӣ���֪������Ĵ��ڶ��[ʎ�Ć᣿ �ðɡ� ����һ��ȥ�_��һ�°ɡ�");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(103020420);
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
		qm.sendNext("Ŀǰ���@�e�Ҳ���һ�z���ɵĚ�Ϣ�� ��֪��֮ǰ�Л]�С�");
	if (status == 1)
		qm.sendPrev("�ҵûص���������tԺȥ�ˡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1200 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(1200);
		qm.warp(103000004);
		qm.dispose();
}
}