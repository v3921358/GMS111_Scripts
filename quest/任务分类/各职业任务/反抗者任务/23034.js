/*
	����:	�ƻ�����װ��
	�؈D:	�����߱���
	����:	310010000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23034) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23034) == 1) {
		qm.sendNext("���#o9001032#�Ɖĵ����� �Ǻǣ���Ȼ���������ϣ� �ҵ��۹�ā��]���e�� ��֪����һ������������ �@��һ���҂������������F�󕺕r�Ϳ��Ծ����ˡ� ����Ğ��҂��������˴󹦣�");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("��������_�����@���̶ȣ��ҾͿ��Է��ĵ�׌���M����һ�A�ε��n���ˡ� �mȻ�����˄��ң��f߀��Σ�U��������������һ�������������y����һ�����Գɞ��ǿ�ı����[�b��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142244#   #t1142244#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(3311);
		qm.gainItem(1142244,1);
		qm.sendNext("�F�����ѽ�������ǰ�����ˡ� ��ǿ�����졢���A���ļ������猢��չ�F������ǰ�� ʹ������Ҳ�ܲ����ף����ǡ�������ʲ�N�ú��µ��أ� ���B���NΣ�U���΄ն�����ˡ� ");
		}
	if (status == 3)
		qm.sendOk("׌�҂��´��n����Ҋ�ɡ�\n\n����֮ǰ��ϣ�������Է����ߵ���ݣ��^�mŬ���� ");
	if (status == 4){
		qm.dispose();
}
}
