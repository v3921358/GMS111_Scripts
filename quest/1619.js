/*
	����:	[ʮ������]ʱ��ֹ֮ͣ����ǲ
	�؈D:	��ħʮ�����žݵ�
	����:	931050500
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
		qm.sendAcceptDecline("����΄վ��ǰl�F��ð�U�u�����̎�ĕr���T�����ࡣ �F�ھ���ʽ�_ʼ��ħʮ���ÈF���΄Ն᣿");
	if (status == 1)
		qm.sendPrev("���ȣ�Ո��ȥ�{��#b��߳Ǖr�g���#k�؅^���F�ĕr���T�ɡ� ��֮ǰ��ȥ��#b����#k���ڵ��㡣 ���f���{���^#r#m220040200##k�����ԑ�ԓ�������e�� ");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}