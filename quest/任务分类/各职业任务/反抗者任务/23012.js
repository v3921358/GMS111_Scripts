/*
	����:	��������֮·
	�؈D:	�����߱���
	����:	310010000
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
	if (qm.getQuestStatus(23012) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23012) == 1) {
		qm.sendAcceptDecline("�x�x���@�Nˬ��ؽ��ܡ�������Ľ��^��˼��]�ˆ᣿ �����[�b�mȻ��ǿ����Ҳ���y������ �ڲ����T����ͬ�r��߀����M�й���������ڲٿط���Ҫ��ܸߡ� ���������᣿ ϣ�����м����]���֮���ٻش��ҡ� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s30001061#  #q30001061# \r\n#i1142242#  #t1142242#\r\n#i1462092#  #t1462092#\r\n#i2061000# 500 #t2061000#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.resetStats(4, 4, 4, 4);
		qm.changeJob(3300);
		qm.teachSkill(30001061,1,1);
		qm.gainItem(1142242,1);
		qm.gainItem(1462092,1);
		qm.gainItem(2061000,500);
		qm.sendNext("�ܺã� �gӭ����ʽ�ɞ鷴���ߡ� �ĬF���_ʼ������Ǳ����[�b�ˡ� ϣ�������T���T�����`��C�ӵ����申�ˡ�");
		}
	if (status == 2)
		qm.sendOk("����������ᵽ�����[�b��Ԓ���y��������ɫ֮��đ��ɡ� ���ԏĬF���_ʼ����Ҫ���Ұ����Ρ� ���ǁ���ҽ����؄e�n�̵ČW���� �ǺǺǡ�������˼�ɣ� �ҵ��؄e�n�̕��������B����õı����[�b��");
	if (status == 3){
		qm.dispose();
}
}