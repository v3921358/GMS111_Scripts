/*
	����:	������˵��������
	�؈D:	���ܹ㳡
	����:	310010000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23264) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23264) == 1) {
		qm.sendNext("#b#h0##k���ҵ���#v4000419:#���� ��֪����һ���ҵ���");
		}
		}
	if (status == 1)
		qm.sendPrev("�ìF�ڰ��@�����@����ϡ� �@���ǘӓu�u�ٻ�ϡ� �����ˡ� ׃��#bϲ�g����ò#k��ˎˮ�� #h0#!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 40000 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4000419, -1);
		qm.gainExp(40000);
		//qm.warp(931050211, 0);
		qm.dispose();
}
}
