/*
	����:	������������
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("��֪���᣿ 60������������������D���^�m����Ŭ���۷e SP�������K�o��ʹ���� 3�D���ܡ��ţ��mȻ�����f #p1201001#һ��Ҫ�����D ... ��ֻ���f�@�Ӷ��ѡ��o����������");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�ޟ�����Σ� �š���60���ˡ����mȻ߀���������^���𮔳����㄂�ı����Y�ڳ�����ǂ���BҪǿ�ٱ��ˡ� ���@����ȥ���ܿ�����ܻ֏͏�ǰ�Č����ˡ�");
	if (status == 1)
		qm.sendAcceptDecline("���@֮ǰ��Ո�؁�#m140000000#һ�ˡ�#b��đ��ֳ��F����ֵķ����� �ƺ���ʲ�N����Ҫ�����f�Ę��ӡ�#k�f�������Mһ��������������أ��s�o�؁�һ�۰ɡ�");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}