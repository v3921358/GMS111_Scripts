/*
	����:	Ŧ��
	�؈D:	��ľ����Ʊ��
	����:	240000100
*/

function start() {
	cm.sendYesNo("���������? ���@վ��#b���֮��#k��Ҫ���M#b 30000����#k ُ�I#v4031045:##b#t4031045##k �ſ����𺽡�");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("�x�x���R��");
		cm.dispose();
	} else {
	if (cm.getMeso() >= 30000 && cm.canHold(4031045)) {
		cm.gainItem(4031045,1);
		cm.gainMeso(-30000);
		cm.sendOk("Ո�ú���Ĵ�Ʊ���ȴ�������");
	} else {
		cm.sendOk("���S��y���ė��Ų���������Ո���z���±���ETC��λ�Ƿ��b�M��");
		}
	cm.dispose();
}
}