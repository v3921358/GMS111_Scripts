/*
	����:	����������˿��
	�؈D:	������֮��
	����:	260010600
*/

var status = -1;

var morph;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status >= 0 && mode == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
		morph = qm.getMorphState();
		if (morph == 2210005) {
		qm.sendSimple("�@����#p2101004#���ˆ᣿ ���Ǻþò�Ҋ���@�κò������õ��������۲���ֵĽz�Iร� ��Ȼ��Ʒ�|Ҳ��һ���� ���ǡ������Nһֱ����������\r\n#L0##b�����b�����]ʲ�N��ֻ��̫�����c��");
		return;
		}
		qm.sendOk("İ���ˣ��Ҳ��J�R�㣬Ո�㲻Ҫ���ҡ�");
		qm.dispose();
		}		
	if (status == 1)
		qm.sendSimple("���e�������Л]���^���� ����һֱ���@����~������߀�Ԟ�#p2101004#���������������أ� ����������Ę��׃���������t�ӣ� ��ě]�P�S�᣿\r\n#L0##b�����b�����]���]�P�S������Ҫ���ġ�#l");
	if (status == 2)
		qm.sendSimple("��ě]�P�S�᣿ ��֮ǰ���X��#p2101004#�����w�|̓�����ǲ�����Ҫ���cʲ�Nˎ���� ���������ڱ���ѩ����߅���I��ĸ�ðˎ����Ҫ��Ҫ�IЩ��ȥ�԰��� �ҕ����������c�ġ�\r\n#L0##b���f�]�P�S����#l");
	if (status == 3)
		qm.sendSimple("��Ć᣿ ����#p2101004#����������ƽ����̫һ��ร� �ǲ�����ĸ�ð���� ���N����������ƽ�r��#p2101004#����ร� ƽ���㶼Ҫ�Ұ�#t4010007#�����һ�c�o����������֡��������#p2101004#���ˆ᣿\r\n#L0##b�Ҳ��������l��#l");
	if (status == 4)
		qm.sendSimple("߀�治����ƽ�r��#p2101004#���ˡ�������֪��#p2101004#���˿ɲ����@�N��Ĭ���Ե��ˣ��y���l��ʲ�N�����ˆ᣿ �ۣ� ����Ę׃���������t���ǲ����������� ��ĺܱ�Ǹ�����R��ȥ�ýz�I�^��Ո�Ե�һ��~ \r\n#L0##b��ÿ�һ�c #l");
	if (status == 5)
		qm.sendPrev("��~���@�e��Ո��С���û�ȥ�ɣ� �@�z�I���ɲ����S�S�����ܵ��ֵĖ|��ร� �������Ɠp��������������#p2101004#�����P�M�������أ�\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#v4031571# 1 #t4031571# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
	if (status == 6){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(4031571, 1);
		qm.gainExp(10000);
		qm.dispose();
}
}