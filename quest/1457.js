/*
	����:	������ð�ռ�
	�؈D:	��˾֮��
	����:	240010501
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
	if (qm.getQuestStatus(1457) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1457) == 1) {
		qm.sendAcceptDecline("���C�����Լ����гɞ�Ӣ�۵�ؠ�ء� �F�ڛ]�б�Ҫ�^�m�C���ˡ��������ɞ�������ð�U�҆᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142110:#   #t1142110#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(qm.getJob() + 1);
		qm.gainItem(4031517,-1);
		qm.gainItem(4031518,-1);
		if (qm.getJob() == 434) {
		qm.gainItem(1142110,1);
		} else {
		qm.gainItem(1142110,1);
		}
		qm.sendNext("��һ�����ɵ�ð�U���_ʼ���F�����ѽ��ɞ��������������������������ð�U�ҡ�");
		}
	if (status == 2)
		qm.sendNext("���ͬ�r�߂��@Щ���|���˲���Ӣ�۵�Ԓ�����l�ܱ��Q��Ӣ���ء�");
	if (status == 3)
		qm.sendPrev("Ӣ�۲��������ģ�����ͨ�^Ŭ���_�ɵġ���ϣ����ɞ�������Ӣ�ۣ����Ið�U�u�����������_�ķ���");
	if (status == 4){
		qm.dispose();
}
}