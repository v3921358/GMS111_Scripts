/*
	����:	С����
	�؈D:	�Ѻ��������
	����:	801000002
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
			facetype = [20004, 20007, 20011, 20013, 20024, 20027, 20036, 20040, 20044, 20046, 20047, 20052];
		} else {
			facetype = [21003, 21014, 21016, 21021, 21023, 21026, 21033, 21035, 21042, 21045, 21048, 21054];
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