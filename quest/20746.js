/*
	����:	����
	�؈D:	ʥ��
	����:	130000000
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
	if (qm.getQuestStatus(20746) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(20746) == 1) {
		qm.sendOk("�Tʿ�F�ĳɆT����#b#p1101002##k�����^��Ć᣿ �������t���@�e��������ͱ��Ҫ�ȅf���ҵ��{�飬ϣ�����������@�����飡\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 50000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(50000);
		qm.dispose();
}
}