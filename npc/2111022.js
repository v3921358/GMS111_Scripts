/*
	����:	��һ��ħ����
	�؈D:	��ħ��ʦ���о���
	����:	261040000
*/

function start() {
	if (cm.getQuestStatus(3345) == 1) {
		cm.forceStartQuest(334501,"1");
		cm.sendOk("���������ڶ���ħ����");
	} else {
		cm.sendOk("�ڶ���ħ����");
		}
	cm.dispose();
}