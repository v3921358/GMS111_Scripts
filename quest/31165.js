/*
	����:	[ʮ������]л����������
	�؈D:	��ħʮ�����žݵ�
	����:	931050500
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�@�����ǂ��ѿp���� ���i�ĕr�g���ˡ� �������ա��r���T���r�g�����ѿp��");
	if (status == 1)
		qm.sendNextPrev("��Ԓ�f���뻢Ѩ���ɵû��ӡ� Ҫ����_���еĆ��}�����ֱ���M���ѿp�Ȳ���");
	if (status == 2)
		qm.sendAcceptDecline("#b�����#k��#b�x����#k�ѽ��ڞ����΄����ʂ��ˡ� �����È������΄յĜʂ��ˆ᣿");
	if (status == 3)
		qm.sendPrev("Ո�_�Jһ���ѿp�e����ʲ�N�|���� ������ѿp�Y�����˰������ա��������]ʲ�N�� Ոͨ�^��߅�Ă��Ϳ��Mȥ�� Ոǧ�fС�ġ�");
	if (status == 4){
		qm.forceStartQuest();
		qm.forceStartQuest(31181,"1");
		qm.dispose();
}
}