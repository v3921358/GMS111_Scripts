/*
	����:	�հ׵Ļ���
	�؈D:	����
	����:	250000000
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
		qm.sendNext("�m�fҲ����ʲ�N�����Ļ�����^���@�N����׌���X����Щ��ˬ�� ���ǲ��Ǒ�ԓ׌���´��ف������أ� �����]ʲ�N���飬��Ո׌����Qһ�c�І᣿");
	if (status == 1)
		qm.sendNextPrevS("#b�� �f��Ҋ�^��ɫ֮�����ʿ����");
	if (status == 2)
		qm.sendNextPrev("���������fһ����ڣ�ü���g���y������ǂ����ˆ᣿ ��Ҋ�^�� ����Ҋ�^�������Ж|���������@�e��׌���D���o#p2091007#���^�ӡ�");
	if (status == 3)
		qm.sendNextPrevS("#b�|����");
	if (status == 4)
		qm.sendNextPrev("�ţ��ô�һ��#b#v4220151:##t4220151##k���o�ң�׌��һ��Ҫ�D���� ��һĘ����ģ������Ҳ��D����Ԓ����߀���������Ƶġ� ���ϣ����Ǉ������ˡ�");
	if (status == 5)
		qm.sendNextPrevS("#bȻ���أ�#t4220151#�D����ȥ�ˆ᣿");
	if (status == 6)
		qm.sendNextPrev("�]�У��ǂ������䌍�����c���}��������� ���f�᣿");
	if (status == 7)
		qm.sendNextPrev("���@�ӵģ���������һ�N��ˎˮ�����r���������ˎ���Y���]�뵽#t4220151#һ���ӵ����Mȥ�� ���mȻ������ٶȰ������˳������^#t4220151#��ˮ�ᣬ������ֶ���ʧ�ˡ�");
	if (status == 8)
		qm.sendPrev("����ҾͰl���ˣ��@���N�D���o#p2091007#���^�Ӱ��� ����Ҿ����Ȱ�#t4220151#�ޏͺã����D���o���� �������܎���һ��æ��#t4220151#���������#m250000000#�������Į���#b#p2091008##k���ģ���ȥ��Ԓ����һ���������ޏ�#t4220151#�ġ�");
	if (status == 9){
		if(!qm.canHold(4220151, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.gainItem(4220151, 1);
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
		qm.sendYesNo("Ŷ���㎧��īˮ�ˡ��F��׌��С�ĵص�������������һ�c�c�ĵ����ּ������@ʾ�����ˣ��@��һ���š����挑�������ҕ�ȡ��#b����ķ�ӡʯ����\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(4032342, -8);
		qm.gainItem(4220151, -1);
		qm.gainExp(10000);
		qm.dispose();
}
}