/*
	����:	���￨
	�؈D:	�˻���������ɽ
	����:	931000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (status == 0)
		cm.sendNext("�t��������#b#h0##k�� ���^���@�e��");
	if (status == 1)
		cm.sendNextPrev("��ʲ�N�@�N���� ֮ǰ���Ǿ��f��Ҫ���@�e���ˆᣡ �����Ǻ����˰ɣ�",2159002);
	if (status == 2)
		cm.sendNextPrevS("#b�қ]�к��¡�");
	if (status == 3)
		cm.sendNextPrev("��Ć᣿ �Һú���Ŷ�����˼҂������о����f��Ҫ��Vɽ�@�e�档 ��#r��ɫ֮��ĉ��˂�#k�����@�e��",2159000);
	if (status == 4)
		cm.sendNextPrev("���ԲŹ�����_�Oҕ�߁��@�e�İ��� ���ǵģ�đС����",2159002);
	if (status == 5)
		cm.sendNextPrev("���ǡ����R���N�k��",2159000);
	if (status == 6)
		cm.sendNextPrev("���ѽ����@�e�ˣ�߀�����N�k�� �����������R�������ٻ�ȥ�ɣ��҂�����׽�Բأ�");
	if (status == 7)
		cm.sendNextPrevS("#b�ף� ׽�Բأ�");
	if (status == 8)
		cm.sendNextPrev("�����ɡ�",2159002);
	if (status == 9)
		cm.sendPrev("ʲ�N���ɣ� ���@�e߀������ʲ�N�� �f��  ���� ߀���㮔��#b#h0##k�� ������t���˰��� �������N�҂�Ҫ����Ŷ������ʮ���_ʼ�ң�");
	if (status == 10){
		cm.warp(931000001, 1);
		cm.dispose();
}
}