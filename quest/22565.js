  /*
	����:	���ܷ���
	�؈D:
	����:	����
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�ҵ�ͬ�嶼��ʧ�ˆᣬ���ˣ� һ�����]ʣ�᣿ ��ֻ����һ���� �װ���ǰ���ǂ�а�����˞�ʲ�NҪ�����ҵ�ͬ���أ� ��ʲ�Nֻ�����������أ� ��ʲ�N����֪��������");
	if (status == 1)
		qm.sendNextPrevS("#b#p1013000#����");
	if (status == 2)
		qm.sendAcceptDecline("���^���ҽ^���������� �ҿ��ǈԏ����������� �f������Щ�ҵ�ͬ��Ҳ����һ�ӻ���ĳ̎�� ��һ��Ҫ�ҵ��ҵ�ͬ�塣 ������ҵİɣ�\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 20966 exp");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(20966);
		qm.dispose();
}
}