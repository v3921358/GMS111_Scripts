/*
	����:	�ȴ����˵�����
	�؈D:	��Ӣ��������
	����:	914021000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.sendOk("#b���㿼�]���ځ�����ՄՄ�ɣ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�Ǻǡ������p�ˁ��@�NƫƧ�ĵط����");
	if (status == 1)
		qm.sendNextPrevS("#b����Ҫ������Lì��");
	if (status == 2)
		qm.sendNextPrev("������Lì�� �ǷN�|����С�����Y���N���u�ġ���.");
	if (status == 3)
		qm.sendNextPrevS("#b��֪�������ð�U�u�����Y������F���� ����Ҫ������������");
	if (status == 4)
		qm.sendAcceptDecline("���@�����^��̫���ˣ���߀����ʲ�N������������� ������һ֧�ܾ���ǰ�����Lì�������^�s���ܽo�㡣 �ǂ����̫�h����Ū�����B���˶����������� �@�N������߀��Ҫ�᣿");
	if (status == 5)
		qm.sendPrev("�Ǻǡ�����Ȼ���@�N�f�����@�����^�Ӿ�ԇһԇ�㡣 ��ȥ��߅��#b�ޟ���#k������Щ#r#o9001012##k��ȡ��#b#v4032311:##t4032311##k#b30��#k�o�ҡ� �ҾͰ�#p1201001#���o�㡣 ");
	if (status == 6){
		qm.forceStartQuest();
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
		qm.sendNext("���ϡ�#b#v4032311:##t4032311##k��ȡ�؁��ˣ� �㡭�����������߀Ҫ����һЩ� ���^������S�r�����܂����Լ���Σ�U���������ǷN����η�ֵ�ˬ�ʺ��ŵ��đB�����ǡ����ðɣ�#p1201001#�ͽo���ˡ� ");
	if (status == 1)
		qm.sendNextPrevS("#b(�^�˺�һ������#p1203000#�����ص،����ڲ��e��#p1201001#���o��.)#k");
	if (status == 2)
		qm.sendPrev("�@���ǌ��T����������Lì������#b#p1201002##k��������Ͱ�Ӛ�ˡ�");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.removeAll(4032311);
		qm.warp(914090201,0);
		qm.dispose();
}
}