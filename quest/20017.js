/*
	����:	Ϊ�˳�Ϊ��ʿ�ĵ�һ��ѵ��
	�؈D:	����ɭ��1
	����:	130010000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�ţ� ��#b#p1101002##k�����^���Ć᣿ ������ �����@�����Ć᣿ �ܸ��d�J�R�㡣 �ܸ��d�J�R�㣡 �ҵ�������#b#p1102000##k�� �ǌ��T�����@�N�F����TʿӖ������ �š������N�@�N�����ҡ�����������ǵ�һ��Ҋ���Ƽs�ɡ�");
	if (status == 1)
		qm.sendNextPrev("�҂��N�屻�Q��Ƽs�� ���Ů����߅��#p1101001#�f�^Ԓ�᣿ �Ƽs�Ǻ�#p1101001#һ�ӵķN�塣 �mȻ��ϵ��Щ��ͬ����ࡣ �҂�ֻ�������}�أ��mȻ����Щİ�������ܿ�͕���Ϥ�ġ�");
	if (status == 2)
		qm.sendNextPrev("��������S֪���ɣ� ���@�}�ظ��������ڹ�� ����а�������Ĵ����ǟo�������}�صġ� ���^��Ҫ���ġ� Ӗ������#p1101001#������Ļ������ａë�B���錦����M�еġ� ���N�_ʼӖ���᣿");
	if (status == 3)
		qm.sendAcceptDecline("�\�Ú��˰ɣ� ���N������Č������㑪ԓ���Բ��C���е���ǿһ�c�Ľ�ë�B�� ���C��#b#m130010100##k��15ֻ#b#o0100122##kԓ�㹻�˰ɣ� ���N�ӣ� �ܸ㶨#o0100122#�᣿");
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}