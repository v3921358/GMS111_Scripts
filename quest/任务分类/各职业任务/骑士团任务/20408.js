/*
	����:	Ů�ʵ���ʿ��
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
		qm.sendNext("#h0#������ ���ȣ����x���ĳ�ɫ������ ��������㣬�ҡ����� �Ҍ��o���[Ó�����ŵ��{�䡣 �ǳ����x�㡣");
	if (status == 1)
		qm.sendNextPrev("����]�����������Ԓ���@һ�B�����¼�׌һ����׃�÷ǳ���������ѽ�Ͷ���˟o����С�r��Ŭ���������Լ�����������Tʿ����ؕ�I��");
	if (status == 2)
		qm.sendAcceptDecline("���ˑcף������ڹ����ͳɾ͡����� ����o��һ���µ��^㕣��K�ٴ�ף���㡣 ��������@���᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142069#   #t1142069#");
	if (status == 3){
		if (!qm.canHold(1142069, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.changeJob(qm.getJob() + 1);
		qm.gainItem(1142069, 1);
		qm.sendOk("�����¸ҵ��c�ڷ������Y���Ҍ��ĬF�����������������Tʿ�F������ϯ�Tʿ�� Ո���ǵ�ʹ�����ę����͙������������o���~����Ĺ���");
		}
	if (status == 4){
		qm.dispose();
}
}