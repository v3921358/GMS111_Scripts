/*
	����:	������
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
			hair_Colo_new = [30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590];
		} else {
			hair_Colo_new = [31510, 31520, 31450, 31540, 31550, 31560, 31570, 31580, 31590];
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