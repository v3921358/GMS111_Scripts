/*
	����:	��Լ
	�؈D:	��߳�������
	����:	220000004
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
		var chat = "�gӭ���R��Ո����ʲ�NҪ������ģ�ֻ����� #v5150052:##v5151036:#  �Ϳ��������҂��Č��I���գ����N��׌�ҽo��Q���������N�ӣ�\r\n#b";
		chat += "\r\n#L0##v5150052:##t5150052#";
		chat += "\r\n#L1##v5151036:##t5151036#";
		cm.sendSimple(chat);
		}
	if (status == 1){
		if (selection == 0){
			var hair = cm.getPlayerStat("HAIR");
			hair_Colo_new = [];
			beauty = 1;

		if (cm.getPlayerStat("GENDER") == 0) {
			hair_Colo_new = [30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370];
		} else {
			hair_Colo_new = [31300, 31310, 31320, 31330, 31340, 31350, 31360];
			}
			for (var i = 0; i < hair_Colo_new.length; i++) {
			hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
			}
			cm.askAvatar("���|�ķ�����׌�����µĸ�׃����׌��õ������һ�У���.", hair_Colo_new);
			}
		if (selection == 1) {
			var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
			hair_Colo_new = [];

			beauty = 2;
			for (var i = 0; i < 8; i++) {
			hair_Colo_new[i] = currenthaircolo + i;
			}
			cm.askAvatar("���|�ķ�����׌�����µĸ�׃����׌��õ������һ�У�", hair_Colo_new);
			}
			}
	if (status == 2){
		if (beauty == 1){
		if (cm.setAvatar(5150052, hair_Colo_new[selection]) == 1) {
			cm.sendOk("���ģ��������µ��_ʼ�ɣ�");
		} else {
			cm.sendOk("...��������]���@���ط��ă���ȯ���ܱ�Ǹ�@�N�f�����Ǜ]�Ѓ���ȯ����͛]���������g�ˡ���");
			}
		} else {
		if (cm.setAvatar(5151036, hair_Colo_new[selection]) == 1) {
			cm.sendOk("���ģ��������µ��_ʼ�ɣ�");
		} else {
			cm.sendOk("...��������]���@���ط��ă���ȯ���ܱ�Ǹ�@�N�f�����Ǜ]�Ѓ���ȯ����͛]���������g�ˡ���");
			}
			}
			cm.dispose();
}
}