/*
	����:	���鶷ʦ֮·
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
	if (qm.getQuestStatus(23011) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23011) == 1) {
		qm.sendAcceptDecline("����ĳɞ�һ�����`�Y���᣿ �F��߀���������x�� ֻҪֹͣ��Ԓ�������΄գ�Ȼ��������ˌ�Ԓ���С� ��Ҫ���]����� �����Ҫ�x���`�Y���᣿ ���X���@���I�m����ķ�����֮·�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142242#  #t1142242#\r\n#i1382100#  #t1382100#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.resetStats(4, 4, 4, 4);
		qm.changeJob(3200);
		qm.gainItem(1142242,1);
		qm.gainItem(1382100,1);
		qm.sendNext("�ܺã� �gӭ����ʽ�ɞ鷴���ߡ� �ĬF���_ʼ����ǆ��`�Y���ˡ�����һ�����Y��ħ������ϣ�������¸ҵ؛_����ǰ��͔��ˑ��Y��");
		}
	if (status == 2)
		qm.sendOk("�㲻���������ԷQ�ǆ��`�Y���� �������ɫ֮��ץס�˵�Ԓ�����韩�ˡ� �ĬF������Ҫ���ҽ��������Ρ� ��������؄e�n�̲ŵ������@�e��ġ� �Ǻǡ����؄e�n������ؓ؟���ҕ��úÎ���ġ� ");
	if (status == 3){
		qm.dispose();
}
}