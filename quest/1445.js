/*
	����:	��ʿ
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
	if (qm.getQuestStatus(1445) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1445) == 1) {
		qm.sendNext("�����ͨ�^�˿�ԇ�����ܲ��e� ���ǂ��ط�Ҋ��#b�P��#k���ǲ��Ǻܳ��@�� �mȻ#b������Ԫ�ĄP��#kֻ�Ƿ������Ǒ�ԓҲ��ǿ�����P�հ���Ӛ���o�ң��������]�п��e�ˡ�");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("�������ĺ��I�P�յđ��Y��ʹ��ɞ��������ĺ��I�� ���X���ˆ᣿ �F��ʣ�µľ����D�ˡ� ���óɞ��ǿ�ĺ��I�����Yʿ�Ĝʂ��ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(511);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("�F��������#b�Yʿ#k����#bȭ�^��ȭ��#k�Ĵ󎟣��������Yʿ��ȥ�M��ʩչ��������ɡ�");
		}
	if (status == 3){
		qm.dispose();
}
}