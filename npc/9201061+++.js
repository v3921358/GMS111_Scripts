/*
	����:	�����
	�؈D:	��Ҷ�� ��������
	����:	600000001
*/

var status = -1;

var hair_Colo_new;

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
	return;
	} else {
	status++;
	}

	if (status == 0) {
		cm.sendNext("�gӭ���R��Ո����ʲ�NҪ������ģ��������� #i" + 5152035 + "# , �Ϳ��������҂��Č��I����!���N��׌�ҽo��Q���������N�ӣ�");
	} else if (status == 1) {
		cm.sendYesNo("If you use the regular coupon, you'll be awarded a random pair of cosmetic lenses. Are you going to use #b#t5152035##k and really make the change to your eyes?");
	} else if (status == 2){
		hair_Colo_new = [];

		var teye = cm.getPlayerStat("FACE") % 100;

		if (cm.getPlayerStat("GENDER") == 0) {
			teye += 20000;
		} else {
			teye += 21000;
			}
			hair_Colo_new[0] = teye + 100;
			hair_Colo_new[1] = teye + 200;
			hair_Colo_new[2] = teye + 300;
			hair_Colo_new[3] = teye + 400;
			hair_Colo_new[4] = teye + 500;
			hair_Colo_new[5] = teye + 600;
			hair_Colo_new[6] = teye + 700;

			if (cm.setRandomAvatar(5152035, hair_Colo_new) == 1) {
				cm.sendOk("�������µĿ�ʼ��!");
			} else {
				cm.sendOk("�š���������]���҂�ָ���ă���ȯ�������]�����Ҳ��ܽo��������Һܱ�Ǹ����");
				}
			cm.dispose();
}
}