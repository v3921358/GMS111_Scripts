/*
	����:	����
	�؈D:	���ﰲ��
	����:	260000000
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
		var chat = "�٣�����ɳ�٣����Ǭ�Ɲ���ČWͽ��Ո����ʲ�NҪ������ģ�ֻ����� #v5150053:##v5151035:#  �Ϳ��������҂��Č��I���գ����N��׌�ҽo��Q���������N�ӣ�\r\n#b";
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
			hair_Colo_new = [30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590];
		} else {
			hair_Colo_new = [31510, 31520, 31450, 31540, 31550, 31560, 31570, 31580, 31590];
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