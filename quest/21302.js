/*
	����:	����������
	�؈D:	���
	����:	140000000
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
	if (qm.getQuestStatus(21302) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21303) == 2) {
		qm.sendNext("���� �@���@�ǡ�����K������u��#t4032312#�ķ����ˣ� ���������@���Ǟ�ʲ�N���ٱ��ٽ�������Ҳ��Ȼ���㲻�x����������ѽ���F�ڲ����f�@Щ�ĕr�� ��ь�ʯ�o�ң� ");
		}
		}
	if (status == 1)
		qm.sendPrev("���ˣ�#t4032312#��������ԓ���Ի֏��ˣ��������Ҳ��Ҫ�ن���һЩ�� �F����ĵȼ������˲��٣����Ա����ѵ�����Ҳ�����ˣ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142131#  #t1142131# ");
	if (status == 2){
		if(!qm.canHold(1142131, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		qm.forceCompleteQuest();
		qm.removeAll(4032312);
		qm.gainItem(1142131,1);
		qm.changeJob(2111);
		qm.dispose();
}
}