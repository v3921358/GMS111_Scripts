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
	if (qm.getQuestStatus(1432) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1432) == 1) {
		qm.sendNext("�Ǻǣ���#b������Ԫ�����g�̾�#k���Y�����X��Σ� ����#b���}��ʯ�^#k���е��@��������չ�F�����ػ��󡭡����g�̾�ͬ�⌢�������ǿ�đ�ʿ֮·�����Բŕ��F��");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("�������đ�ʿ#b���g�̾�#k���Y����@���˳ɞ�������ʿ���Y�� ʣ�µ����飬�����D��#b�Tʿ#k�ˡ������ˣ����ý����������Ĝʂ��ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(121);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("�F������#b�Tʿ#k����#b�����g��#k�Ĵ󎟣������đ�ʿ��ȥ�M��ʩչ��������ɡ�");
		}
	if (status == 3){
		qm.dispose();
}
}