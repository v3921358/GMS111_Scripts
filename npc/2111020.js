/*
	����:	��һ��ħ����
	�؈D:	��ħ��ʦ���о���
	����:	261040000
*/

function start() {
	if (cm.getQuestStatus(3345) == 1) {
		cm.forceStartQuest(334500,"1");
		cm.sendOk("����������һ��ħ����");
	} else {
		cm.sendOk("��һ��ħ����");
		}
	cm.dispose();
}