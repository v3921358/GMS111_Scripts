/*
	����:	�տ���ţ
	�؈D:	����
	����:	120000103
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("��֪�����䌍һ�c����æ�� ����ϣ��������Щţ�I�����Ӱɣ� �����䵭������..");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��F�ں�æ�᣿ �����æ���ܲ��܎���һ��æ�� �����e��ţ����ԓ��ĕr���ˣ�������һֱæ���ʂ�������ӛ�ˡ�\r\n");
	if (status == 1)
		qm.sendAcceptDecline("������С��ţ��ʳ���ǳ��ã��R�Ͼ͕��I�ġ� ���F�ڲ��o�����Եģ�Ҳ�S��׃�÷ǳ����ء� \r\n���N�ӣ� �����ȥ�Lԇһ�᣿");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}