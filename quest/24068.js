/*
	����:	Ѱ�Һ�����
	�؈D:	ħ������
	����:	101000000
*/

var status = -1;

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
	if (status == 0) {
	if (qm.getQuestStatus(24068) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24068) == 1) {
		qm.sendNext("�������ң������Ϊ���������ţ������ǵ����ӡ�����Ϥ����ס����㡭���㡭����");
		}
		}
	if (status == 1)
		qm.sendNextPrev("˫���飡");
	if (status == 2)
		qm.sendPrev("�㻹���Ű����Ҿ�֪�����������ģ���һֱ��ô�����ţ����š���������Ϊ���������������ħ��ʦ�����У�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 2000 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainExp(2000);
		qm.dispose();
}
}