/*
	����:	��������Ͱ
	�؈D:	������
	����:	103020100
*/

function start() {
	if (cm.getQuestStatus(2857) == 1) {
		cm.sendOk("#b����������������ϸ������û��������");
	} else {
		cm.sendOk("ֻ��һ����ͨ������Ͱ��");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.getPlayer().updateQuestCustomData(2857,"1111");
	cm.dispose();
}
