/*
	����:	����
	�؈D:	���Ϲ���
	����:	211000001
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
	if (qm.getQuestStatus(1439) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1439) == 1) {
		qm.sendNext("Ҋ����#b������Ԫ�ĺ�����#k�����X��Σ� �ǲ��Ǻܳ��@�� �@����#b���}��ʯ�^#k�����е��@�������� ������������Ԫ�ن���������Y�������� ���f�@��#b������#k�ص؞���ʂ�ġ�");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("�������Ĺ����ֺ����ȵđ��Y�����������������Ĺ�����֮·��������X���Լ����L�ˆ᣿ �F��ʣ�µ���������D�ˡ� ���óɞ��ǿ�Ĺ����֡������ֵĜʂ��ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(311);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("�F��������#b����#k����#b��#k�Ĵ󎟣����������֣�ȥ�M��ʩչ��������ɡ�");
		}
	if (status == 3){
		qm.dispose();
}
}