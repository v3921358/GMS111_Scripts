/*
	����:	ѩ�굺��ͼ
	�؈D:	�ٲ���
	����:	251000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 1 && mode == 0 || status == 2 && mode == 0 || status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("����ð�U�҆᣿���Ը��X���ǳ�����Ě�Ϣ�������@�ӵ��ˁ��@���fʲ�N���ţ������������µĘ��ӡ�ʲ�N�£�\r\n#b#L0#��#t4032472#�᣿#l\n#k");
	if (status == 1)
		qm.sendSimple("ѩ�w�u������ǰ�����h�ĺ�ץ�~�r��Ҋ�^�ču���ǵġ����С���麣�I�]���^���h�����]�ѵ؈D�o���ˡ�\r\n#b#L0#�ܽo��#t4032472#�᣿#l\n#k");
	if (status == 2)
		qm.sendSimple("�Ǎu�L߅�кܶవ������Ҳ���B�LҲ̫������ȥ������Ҳ�]�M�^�ǂ��u���䌍֪���ǂ������ˎ׺��]�С����ǣ�\r\n#b#L0#��Ҳ��Ҫ�؈D��#l\n#k");
	if (status == 3)
		qm.sendNextPrev("���������N�f�͛]�k���ˡ�������һ��Ո�󣬾ͽo��؈D��Ո����ǎֵ����{#m251000000#�Ľ𹴺��\�F��#r#o9001029##k��#r#o9001030##k��#r100�b#k���������᣿");
	if (status == 4)
		qm.sendAcceptDecline("��Ҫ��Ԓ���ҿ��԰����͵����I�ĳ�Ѩȥ�� ����F�ھͳ��l�᣿");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(925110001, 1);
		qm.dispose();
}
}