/*
	����:	��һ���ӡʯ���鱨
	�؈D:	��������ѵ����
	����:	100000201
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("#b#h0##k����#b#h0##k���Ҿ�֪��һ������Ҋ����ġ� ������ǂ������Z�Ե��ˡ� ��������ʲ�N�r��һ���������ҵģ�����һֱ�ڵ����㡭��");
	if (status == 1)
		qm.sendNextPrevS("#b��#p2131000#�Ҹ���Ц�ˡ���#k");
	if (status == 2)
		qm.sendNextPrev("�Ǖr�]�ܽo����ţ��K춿��Խ��o���ˡ� �^���@�N�L�r�g�����ѽ����f�ˡ�������ԓ߀���Կ���");
	if (status == 3)
		qm.sendNextPrev("���mȻ���������f����Ԓ�����F���ғ����D�ٵĹ��ܹ��������ԛ]�Еr�g�� �������ف����Ұɡ�");
	if (status == 4)
		qm.sendNextPrev("�܎������æ���Ҹе��ܸ��d�� �ҵ����ѡ�");
	if (status == 5)
		qm.sendPrevS("#b����#p2131000#���e�յ����š������Y��ʲ�N�����أ���#p1002104#һ�𿴿��ɡ���#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i4032328# 1 #t4032328#",3);
	if (status == 6){
		if(!qm.canHold(4032328, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		if(!qm.haveItem(4032328, 1)) qm.gainItem(4032328, 1);
		qm.forceStartQuest();
		qm.dispose();
}
}