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
	if (qm.getQuestStatus(23035) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23035) == 1) {
		qm.sendNext("��ɹ����Ɖ���#o9001032#�� ��]�й�ؓ�Ҍ�����ڴ�������ķǳ����x�� �@�ӵ�Ԓ���҂������������F��͕���һ���̶ȵľ��⡣ ���@����Ğ��҂������˴󹦣�");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("���H�۴_�J������������F��݆��������չ�F�ҵ������ˡ� �ҕ����µļ��܂��ڽo�㡣 ���ܵ��쾚�Ȳ��ߵ�Ԓ�������o��ʹ�á� �ұ������^һ�Εr�g�ٸ��V�㡭�����^�F�ڵ����ѽ������˳�ֵ�������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142244#   #t1142244#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(3511);
		qm.gainItem(1142244,1);
		qm.sendNext("�F�����ѽ������Ǐ�ǰ�����ˡ� �����ӡ����}�s����ǿ��ļ��܌���׌��׃�������� ������̫�y�� Ո�e���ġ� �㑪ԓ��ȫ������ʹ�ã��������������N�y���΄ա�");
		}
	if (status == 3)
		qm.sendOk("׌�҂��´��n����Ҋ�ɡ�\n\n����֮ǰ��ϣ�������Է����ߵ���ݣ��^�mŬ����");
	if (status == 4){
		qm.dispose();
}
}
