/*
	����:	Ư����ʿ
	�؈D:	���ִ�����Ժ
	����:	100000103
*/

var status = -1;

var facetype;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("�gӭ���R��Ո����ʲ�NҪ������ģ��������� #b#v5152057:##t5152057##k, �Ϳ��������҂��Č��I����!");
	if (status == 1) {
		var face = cm.getPlayerStat("FACE");

		if (cm.getPlayerStat("GENDER") == 0) {
			facetype = [20014, 20016, 20018, 20021, 20023, 20026, 20030, 20036, 20044, 20046, 20053, 20057];
		} else {
			facetype = [21011, 21018, 21021, 21025, 21027, 21031, 21034, 21042, 21045, 21053, 21058];
			}
			for (var i = 0; i < facetype.length; i++) {
			facetype[i] = facetype[i] + face % 1000 - (face % 100);
			}
			cm.askAvatar("���|�ķ�����׌�����µĸ�׃#v5152057:# ����׌��õ������һ�У���", facetype);
			}
	if (status == 2) {
		if (cm.setAvatar(5152057, facetype[selection]) == 1) {
			cm.sendOk("�������µ��_ʼ�ɣ�");
		} else {
		cm.sendOk("��������]���@���ط��ă���ȯ���ܱ�Ǹ�@�N�f�����Ǜ]�Ѓ���ȯ����͛]���������g�ˡ�");
		}
	cm.dispose();
}
}