/*
	����:	��Ӱ˫�� - ���³���ռ�
	�؈D:	ѩ���ķ���
	����:	103050101
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(2369) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(2369) == 1) {
		qm.sendNext("#v4032617:#���Ǹ��H����ӛ��û�뵽���Ȼ�����û���������������������ǰ�����飬�������Ҹ��׵���һ�졭���ҵ�ʱ������������Χס�����������ң���������ΪŮ����");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("����Խ��Խϲ���㣬 �������ڵ�������Ӧ�����ʸ���������h�̏ĵ�λ�ϣ����Ƿ�Ը����ܣ�");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(431);
		qm.gainItem(4032617, -1);
		qm.gainItem(1052244, 1);
		qm.sendOk("�������Ѿ��ǵ��h�̏��ˣ���ϣ����Ҳ��ӵ��һ���������ġ�����");
		}
	if (status == 3){
		qm.dispose();
}
}