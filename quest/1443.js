/*
	����:	���п�
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
	if (qm.getQuestStatus(1443) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1443) == 1) {
		qm.sendNext("�����ͨ�^�˿�ԇ�����ܲ��e� �mȻ#b������Ԫ���_����#kֻ�Ƿ��������қ]�뵽���ܑ������� �_����׌��ͨ�^#b���}��ʯ�^#k�ن���������߀�f�����d���ӱ��ģ������_������Ԓ�]�e��");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("���������w�b�_�����đ��Y��׌��׃�����������w�b�����mȻ���Լ�߀�]���X���� �F��ʣ�µ������ֻ���D�ˡ� ���óɞ��ǿ���w�b�������п͵Ĝʂ��ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(421);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("�F��������#b���п�#k����#b�̄�#k�Ĵ󎟣������Ī��пͣ�ȥ�M��ʩչ��������ɡ�");
		}
	if (status == 3){
		qm.dispose();
}
}