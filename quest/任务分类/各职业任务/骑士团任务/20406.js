/*
	����:	��ʧ����ʿ
	�؈D:	ʥ��
	����:	130000000
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
		qm.sendNextS("(�v���ˌ���#b#p1103000##k���l����һ�н��^)",3);
	if (status == 1)
		qm.sendNextPrev("��������@�ӵĆ᣿ #b#p1103000##k�����^�m�����ọ́� �ǲ����ܣ��ڴ�֮ǰ�����Mһ����ӖʾҪ��Ԕ���f���΄յ��Mչ�������");
	if (status == 2)
		qm.sendAcceptDecline("���в��õ�Ԥ�У��F����췵��#b#m924010000##k������ϸ̽���£��������������ķ�����������e��ě]�������|�����ٴλ�����档\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 100000 exp");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(100000);
		qm.dispose();
}
}