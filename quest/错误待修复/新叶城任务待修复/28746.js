/*
	����:	What's Quaking
	�؈D:	���ƻ�����Ҷ��
	����:	600000000
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendYesNo("���ȣ����ǵ�Ū������ʲô�������ⳡ��������#b#m600000000##k����Щ����ͷ���˵�������ɲ���ʲô��Ȼ�����Ҿ�����Ӧ�ô�������ֿ�ʼ���顣.");
    } else if (status == 1) {
	qm.sendNext("�����ú�����С�������#b#i2430680# #t2430680:##k���������������������ĸ��Ƕ�˵�㡰���������ҵ���������С�ʲô�ġ���������˵��ȥ���ɡ�.");
    } else if (status == 2) {
	qm.forceStartQuest();
                qm.gainItem(2430680, 1);
                qm.forceCompleteQuest();
	qm.dispose();
    }
}

