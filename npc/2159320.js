/*
	����:	�����
	�؈D:	��������Э��1
	����:	926150000
*/

function start() {
	if (cm.getQuestStatus(23270) == 1) { 
		cm.sendOk("����Ϯ�����ң����ҵĶ��������ˡ�");
	} else {
		cm.sendOk(".......... ");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(23276,"1");
	cm.warp(926150020, 1);
	cm.dispose();
}