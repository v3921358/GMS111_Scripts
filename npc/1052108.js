/*
	����:	������������
	�؈D:	����ش�������
	����:	103030101
*/

function start() {
	if (cm.getQuestStatus(2878) == 1) {
		cm.sendOk("#b˵���ǲ��Ǿ���ָ�������Ͱ��");
	} else {
		cm.sendOk(".........����Ͱ��ʲ�N�ÿ��ģ�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.getPlayer().updateQuestCustomData(2878,"check");
	cm.dispose();
}