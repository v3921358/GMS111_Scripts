/*
	����:	��������ĵڶ�������
	�؈D:
	����:	����
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
		qm.sendNext("���ˣ����ˡ��@�ε�����Ҳ����ˆ᣿ �@�Ӿ��܎�����ð�U�u������ˆ᣿");
	if (status == 1)
		qm.sendNextPrevS("#b���罩�Ƶ�Ԓ��һ������#m211000000#�؅^�𵽎�����");
	if (status == 2)
		qm.sendNextPrev("�ٺ٣��ǆᡫ���������Խ��Խ�á� �����ǂ�#t4032471#��ʲ�N����");
	if (status == 3)
		qm.sendNextPrev("#b�@��� ��Ҳ��֪���� �����ǂ��ÈF�w����ԓ���Á���ʲ�N���µİɡ�");
	if (status == 4)
		qm.sendNextPrev("�ǆ᣿ �����ǂ��F�w��ʲ�NҪ�����Є��أ� �@�ӵ�Ԓ�����ĺ��e�˾Ͳ�����֪���˰���");
	if (status == 5)
		qm.sendNextPrevS("#b�����о�Ԓ�f������ʩ�ݣ���׌����֪�����᣿");
	if (status == 6)
		qm.sendNextPrev("���֣����֣� ����ʲ�N��˼�� ��Ҫ�������ֆ᣿");
	if (status == 7)
		qm.sendNextPrevS("#b�������������@����˼�������f�����²���ԓ��̎���P��ҪĬĬ������");
	if (status == 8)
		qm.sendNextPrev("�ţ� ��ϣ���e����֪���� �@������֡� ̫С��֔���ˡ� �mȻ������˼�����қ]�k����⡣ ���˿������᣿");
	if (status == 9)
		qm.sendPrevS("#b��Ҳ���Ǜ]���뵽����һ�����������⡣ ���^�������ӣ������Ǻ��¡� �І��}��Ԓ�����´νӵ��΄յĕr���ن��ɡ� ��������������ʲ�N�F�w��\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 50000 exp",3);
	if (status == 10){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(50000);
		qm.dispose();
}
}