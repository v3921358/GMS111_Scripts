/*
	����:	�������
	�؈D:	ũ������
	����:	100030300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("�š���#p1013101#��Ԓ����ԓ���܎����ˡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("����r���ϵ�#o1210100#���c��֡������o���o�ʵذlƢ�⣬����һЩ���˵�������Ҍ��˺ܓ��ģ����Խ������ͳ����ˡ���Ȼ��һֻ#o1210100#荳��˻h�ʣ��ӵ�������ȥ�ˡ�");
	if (status == 1)
		qm.sendAcceptDecline("���ҵ�#o1210100#֮ǰ������ȰщĵĻh���޺á�߀�ÉĵĲ���̫���أ�ֻҪ�Ўׂ�#b#v4032498:##t4032498##k��ԓ�����޺��ˡ�С���c��Ҫ�����܎����Ѽ�#b3��#t4032498##k�ͺ��ˡ���");
	if (status == 2)
		qm.sendPrev("Ŷ�������x�x�㡣#b#t4032498##k���ԏ��܇���#r#o0130100##k�����ռ����������mȻ���Ǻ܏�������С�ĵ�Ԓ�����ܕ�����Σ�U����һ��Ҫ�ú�ʹ�ü��ܵ��ߡ�");
	if (status == 3){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/6/0", 1);
		qm.dispose();
}
}

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
	if (status == 0)
		qm.sendNext("Ŷ��#b#v4032498:##t4032498##k�Ѽ����ˆ᣿���˲����ґ�ԓ�o��ʲ�N���骄���ء������ˣ������ǂ��|����");
	if (status == 1)
		qm.sendPrev("���ˣ���������h��ʣ�µ�ľ������һ�����ӡ��mȻ��̫�ÿ������s�ܽY�����ͽo���ðɡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010097# #t3010097#1�� \r\n#i2022621# #t2022621# 15��\r\n#i2022622# #t2022622# 15�� \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 210 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.evanTutorial("UI/tutorial/evan/7/0", 1);
		qm.gainItem(4032498, -3);
		qm.gainItem(3010097, 1);
		qm.gainItem(2022621, 15);
		qm.gainItem(2022622, 15);
		qm.gainExp(210);
		qm.dispose();
}
}