/*
	����:	ʹ��ս����Ӣ��
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.sendOkS("#b(�����صĿ��]һ�£�#k",3);
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNextS("#b(����һ��#p1201001#����ֵ��Ǒ�ԓ�Ǳ����ì���s���X�����Ĝ�ů��������������ǰ��ӛ����)#k",3);
	if (status == 1)
		qm.sendNextPrevS("#b(��ʹ��ì��Ӣ���ǂ��ԏ�����������w������A�����Lʹ�ø��N���ܣ����L����đ�ʿ��)#k");
	if (status == 2)
		qm.sendNextPrevS("#b(�������и���������߀�����������ݣ����Ԇμ��������Ǔ]���ӵġ�)#k��");
	if (status == 3)
		qm.sendYesNoS("#b(�@���ҵ�ӛ��߀��Ӣ��ͬ���ӛ�������˴_�J߀������һ��#p1201001#��)#k",3);
	if (status == 4)
		qm.sendPrevS("#b(�y�����ܴ_��������ʹ��ì��Ӣ�ۆ᣿���ؿ��]�ᣬҪ�ǿ��Դ_��������һ��#p1201001#��)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142129#  #t1142129#",3);
	if (status == 5){
		if(!qm.canHold(1142129, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(2100);
		qm.resetStats(35,4,4,4);
		qm.gainItem(1142129,1);
		qm.warp(914090100);
		qm.dispose();
}
}