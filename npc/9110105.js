/*
	����:	Naosuke
	�؈D:	���� ���g����
	����:	800040211
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		cm.sendOk("�������ˆ᣿�[����ǰ����һ�lΣ�U�ĵ�·��������֪���@�l��·����ÿ�����ȥ���e���˶�ҧ�÷��飬��������㣬�ҕ��R���D���x�_��");
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("�����l��������M���@�e��?");
	if (status == 1)
		cm.sendYesNo("ʲ�N����߀������^�m���e����?");
	if (status == 2)
		cm.sendPrev("...�������ı�������Ȼ�����Mȥ���Ҿͷ����^ȥ����!");
	if (status == 3){
		cm.warp(800040300, 0);
		cm.dispose();
}
}