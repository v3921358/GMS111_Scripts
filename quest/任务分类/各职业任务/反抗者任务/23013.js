/*
	����:	��еʦ֮·
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
	if (qm.getQuestStatus(23013) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23013) == 1) {
		qm.sendAcceptDecline("����ĳɞ�Cе���ˆ᣿ �F��߀�������x��ęC���� ֻҪֹͣ��Ԓ�������΄գ�Ȼ��������ˌ�Ԓ���С� Ո��úÿ��]һ�¡� �����Ҫ�x��Cе���᣿ ���J���@���I�m����ķ�����֮·�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s30001068#  #q30001068# \r\n#i1142242#  #t1142242#\r\n#i1492014#  #t1492014#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.resetStats(4, 4, 4, 4);
		qm.changeJob(3500);
		qm.teachSkill(30001068,1,1);
		qm.gainItem(1142242,1);
		qm.gainItem(1492014,1);
		qm.sendNext("�ĬF���_ʼ������ǙCе���ˡ� �������ԲٿؙCе���ˣ�Ҫ��������֪�R�ͷ����팦����ǰ�Ĕ��ˡ� ");
		}
	if (status == 2)
		qm.sendOk("�������ɫ֮��l�F�҂����挍��ݾ����ˣ����ԏĬF���_ʼ����Ҫ���Ҍ����� ��������ڷŌW�ᵽ���@�����n���o���ČW���� ���@������o���У��ҕ�����̳�ǿ��ęCе��");
	if (status == 3){
		qm.dispose();
}
}