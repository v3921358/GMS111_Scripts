/*
	����:	�ǵ��ҵ���
	�؈D:	����̩Ӫ��
	����:	300000000
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
	if (qm.getQuestStatus(21750) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21750) == 1) {
		qm.sendNext("����#b#h0##k������ �@���ҵĻ��X�᣿ �����㡭�����߀�����᣿ �������x���x�ء���");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("�����ţ�������˼���Ҳ�ӛ������");
	if (status == 2)
		qm.sendNextPrev("�����ţ� ���fʲ�N��#b#h0##k�� �㡭������#b#h0##k�᣿ ���o�҂���Ӣ�ۣ�#b#h0##k�����ǲ�������᣿");
	if (status == 3)
		qm.sendNextPrevS("#b��Ԕ���f���с�֮����������#k");
	if (status == 4)
		qm.sendNextPrev("����ԭ����ˡ� ԭ����ʧȥ��ӛ�����K���ڎװ���������������^�� �@�N�f���@�e������ԑ�ԓ���^ȥ�����硭��");
	if (status == 5)
		qm.sendNextPrev("�����ҵ����������B���ҵ�������#p2131000#��#b����ĵ�����#p2131000##k�� �ׂ���ǰ�����ںͺ�ħ�����đ��Y�Р������҂��t���˳�����");
	if (status == 6)
		qm.sendNextPrev("�������ס��ħ�����ĕr���҂������wͧ�ӵ��˽��y�u�� �����ܵ������Ĺ������]�ܵ��_�ϲ���ƽԭ�������Ƚ������@�e��");
	if (status == 7)
		qm.sendNextPrev("�����҂����ܾʹ˷��������҂�������@�e������ һ߅���B��Ϣ��һ߅�ʂ佨���µĴ��f��");
	if (status == 8)
		qm.sendNextPrev("�����_���ğo�˟��Ľ��y�u��һ��������ꂃȫ��������ȥ�ˡ� ���Դ��eֻʣ���܂����ˣ��Լ��DŮ�ͺ��ӡ�");
	if (status == 9)
		qm.sendPrev("#b#h0##k�����ʲ�NҪ���@�e���أ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20000 exp");
	if (status == 10){
		qm.forceCompleteQuest();
		qm.gainExp(20000);
		qm.dispose();
}
}