/*
	����:	�ڶ���ħ����
	�؈D:	��ħ��ʦ���о���
	����:	261040000
*/

function start() {
	if (cm.getQuestStatus(3345) == 1) {
		cm.forceStartQuest(334502,"1");
		cm.sendOk("��������������ħ����");
	} else {
		cm.sendOk("������ħ����");
		}
	cm.dispose();
}