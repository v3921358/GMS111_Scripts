/*
	����:	Ѱ�Һ���2
	�؈D:	��վ����
	����:	310050000
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
	if (qm.getQuestStatus(24090) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24090) == 1) {
		qm.sendNext("#b(ҡ��ҡ���ȥ�ĺ��ӵ����塣��֪����ô���£���ħ��ʦ�������Ѿ��⿪�ˡ�����Ҳ����ů�ˡ��������ں�����ֻ��ʧȥ��ʶ�������ϻش���ȥ�ɡ�)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(12000);
		qm.warp(310000000, 0);
		qm.dispose();
}
}
