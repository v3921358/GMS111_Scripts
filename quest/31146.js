/*
	����:	�����Ϲ���
	�؈D:	�ƻ������ִ�
	����:	271010000
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
	if (qm.getQuestStatus(31146) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(31146) == 1) {
	if (qm.getMap().getAllMonstersThreadsafe().size() == 0) {
		qm.sendNext("лл�������ҡ�������������������������Ƿ����Ҳ����ˣ����ܻ����������ص����ѡ��������˵������������ʲô��");
	} else {
		qm.sendNext("���Ȱ���Χ�����ҵĹ��������������֮ǰ����ʲô���������˵����");
		qm.dispose();
		}
		}
		}
	if (status == 1)
		qm.sendNextPrev("�������ת�氢��˹��");
	if (status == 2)
		qm.sendPrev("���С���������ֹ���������޷���ϣ��˹�ָ�ԭ״����Ҳ��û�а취�İ취��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 11659200 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainExp(11659200);
		qm.dispose();
}
}