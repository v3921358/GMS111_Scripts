/*
	����:	ϯ��
	�؈D:	�˼���������ɽ
	����:	931000020
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status--;
	if (status == 0){
	if (cm.getMapId() == 931000020) {
		cm.sendNext("�ߡ� ��С�ӣ�đ�ҽo�����ܣ�");
	} else {
		cm.dispose();
		}
		}
	if (status == 1)
		cm.sendNextPrevS("#b���� ���l�F�ˣ�");
	if (status == 2)
		cm.sendNextPrev("��Ҫ�����˿�Ͷ���ɡ� �������Ҫȥ���e���ף� �����ǂ�С�ӣ��㲻�ǌ����� ����ʲ�N�� ���f���ˣ�");
	if (status == 3)
		cm.sendNextPrevS("#b���N�ӣ� ���ǰ�� �˹̹�ľ���");
	if (status == 4)
		cm.sendNextPrev("��С���^�����f�ˎ״ν��ゃ��Ҫ�����Vɽ�� �����ǰɣ� �����񡭛]�k��������׌��ص����f�y�f���P����ҵ����顣 Ҫ����ץ����");
	if (status == 5)
		cm.sendNextPrevS("#bʲ�N�� �l�fҪ�ԹԵؽo��ץ��");
	if (status == 6)
		cm.sendNextPrev("��֪�ô���������ԇ̏���ʲ�N�r�᣿");
	if (status == 7)
		cm.sendNextPrevS("#b��ԓ���N�k�� ������A����#k");
	if (status == 8)
		cm.sendNextPrev("��Ҫ���h���Y÷���o������ǿ�Č�򞡣 �������ԹԵ�Ͷ���ɣ�");
	if (status == 9)
		cm.sendNextPrev("ס�֣�", 2159010);
	if (status == 10){
		cm.dispose();
		cm.warp(931000021, 1);
}
}