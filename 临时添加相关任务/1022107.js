/*
	����:	��ʿ���侯����
	�؈D:	��ɳɽ��
	����:	102020100
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	switch(cm.getPlayer().getMapId()) {
	case 102020100:
		if (status == 0) {
		if (cm.getQuestStatus(22530) == 1) {
		if (cm.getQuestStatus(225970) != 1) {
			cm.forceStartQuest(225970,"1");
			cm.sendNext("�����޸���һ�������ƣ�������˳�������޸������ƣ�");
		} else {
			cm.sendNext("������˳�������޸������ƣ�");
			}
		} else {
			cm.sendNext("�@�ǂ����ף���һ��δ֪�Ŀ������ڵȴ�����ĵ���");
			}
			cm.dispose();
			}
			break;
	case 102030000:
		if (status == 0) {
		if (cm.getQuestStatus(225970) == 1) {
			cm.forceStartQuest(225971,"1");
			cm.sendNext("�����޸��ڶ��������ƣ�������˳�������޸������ƣ�");
		} else {
			cm.sendNext("�@�ǂ����ף���һ��δ֪�Ŀ������ڵȴ�����ĵ���");
			}
			cm.dispose();
			}
			break;
	case 102030100:
		if (status == 0) {
		if (cm.getQuestStatus(225971) == 1) {
			cm.forceStartQuest(225972,"1");
			cm.sendNext("�����޸������������ƣ�������˳�������޸������ƣ�");
			} else {
			cm.sendNext("�@�ǂ����ף���һ��δ֪�Ŀ������ڵȴ�����ĵ���");
			}
			cm.dispose();
			}
			break;
	case 102030200:
		if (status == 0) {
		if (cm.getQuestStatus(225972) == 1) {
			cm.forceStartQuest(225973,"1");
			cm.sendNext("�����޸����ĸ������ƣ�������˳�������޸������ƣ�");
		} else {
			cm.sendNext("�@�ǂ����ף���һ��δ֪�Ŀ������ڵȴ�����ĵ���");
			}
			cm.dispose();
			}
			break;
	case 102030300:
		if (status == 0) {
		if (cm.getQuestStatus(225973) == 1) {
			cm.forceStartQuest(22597,"5");
			cm.sendNext("�����޸������й����ƣ����ȥ���棡");
		} else {
			cm.sendNext("�@�ǂ����ף���һ��δ֪�Ŀ������ڵȴ�����ĵ���");
			}
			cm.dispose();
			}
			break;
}
}