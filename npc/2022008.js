/*
	����:	����˹
	�؈D:	����� 4
	����:	921121000
*/

function start() {
	if (cm.isQuestActive(3122)) {
		cm.sendOk("��ӡ����������ȶ���");
		cm.getPlayer().updateQuestCustomData(3122,"1");
	} else {
		cm.sendOk("��ӡ����������ȶ���");
		}
	cm.dispose();
}