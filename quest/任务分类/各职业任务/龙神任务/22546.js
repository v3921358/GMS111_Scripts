/*
	����:	�������������(��)
	�؈D:	��ڵش�
	����:	102020400
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(22546) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(22546) == 1) {
		qm.sendNext("Ŷ����K춁������� #p1032104#��ʿ�f���������Ǳ�����������ڽ��y�u���D��һ��Ȧ�� �mȻ�@�N���߀�؁�����������Ҳһ�������࣬�ҾͲ���Ӌ�^�ˡ� ���ڕ��e���ҵ���Ҫ��֪�R�ˆ᣿ ����֪��ʲ�N�أ�");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b����t��һ�¬��������");
	if (status == 2)
		qm.sendNextPrev("������� ��Ҳ���^�Ǳ���������������ѽ���^�ˆ᣿ �����M�����P���о��᣿ �]�뵽�㾹Ȼ�о��@�N����ČW���� �ðɣ��ҕ��M�ҵ������������ġ�");
	if (status == 3)
		qm.sendNextPrev("�mȻ#m101000003#�кܶ��P����ĕ������P춬������ֻ���@һ���� ��#m101000003#������֮�ᣬ�ҕ�֪ͨ��ġ�");
	if (status == 4)
		qm.sendNextPrev("߀�У��ҵ�����֮�У��Ђ�����#b#p2081000##k���ˣ����ǹ����֣�����#m240000000#�̷����ķN�塣 �ҕ����������P����������飬����Ϣ��Ԓ���ҕ����V��ġ�");
	if (status == 5)
		qm.sendNextPrev("���������������L����ɫ͸�����[Ƭ�ͽ�ɫ�Ľǡ� �������Ľ��mȻ�ǽ�ɫ�ģ����[Ƭ�s���Ǻ�ɫ�ġ����š���");
	if (status == 6)
		qm.sendNextPrevS("#b#b�������#p1013000#�l�F������Ԓ��Ҳ�S�����������������������������档");
	if (status == 7)
		qm.sendPrev("���ϣ��ҵĶ��䡣֪���ˡ�˭˵�������ˣ��ǵģ���Ӧ�������桭���ţ����������\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 10000 exp");
	if (status == 8){
		qm.forceCompleteQuest();
		qm.gainExp(10000);
		qm.dispose();
}
}