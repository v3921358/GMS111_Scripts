/*
	����:	���˵�ɭ��
	�؈D:	���ε���³֮��
	����:	271000200
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
	if (qm.getQuestStatus(31119) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(31119) == 1) {
		qm.sendNext("�о������е����죿����ʶ�ң��㿴������ǰһ���������������ִ山��Сɽ��(���������ʶ��)�Ǻǣ�����ǰ����ô��С�𣿱���ֻ��˵������");
		}
		}
	if (status == 1)
		qm.sendPrev("��������ǰ���˹˵���Ǹ��˰�������Ҳûʲô���µ����ӡ��´����������ң���˵��������Ҫ��������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 50000 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(50000);
		qm.dispose();
}
}