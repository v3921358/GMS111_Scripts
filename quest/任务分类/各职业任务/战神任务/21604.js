/*
	����:	�����
	�؈D:	����ѩ��
	����:	211000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��ѽ���㎧���Ĳ����ǆ᣿ ���ѽ��þö��]Ҋ�^���ǵ����ˡ� ���^�������ǅs��#b�T��#k���y����߀�����T��֮�g�᣿");
	if (status == 1)
		qm.sendNextPrev("���^�T�ˣ�����һ�N�T���Ǳ��Ͽ������M���K�ܺ���֮�g���F���Ü�ͨ�ĿƼ��� �������T�^#o5130104#��#o5140000#�����r�ҿɎ��أ�");
	if (status == 2)
		qm.sendNextPrev("����W���T�ǆ᣿ �������W��Ԓ����#b#p2020007##k���Ԏ����㡣");
	if (status == 3)
		qm.sendNextPrev("Ҫ���T�ˣ��]���κΜʂ䣬ֱ���T���Ǳ����Ǻ����y�ġ� Ҫ��Ū��#b#v1912011:##t1912011##k���@�Ӳ���׌�ǲ��X���y�ܡ� �ҕ����ǰ�����ȥ���Y�Ͼͺá�");
	if (status == 4)
		qm.sendAcceptDecline("�u��#t1912011#���Y����#b#t4000048##k�� ���#b50��#k�͉��ˡ� ������Y�϶����R�ˣ��ҾͰ��T�˵ļ��ɺ�#t1912011#һ�����ڽo�㡣 �s�oȥ���Y�ϰɡ� ��Ҳ���ڴ�����");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}