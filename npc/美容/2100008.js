/*
	����:	�˵���
	�؈D:	���ﰲ��
	����:	260000000
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
			facetype = [20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049];
		} else {
			facetype = [21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049];
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