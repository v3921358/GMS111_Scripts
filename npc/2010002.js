/*
	����:	������
	�؈D:	���֮����������
	����:	200000201
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
			hair_Colo_new = [20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019];
		} else {
			hair_Colo_new = [21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019];
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