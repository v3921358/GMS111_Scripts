/*
	����:	��ɫ��ƿ
	�؈D:	�϶���ʿ�ư�
	����:	103000003
*/

function start() {
	if (cm.getQuestStatus(2358000) == 1 && cm.getQuestStatus(2358001) == 1) { //too lazy
		cm.getPlayer().updateQuestCustomData(2358,211);
		cm.sendOk("���Ѱ�װ��ը����");
	} else {
		cm.sendOk("ֻ�Ǹ���ɫ�ľ�ƿ��");
		}
	cm.dispose();
}
