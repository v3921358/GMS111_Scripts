/*
	����:	��սʿ
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
	if (qm.getQuestStatus(1433) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1433) == 1) {
		qm.sendNext("�Ǻǣ���#b������Ԫ�����g�̾�#k���Y�����X��Σ� ����#b���}��ʯ�^#k���е��@��������չ�F�����ػ��󡭡����g�̾�ͬ�⌢�������ǿ�đ�ʿ֮·�����Բŕ��F��");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("ͨ�^�ⲫ��Ŀ�򞣬���ѽ��@���˳ɞ�������ʿ���Y�� �F��ʣ�µľ����D�ɞ������đ�ʿ#b���ʿ#k�����ţ����ѽ��ʂ�ý���ȫ�µ������ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(131);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("�F�����ѽ��ɞ���һ��#b���ʿ#k������#b����ì#k�Č��ҡ����������đ�ʿ���ĬF��������ԱM���չʾ��������ˡ�");
		}
	if (status == 3){
		qm.dispose();
}
}