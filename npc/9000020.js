/*
	����:	��������
	�؈D:	���ִ�
	����:	1000000000
*/

var status = -1;

var maps = Array(
Array(250000000,2900,290),
Array(800000000,2900,290),
Array(541000000,2900,290),
Array(551000000,2900,290)
);//���ε�ͼ����
var selectedMap = -1;
var cost = 0;

function action(mode, type, selection) {
	if (mode == -1) {
	cm.dispose();
	} else {
	if ((status <= 2 && mode == 0) || (status == 5 && mode == 1)){
		cm.dispose();
		return;
		}
	if (mode == 1)
	status++;
	else
	status--;
	if (cm.getChar().getMapId() != 250000000 && cm.getChar().getMapId() != 541000000 && cm.getChar().getMapId() != 551000000 && cm.getChar().getMapId() != 800000000) {
	if (status == 0) {
	status = 1;
		if (cm.getJob() == 0) {
			cm.sendNext("���ˏķ�æ���ճ��н�Ó��ȥ����һ�����[���N�ӣ����H�����w��·f�Į����Ļ���߀�܌W�����ٖ|���ęC�����҂�ð�U�u���[��˾�����ʂ��ˣ��S����Ȥ���������[�ײ͡��l�f�h�[������F��Ո��һ�f���ģ��҂���#bð�U�u�������[�ײ�#kֻ��Ҫ#b2900����#k�Ϳ�������ȫ�̡�");
		} else {
			cm.sendNext("���ˏķ�æ���ճ��н�Ó��ȥ����һ�����[���N�ӣ����H�����w��·f�Į����Ļ���߀�܌W�����ٖ|���ęC�����҂�ð�U�u���[��˾�����ʂ��ˣ��S����Ȥ���������[�ײ͡��l�f�h�[������F��Ո��һ�f���ģ��҂���#bð�U�u�������[�ײ�#kֻ��Ҫ#b2900����#k�Ϳ�������ȫ�̡�");
			}
			}
	if (status == 1)
		cm.sendSimple("�ڸ����[���Ҷ��������ṩ�M����\�ķ��ա����NՈ�ʂ�ã�Ո�x��������[·�������ֿ���9�ۃ��ݡ�\r\n#b#L0#�鿴���[��·.#k#l");
	if (status == 2) {
		var selStr = "�ڸ����[���Ҷ��������ṩ�M����\�ķ��ա����NՈ�ʂ�ã�Ո�x��������[·�������ֿ���9�ۃ��ݡ�#b";
		if (cm.getJob() == 0) {
			for (var i = 0; i < maps.length; i++) {
			selStr += "\r\n#L" + i + "##m" + maps[i][0] + "# ("+maps[i][2]+"����)#l";
			}
		}else{
			for (var i = 0; i < maps.length; i++) {
			selStr += "\r\n#L" + i + "##m" + maps[i][0] + "# ("+maps[i][1]+"����)#l";
			}
			}
			cm.sendSimple(selStr);
			}
	if (status == 3) {
		selectedMap = selection;
		if (cm.getJob() == 0) {
			cost = maps[selectedMap][2];
		} else {
			cost = maps[selectedMap][1];
			}
			cm.sendYesNo("�ѽ������ã��_��Ҫȥ #b#m" + maps[selectedMap][0] + "##k�᣿���N�㌢Ҫ���o��#b" + cost +"����#k. �������ȥ��");
			}
	if (status == 4) {
		if (cm.getMeso() < cost) {
			cm.sendPrev("���������X�������@������̫�ֲ��ˣ��Ҳ��܎���ȥ��");
		} else {
			cm.gainMeso(-cost);
			cm.saveLocation("WORLDTOUR");
			cm.warp(maps[selectedMap][0], 0);
			cm.dispose();
			}
			}
	} else if (cm.getChar().getMapId() == 250000000 || cm.getChar().getMapId() == 541000000 || cm.getChar().getMapId() == 551000000 || cm.getChar().getMapId() == 800000000) {
	if (status == 0)
		cm.sendSimple ("�������[���N�ӣ�����Ȥ�ɡ�\r\n#L0##b���أ�#m" + cm.getSavedLocation("WORLDTOUR") + "# #k#l\r\n#L1##b�^�m�^��#k#l");
	if (status == 1) {
		if (selection == 0)
			cm.sendOk("�õģ�ϣ�����ܝM�Ȿ�����У������Ҫ���e�ĵط����[Ոӛ�ø��V�ҡ�");
		if (selection == 1) {
			cm.sendOk("�����ȥ���ٵ�̎�����ɣ��������ȥ�ĕr���ف���V�ҡ�");
			cm.dispose();
			}
			}
	if (status == 2) {
			var map = cm.getSavedLocation("WORLDTOUR");
			if (map == -1) {
				map = 100000000;
				}
				cm.warp(map, 0);
				cm.dispose();
}
}
}
}