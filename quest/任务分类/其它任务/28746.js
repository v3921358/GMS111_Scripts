/*
	����:	����Ӻζ�����
	�؈D:	��Ҷ��
	����:	600000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���ȣ��҂���Ū������ʲ�N�������@������  ��#b#m600000000##k����Щ�����^�Ӌ�f���@����ɲ���ʲ�N��Ȼ�F�� ���X���㑪ԓ���@�c�����_ʼ�{�顣 ");
	if (status == 1)
		qm.sendAcceptDecline("�o���ú��@���С�������#b#i2430680# #t2430680:##k�����������⃺�� ������ĸ炃���f�㡰���������ҵ���������С�ʲ�N�ġ� ���������f��ȥ���ɡ�");
	if (status == 2){
		qm.forceStartQuest();
		if (!qm.haveItem(2430680)) qm.gainItem(2430680, 1);
		qm.dispose();
}
}