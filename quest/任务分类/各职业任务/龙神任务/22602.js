/*
	����:	��Ƥ֮��1
	�؈D:
	����:	����
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
		qm.sendNext("���ˡ��㿴�������L���ˡ�");
	if (status == 1)
		qm.sendNextPrevS("#b�ۣ������N�@�N���ˡ������� ����׃�ˡ�");
	if (status == 2)
		qm.sendNextPrev("�Ǻǡ��ǆ᣿ ���N�ӣ� �܎��ɣ�");
	if (status == 3)
		qm.sendNextPrevS("#b�ţ� �����ˣ� ��֮ǰҲ�l�F�ˣ���ÿ�ζ����L�ܶࡣ ������͑Ƥ�����Բŕ��@�ӵĆ᣿");
	if (status == 4)
		qm.sendNextPrev("�ţ��µ��[Ƭ�L����֮�ᣬ�ͱ�횰�ԭ����[Ƭȫ��Ó���� ���Ԓ�������w�L��֮�ᣬ��Ҫ�����·��������@�N���X��");
	if (status == 5)
		qm.sendNextPrevS("#b������������L������[Ƭ������ȥ�ǳ��W����");
	if (status == 6)
		qm.sendNextPrev("�ٺ٣��ǆ᣿");
	if (status == 7)
		qm.sendNextPrevS("#b���mȻ���^�L���ˣ����ɐ۵��Z��߀���Ϙ��ӡ�����");
	if (status == 8)
		qm.sendNextPrev("�������ˣ��㿴���@����\r\n#i4032502#\r\n�@����Ó���һƬ�[Ƭ��ֻ�������W�W�l�⡣ �����[Ƭȫ�����ʧȥ�������������ˡ� ֻ���@���[Ƭ����߀�������ҵ������� �@���|����ԓ���Á���ʲ�N�ɣ�");
	if (status == 9)
		qm.sendNextPrevS("#b�ţ� �����Á��ʲ�N�أ�");
	if (status == 10)
		qm.sendNextPrev("�mȻ��]�нǣ��]���[Ƭ���]��צ�ӣ�Ҳ�������𣬵���������u�����õĖ|�������ǆ᣿ �������Y���u���|�������f�ò��ã� �@���ҵ��[Ƭ�����Էǳ���Ӳ�� ����߀�����ҵ���������ԓ����ʹ���˵�����׃�ø�����");
	if (status == 11)
		qm.sendNextPrevS("#b�ۣ������ǵġ� �ט������˲��� ��ʲ�N�r��׃���@�N���ģ�");
	if (status == 12)
		qm.sendNextPrev("�ٺ٣��Һ�����һ���@�N�ã�������ѽ��ܲt���ˡ� �@�N������С��˼��");
	if (status == 13)
		qm.sendNextPrev("�����ˣ��@���ҵ��[Ƭ�� �����������һ�����������u�����ܰ��Ė|����");
	if (status == 14)
		qm.sendPrev("#b����#p1013000#���e�@�����{ɫ�p�������[Ƭ��������ǣ��[Ƭ���ŵ����e�����R��׃����#t1142156#����\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142156# 1 #t1142156# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3000 exp");
	if (status == 15){
		if(!qm.canHold(1142156, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142156,1);
		qm.gainExp(3000);
		qm.dispose();
}
}