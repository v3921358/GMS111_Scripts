/*
	����:	���������乫
	�؈D:	�����������
	����:	925020001
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status >= 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("ʲ�N�£��@�e�����}�ĵ�������ֹ˽�ģ�\r\n\r\n\r\n\r\n#b#L0#��Ҋ�乫������Ҫ���¡�#l\n#k");
	if (status == 1)
		qm.sendSimple("���N�����һ��ɍu�����ɣ��乫����һֱ�����όӵ��������ߣ�\r\n\r\n\r\n\r\n#b#L0#���]������·����Ҋ�乫�ķ�����#l\n#k");
	if (status == 2)
		qm.sendSimple("�g�أ��fʲ�N�أ���Ȼ�����@���}�ĵ����eʹ���@�N���ɵ��ֶΰ���\r\n\r\n\r\n\r\n#b#L0#�������w�������ɽ�˅���#l\n#k");
	if (status == 3)
		qm.sendSimple("������\r\n\r\n\r\n\r\n#b#L0#�����w�ܺõ���ɽ�˅�#l\n#k");
	if (status == 4)
		qm.sendSimple("�����������ԣ��^�������ԡ�\r\n\r\n\r\n\r\n#b#L0#�������w����ɽ�˅�100����#l\n#k");
	if (status == 5)
		qm.sendSimple("���𡭿ȡ��ȿȡ����N��Ո��  \r\n\r\n\r\n\r\n#b#L0#Ո���V���ܵ���#l\n#k");
	if (status == 6)
		qm.sendAcceptDecline("�����^����ȥҊ�ώ�������ֻ��һ�����Ǿ���ͨ�^�����Ľ����^ȥ��#b����������������У�������Gɫ���������һ���[�صĂ����c#k������ԏ����e�^ȥ�����^��Î���Ū��100�����a���w�Ľ۹������ȿȡ�.�ȡ�");
	if (status == 7){
		qm.forceStartQuest();
		qm.warp(925041001, 0);
		qm.dispose();
}
}