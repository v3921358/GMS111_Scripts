/*
	����:	������������ɻ�
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
		qm.sendNext("ι�����ˣ��㲻�X�����c��ֆ᣿ �������ĺ�ɫ֮����΄ա����кܶ����֮̎�� ��߀�Ԟ��#o9001028#���Ͻ�ȳ�#t4000144#�Ǽ������ء�");
	if (status == 1)
		qm.sendNextPrevS("#b�]�б�Ҫ������ǂ��|�����ڴ����Y�����ɣ� ���ұ����#m922030010#ǰ����_���������c��֡� ���Ҫ׌���ؚw���ɵ�Ԓ����ʲ�N�ط����ߑ�ԓ��һ�Ӱ���");
	if (status == 2)
		qm.sendNextPrev("�ţ��ų�ȥ֮�ᣬ�� ���l�����ڰl���᣿ �f������վ������˷��K�� ���ɣ� �l���ǉ��ˆ᣿");
	if (status == 3)
		qm.sendNextPrevS("#b����#o9300390#��ʧ�ĕr���f��Ԓ����̫����ˡ� �f�҂���С͵�����mȻ�����˹�����ҵ����e���X�ܲ����ܡ�");
	if (status == 4)
		qm.sendNextPrev("�mȻ�ǂ�����#p1013203#�����׌�҂���Ҫ���⣬���������ȥ߀���X�ú���֡� �@�ε����������ʲ�N���¡� ���X���أ����ˣ�");
	if (status == 5)
		qm.sendPrev("���к�ɫ֮��ĈF�w�������ǂ����܈F�w��һ���[����ĳ�N�҂���֪�������飬���ɣ� �mȻ�Ҳ���ȥ���ɡ�����߀���X�úܿ��ɡ�\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 30000 exp");
	if (status == 6){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(30000);
		qm.dispose();
}
}