/*
	����:	��Ƥ֮��2
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
		qm.sendNext("���ˣ��㿴�� �@�γ��L֮�ᣬ�ҵ������׺��ѽ������ˡ�");
	if (status == 1)
		qm.sendNextPrevS("#b�ţ�����ȥ�͸��X���К�ݡ� �@���Ǭ���������������᣿");
	if (status == 2)
		qm.sendNextPrev("�@�Ǭ������������ͬ�rҲ�����˵������� �����ֻ�������s��׃ǿ�ĕr��ŕ����L�� Ҳ�����f��������Ҳͬ�ӳ��L�ˡ�");
	if (status == 3)
		qm.sendNextPrevS("#b��Ȼ������F��Խ��Խ���fԒ�ˣ�#p1013000#");
	if (status == 4)
		qm.sendNextPrev("�Ǻǣ��Ǯ�Ȼ�� ���@�N���ŵ�������̫�p���Ԓ���M��������Ц�������� �������ˣ����ϴ�һ�ӣ��@��͑Ƥ֮����������һ�K�[Ƭ�� �e�溬�б���ǰ��ǿ�����������둪ԓ���������������� ������!!");
	if (status == 5)
		qm.sendPrev("#b�mȻ���������������ܵ�����Ĺ����������f�����ǉK�[Ƭ���Ա��o���� �������׃ǿ����Ҳ��׃�ø���ǿ�󡭡��҂�һ��ǿ������ɣ�����!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142157# 1 #t1142157# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30000 exp");
	if (status == 6){
		if(!qm.canHold(1142157, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142157, 1);
		qm.dispose();
}
}