/*
	����:	��ķ�ĵ�����ί��
	�؈D:	��������
	����:	103000000
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
	if (qm.getQuestStatus(2866) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(2866) == 1) {
		qm.sendNext("�@��ñ����ʲ�N��");
		}
		}
	if (status == 1)
		qm.sendNextPrev("�@�e���N����ñ�ӡ��y����ڤ�����`�G��ģ�");
	if (status == 2)
		qm.sendPrev("�š��@��ñ�ӿ����������ՆT��ñ�ӡ��y���ǵ��Fվ���ՆT��ñ��Ū�G��..�� ��ķ��߅��������ȥ��棬߀����ȥ�ҵ��Fվ���ՆT�_��һ�°ɡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 700 exp ");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainExp(700);
		qm.dispose();
}
}