/*
	����:	��
	�؈D:	�ۿ�ͨ��&amp;lt;�����ٲ���&gt;
	����:	200000141
*/

var status = -1;

var select = -1;
var togo;

function start() {
	if (cm.getMapId() == 251000000) {
		togo = "�ٲ���";
		cm.sendYesNo("ð�U�ң���;���᣿���QӋ��܇���\�������� #b����#k���ӣ����dȤ�᣿ֻ��Ҫ#b500 ����#k�Ϳ��ԡ�");
	} else if (cm.getMapId() == 250000100) {
		togo = "����";
		cm.sendSimple("ð�U�ң���;���᣿���QӋ��܇���\�������գ�Ո�x����ȥ�ĵط���#b\r\n#L0#���֮��(1500 ����)#l\r\n#L1#�ٲ���(500 ����)#l");
	} else if (cm.getMapId() == 200000141) {
		togo = "���֮��";
		cm.sendSimple("ð�U�ң���;���᣿���QӋ��܇���\�������գ�Ո�x����ȥ�ĵط���#b\r\n#L0#����(1500 ����)#l");
}
}

function action(mode, type, selection) {
	if (togo == "�ٲ���") {
		baiCaoTang(mode, type, selection);
	} else if (togo == "����") {
		muLung(mode, type, selection);
	} else if (togo == "���֮��") {
		tianKong(mode, type, selection);
}
}

function baiCaoTang(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status--;
	if (status == -2) {
		cm.sendOk("����Ҫ��Ԓ���S�r�����ԁ���");
		cm.dispose();
	} else if (status == 0) {
		if (cm.getMeso() < 500) {
		cm.sendOk("������]�����ė��š�");
	} else {
		cm.gainMeso(-500);
		cm.warp(250000100, 0);
		}
		cm.dispose();
	} else {
		cm.dispose();
}
}

function muLung(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status--;
	if (status == -1) {
	if (select == 1) {
		cm.sendOk("����Ҫ��Ԓ���S�r�����ԁ���");
		}
		cm.dispose();
	} else if (status == 0) {
		if (select == -1)
			select = selection;
		if (select == 0) {
			if (cm.getMeso() < 1500) {
			cm.sendOk("������]�����ė��š�");
		} else {
			cm.gainMeso(-1500);
			cm.warp(200090310, 1);
			}
			cm.dispose();
		} else if (select == 1) {
			cm.sendYesNo("Ҫ�� #b�ٲ���#�Ƅӆ᣿ֻҪ��;������Σ�U�Ą�������ȥ���ܿ���ܵ��_���r�X��#b500 ����#k��");
			}
	} else if (status == 1) {
		if (select == 1) {
			if (cm.getMeso() < 500) {
			cm.sendOk("������]�����ė��š�");
		} else {
			cm.gainMeso(-500);
			cm.warp(251000000, 0);
			}
			}
			cm.dispose();
		} else {
			cm.dispose();
}
}

function tianKong(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status--;
	if (status == 0) {
		if (cm.getMeso() < 1500) {
		cm.sendOk("������]�����ė��š�");
	} else {
		cm.gainMeso(-1500);
		cm.warp(200090300, 1);
		}
		cm.dispose();
	} else {
		cm.dispose();
}
}