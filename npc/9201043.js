/*
	����:	Amos the Strong
	�؈D:	670010000
	����:	670010000
*/

function start() {
	var marr = cm.getQuestRecord(160001);
	var data = marr.getCustomData();
	if (data == null) {
		marr.setCustomData("0");
		data = "0";
		}
		//ԭ if (cm.getPlayer().getLevel() < 40 || cm.getPlayer().getMarriageId() <= 0 || !data.equals("3")) {
		if (cm.getPlayer().getLevel() < 40) {
			cm.sendNext("ֻ��40�����ϵ��ѻ���ʿ�ſ��Ը����fԒ��");
			cm.dispose();
		} else {
			if (cm.haveItem(4031592)) {
				cm.sendYesNo("�����#v4031592:##b#t4031592##k���o�ң�����׌���Mȥ��");
				return;
				}
				var apq = cm.getQuestRecord(160000);
				var data = apq.getCustomData();
			if (data == null) {
				apq.setCustomData("0");
				data = "0";
				}
				var time = parseInt(data);
			if (time + (0 * 3600000) < cm.getCurrentTime()) { //1 ʱ������

			if (!cm.haveItem(4031592) && cm.haveItem(4031593, 10)) {
				cm.gainItem(4031593, -10);
				cm.gainItem(4031592, 1);
				cm.sendOk("Ո�ú����#v4031592:##b#t4031592##k��ÿ������r�g����g��3С�r���������_ʼ���ѽ�ӛ�����ĕr�g��");
				apq.setCustomData("" + cm.getCurrentTime());   //��¼ʱ��
			} else {
				cm.sendOk("�ĸ����������e�o����10��#v4031593:##b#t4031593##k,���������@�e���Qһ��#v4031592:##b#t4031592##k��");
				}
			} else {
				cm.sendNext("Oho, it looks like you've already went in here for the past 3 hours. Come back later.");
				}
			cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4031592, -1);
		cm.warp(670010100,0);
		}
	cm.dispose();
}