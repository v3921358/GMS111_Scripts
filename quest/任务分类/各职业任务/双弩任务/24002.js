/*
	����:	������˹��ί��
	�؈D:	��ŷ��
	����:	910150001
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
	if (qm.getQuestStatus(24002) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24002) == 1) {
		qm.sendOk("������ħ���������������Ӧ���޷��о���#m101050000#�Ĵ����ˡ�");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.dispose();
}
}