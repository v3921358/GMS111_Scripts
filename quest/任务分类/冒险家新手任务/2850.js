/*
	����:	����ķ���
	�؈D:	�϶���ʿ�ư�
	����:	103000003
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
		qm.sendAcceptDecline("����y��һ����Č���������Ҫ�M�к��ε��m��Ӗ�����������Ƿ�߂��m���h�������������Ƿ�F�ھ�����ܿ�򞣿");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(910310100,0);
		qm.resetMap(910310100);
		qm.dispose();
}
}

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
	if (qm.getMap().getAllMonstersThreadsafe().size() == 0) {
		qm.sendOk("������ �@�N�̶Ȳ���ʲ�N�ɣ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 100 exp");
	} else {
		qm.sendOk("Ո������؈D�e�����е�#b�������~#k�ف��c�ҽ�Մ��");
		qm.dispose();
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(100);
		qm.dispose();
}
}