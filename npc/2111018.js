/*
	����:	�ڶ�������
	�؈D:	ʧ��������ʿ�ļ�
	����:	261000001
*/

function start() {
	if (cm.isQuestActive(3339) || cm.isQuestFinished(3339)) {
		cm.sendGetText("�������������⣬#e#b��Ҫ˵������#k#n");
	} else {
		cm.sendOk("�ڶ������ӡ�������");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (cm.getText() == "���������ҵİ�") {
		cm.warp(261000001, 1);
	} else {
		cm.sendOk("�������#k#n");
		}
	cm.dispose();
}
