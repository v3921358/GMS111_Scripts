/*
	����:	�����ķ�ŭ
	�؈D:	��ʿ����
	����:	102000000
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
		qm.sendAcceptDecline("���N����Ҳ�����Ï�����׃��zˎ��һ����");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainItem(4033056, -1);
		qm.spawnMonster(100004,3);//�ٻ�����
		qm.sendNextPrev("#b(������ؐ���F�ˣ�)#k ѽ�� �@��ʲ�N�� ��ѽѽѽ������");
		}
	if (status == 2)
		qm.sendOk("���N���԰��@Щ���ɶY���ͽo�˼��أ� �ҷǳ��ǳ����¹�����ؐ�ģ����� С�r���⵽�޴󹽹���ؐ���u������һ��ʧ�����ء� ̫�^���ˣ� �y����#b#p1022100##k�ǹ����@�����Ć᣿ ������#b#p1020000##k����?���� ������������");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.dispose();
}
}
