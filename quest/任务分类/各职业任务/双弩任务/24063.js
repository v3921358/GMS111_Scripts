/*
	����:	���ɿ����ٻ�
	�؈D:	��ŷ��
	����:	101050000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("˫���飡˫���飡������㣡���ء���Ȼ��װ�ú�̹Ȼ������һֱ����������Ҳ���ܼ����ˣ�");
	if (status == 1)
		qm.sendNextPrevS("������û�°ɣ�#p1033101#��");
	if (status == 2)
		qm.sendNextPrev("�ǵģ�û�£���������ԣ������ű��κξ��鶼Ҫǿ׳����Ȼû������������ǰ����ʹ�ü��ܣ�����û�в�����ĵط���");
	if (status == 3)
		qm.sendNextPrevS("̫���ˡ���");
	if (status == 4)
		qm.sendPrev("��Ȼ�����ܰ��ɣ������������Ѿ�����������ʱ������磡���Ƕ�ô���Ƶ����鰡�����ۣ�~ �����ڿ�ʼ������#p1033101#���������ɣ�");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}