/*
	����:	������������
	�؈D:	���
	����:	140000000
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
	if (qm.getQuestStatus(21301) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21301) == 1) {
		qm.sendNext("Ұ���fץ���ˆ᣿�ǺǺ�...��Ȼ���ҵ����ˣ��ܺã����N������� �t���񽻳����ҕ����·��ڱ��w��...��...����ʲ�N���ش�ԓ����...��ӛ���؁��˰�?");
		}
		}
	if (status == 1)
		qm.sendNextPrev("ʲ�N������ě]�û�#b#v4032312:##t4032312##k����ʲ�N��ԓ������������˰ɣ����������N���@��...���㱻��ħ�����{�䣬���^���@�N�ñ�ѩ��ӡ������ˣ�����֢����߀�]�����.....");
	if (status == 2)
		qm.sendNextPrev("���С����̫����Ԓ�ˡ��@���r���Ҹ���ԓ�������˴�����...����...����........");
	if (status == 3)
		qm.sendNextPrev("��ȥ����������С͵�ѽ������ˡ����N�������u�� �t����ɣ�֮ǰ�������^һ�Σ���֪�����ϰɣ��ðɣ����N��ȥ�L�����ϰ�.....");
	if (status == 4)
		qm.sendNextPrev("     #i4001173#");
	if (status == 5)
		qm.sendNextPrev("........�]�Љ�Ҳ�]��ϣ������������");
	if (status == 6)
		qm.sendPrevS("#b(�����_ʼ��l�����������x�@�e���f�����տ��ܿ��Ԏ���.)#k",3);
	if (status == 7){
		qm.forceCompleteQuest();
		qm.dispose();
}
}