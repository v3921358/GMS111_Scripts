/*
	����:	������ʿ���ս�
	�؈D:	ʥ��
	����:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("#b#h0##k�� һ�D�����ѽ��ȼ��@�N���ˣ������J�������ˡ� �΄պ���Ҳ����˲��١������X������ȫ���Y�񅢼�#b�Tʿ�ȼ���ԇ#k�ˡ� ���N�ӣ� �F������ԓ���ޟ��Tʿꅼ�����ʽ�Tʿ�ˡ� ���f�أ�");
	if (status == 1)
		qm.sendPrev("������녢���Tʿ�ȼ���ԇ�������S�r���}�ء� �����Tʿ�F�L������������M�Мyԇ������ϸ񣬾͕����������ʽ�Tʿ�� ��Ҋ����");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}