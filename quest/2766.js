/*
	����:	��ϲ�Ĳ���1
	�؈D:	�޴����
	����:	101030000
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
		qm.sendNext("�õģ�׌�҂��M����һ��ޟ�~���� ���ŵ��ޟ��mȻֻ�ǟ����\�ӣ�������Č�����ԓ�ѽ������һЩ~���� ������Ҫ�y��һ���������ǆᡫ����");
	if (status == 1)
		qm.sendAcceptDecline("���衫�����ĬF���_ʼ����Ҫ��������#r#o9100015##k~���� �̈́��Ō�����#o2230100#����ͬ�ն��Z~���� �ҕ������͵��������ڵĵط�ȥ����ȥ����30����Ȼ��؁�����~���� ���������ᡫ����");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(910100110);
		qm.dispose();
}
}