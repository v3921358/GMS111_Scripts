/*
	����:	�ڶ����鱨�ռ����
	�؈D:	ħ������
	����:	101000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.sendOk("��߀�ڪqԥЩʲ�N���ǂ�����һ�������ɷ�������@����r����o#b#p1002104##k��");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("Ŷ���@�κ����һ�c����������{��Ҫ��֮ǰ�����װɣ�#b#p1032112##k�f��Щʲ�N��");
	if (status == 1)
		qm.sendNextPrevS("#b���Ұ� ���ă����D�_�o��#p1032101#����#k");
	if (status == 2)
		qm.sendNextPrev("������ż��С�� ���ò����ˑ��ɡ� һ������׌���׃�Ú����ġ�");
	if (status == 3)
		qm.sendNextPrev("#m101000000#�؅^�ĺ�ƽ�ѽ������ơ��������@�N���н^��������ˡ�������������ҵ����Ѵ������һ��Ҫ���С�ġ�");
	if (status == 4)
		qm.sendAcceptDecline("#b�����׃�Ã�����ԭ���ҵ��ˡ��F�ڰ��L�����������V#p1002104#�ɡ���#k");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}