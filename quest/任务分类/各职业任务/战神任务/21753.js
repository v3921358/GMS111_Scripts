/*
	����:	�����ߵİ���ɭ�ֵķ�ӡʯ
	�؈D:	Ӫ�ػ�����
	����:	300000010
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 12) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���� ��#m300000011#�e����ʲ�N�������������ᣬ#b#h0##k�� ��ӡʯ�ҵ��ˆ᣿");
	if (status == 1)
		qm.sendNextPrevS("#b���v��#m300000011#�Y�l�������顣��#k");
	if (status == 2)
		qm.sendNextPrev("������Щ�һﾹȻ��������֡����Բ���#b#h0##k����Ӧ�úúñ��ܵġ���");
	if (status == 3)
		qm.sendNextPrevS("#p2131000#����������e��");
	if (status == 4)
		qm.sendNextPrev("��߀���Ϙ��ӡ� ���^�������ᵽ��ӡʯ�����飬׌��������һ��������");
	if (status == 5)
		qm.sendNextPrevS("#b������");
	if (status == 6)
		qm.sendNextPrev("�ǵģ��Ұl�F��һ�����^ȥ�����ţ��e���кͷ�ӡʯ���P�ľ����� ���뿴���᣿");
	if (status == 7)
		qm.sendNextPrevS("#b�����ţ� �š���");
	if (status == 8)
		qm.sendNextPrevS("#b#i4032327:#���o���õ��š���ͨ�^���֣������˵��ϡ���#k");
	if (status == 9)
		qm.sendNextPrev("�����mȻ�Ҳ�̫����r�g���t�������Ҳ��ܰ��@���Ž��o���ԭ�򣬑�ԓ��#b����҂���춃ɂ���ͬ�ĕr��#k������׌�˂��С� ����֮ǰ�҂�߀��ͬ�顭��");
	if (status == 10)
		qm.sendNextPrev("������Ҳ֪�����҂��������Ի���L�r�g�� �mȻ��ɞ��ˎװ���������ˣ����ґ�ԓҲ�ܻ�ǂ��r�� #b#h0##k��#b�ҕ��úñ����@���ţ�Ո��������ǂ��r���^�����ҡ�");
	if (status == 11)
		qm.sendNextPrev("�mȻ�^�ˎװ���r�g���������㑪ԓ������ӛ�@���s���� ׌�҂�������Ҋ�ɡ� �ҕ�������ġ�");
	if (status == 12)
		qm.sendAcceptDecline("#b���ص�#p1201000#�����ڵĕr�g��ȥ����#p2131000#�ɡ�Ո��#p1002104#�϶������ҵ�#p2131000#�ġ���#k");
	if (status == 13){
		qm.forceStartQuest();
		qm.dispose();
}
}