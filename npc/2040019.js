/*
	����:	����
	�؈D:	��߳�����ҽԺ
	����:	220000003
*/

var status = -1;

var beauty = 0;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1 || status == 2) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("�gӭ���R��Ո����ʲ�NҪ������ģ��������� #b#v5152056:##t5152056##k, �ҕ��S�C����������׃��");
	if (status == 1)
		cm.sendYesNo("�����ʹ��#v5152056:#�����ԭò���ܕ�׃��һ���S�C����������߀����ʹ���N��");
	if (status == 2){
		var face = cm.getPlayerStat("FACE");
		var facetype;

		if (cm.getPlayerStat("GENDER") == 0) {
			facetype = [20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029];
		} else {
			facetype = [21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029];
			}
			for (var i = 0; i < facetype.length; i++) {
			facetype[i] = facetype[i] + face % 1000 - (face % 100);
			}

		if (cm.setRandomAvatar(5152056, facetype) == 1) {
			cm.sendOk("�������µ��_ʼ�ɣ�");
		} else {
			cm.sendOk("����������]���@������ȯ���ܱ�Ǹ�@�N�f���ҾͲ��܎������������g�ˡ�");
			}
		cm.dispose();
}
}