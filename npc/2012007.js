/*
	����:	����˹
	�؈D:	���֮��������
	����:	200000202
*/

var status = -1;

var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 1) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0){
		var chat = "�gӭ���R��Ո����ʲ�NҪ������ģ�ֻ����� #v5150053:##v5151035:#  �Ϳ��������҂��Č��I���գ����N��׌�ҽo��Q���������N�ӣ�\r\n#b";
		chat += "\r\n#L0##v5150053:##t5150053#";
		chat += "\r\n#L1##v5151035:##t5151035#";
		cm.sendSimple(chat);
		}
	if (status == 1){
		if (selection == 0){
			var hair = cm.getPlayerStat("HAIR");
			hair_Colo_new = [];
			beauty = 1;

		if (cm.getPlayerStat("GENDER") == 0) {
			hair_Colo_new = [30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290];
		} else {
			hair_Colo_new = [31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290];
			}
			for (var i = 0; i < hair_Colo_new.length; i++) {
			hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
			}
			cm.sendYesNo("�����ʹ��#v5150053:#�����ԭò���ܕ�׃��һ���S�C����������߀����ʹ���N��");
			}
		if (selection == 1) {
			var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
			hair_Colo_new = [];
			beauty = 2;

			for (var i = 0; i < 8; i++) {
			hair_Colo_new[i] = currenthaircolo + i;
			}
			cm.sendYesNo("�����ʹ��#v5151035:#�����ԭò���ܕ�׃��һ���S�C����������߀����ʹ���N��");
			}
			}
	if (status == 2){
		if (beauty == 1){
		if (cm.setRandomAvatar(5150053, hair_Colo_new) == 1) {
			cm.sendOk("�������µĿ�ʼ��!");
		} else {
			cm.sendOk("�š���������]���҂�ָ���ă���ȯ�������]�����Ҳ��ܽo��������Һܱ�Ǹ��");
			}
		} else {
			if (cm.setRandomAvatar(5151035, hair_Colo_new) == 1) {
			cm.sendOk("�������µĿ�ʼ��!");
		} else {
			cm.sendOk("�š���������]���҂�ָ���ă���ȯ�������]�����Ҳ��ܽo��������Һܱ�Ǹ��");
			}
			}
			cm.dispose();
}
}