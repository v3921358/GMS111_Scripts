/*
	����:	��������Э��᳤�Ŀ���
	�؈D:	�������
	����:	261000000
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
	if (qm.getQuestStatus(3301) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3301) == 1) {
		qm.sendYesNo("����Ҫ��#v4020005:#��ʯ�ռ������N��");
		}
		}
	if (status == 1){
	if (qm.haveItem(4020005)) {
		qm.sendOk("�š����ܲ��e����������Ҫ��#v4020005:# \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3000 exp");
	} else {
		qm.sendOk("����Ҫ�ɂ�#v4020005:#�����e�����_��Ц����");
		qm.dispose();
		}
		}
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4020005, -2);
		qm.gainExp(3000);
		qm.dispose();
}
}