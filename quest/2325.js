/*
	����:	ղķ˹������(1)
	�؈D:	Ģ��ɭ��С��
	����:	106020000
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
	if (qm.getQuestStatus(2325) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(2325) == 1) {
		qm.sendNext("�ҡ����¡�Ոһ��Ҫ������ѽ��");
		}
		}
	if (status == 1)
		qm.sendPrev("ʲ�N�����Ǹ���Ɂ���N�����������о��ˣ�����̫���x�ˡ�");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.dispose();
}
}
