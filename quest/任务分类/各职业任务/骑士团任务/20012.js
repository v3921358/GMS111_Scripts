/*
	����:	��֪��������ص�������
	�؈D:	�µ�����4
	����:	130030003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("��ͨ�����ǻ������ܣ�������ʹ�á���Ҫ����Ҫӛס��ʹ�ü��������������C�Ǻ���Ҫ�ġ��ҽ��h�����¿��]��");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��һֱ�ڵȴ���, #h0#. �ҵ������� #p1102006# ����Ҫ׌��M���ҵ��ֵܡ� ���ԣ����ѽ��W�������ʹ����ͨ�����ˣ�\r\n ���˽�������˽� #b���ʹ�ü���#k, ����l�F�@������Ў�����");
	if (status == 1)
		qm.sendNextPrev("����ÿ����������@�ü����c�����@��ζ�@�������һЩ�����ˣ� Ո�� #bK �I#k ������ļ���. �ú�������ļ����c���ڼ����ϡ� #b��������������I�ϸ�����ʹ�á�#k");
	if (status == 2)
		qm.sendAcceptDecline("�r�g�^����죬��������Ҫ������... ��������l�F�ܶ�� #o100121# ���@���؈D������Ҫ�� #r3�b #o100121##k ʹ����� #b����#b ���� Ȼ��o�� 1 #b#i4000483:##t4000483##k �����C��OK�� �ҕ����@�e����ġ�");
	if (status == 3){
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
		qm.sendOk("���ѽ��ɹ��ش��� #o100121# �K�o�Ҏ����� һ�� #t4000483#���@�Ƿǳ�����ӡ�����! #b�������� 3 �������c��������ÿһ�������ĕr��, ����@�ø��༼���c��������Ո�������^��ȥ���ҵ��ֵ� #b#p1102007##k, �������V����һ�����N����\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 55 ���ֵ");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(4000483, -1);
		qm.gainExp(55);
		qm.dispose();
}
}