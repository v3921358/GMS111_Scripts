/*
	����:	���ִĵ�����1
	�؈D:	ѵ����
	����:	120000105
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("߀�]���Üʂ�᣿ �㲻���Ǻ����˰ɣ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("Ӗ��Ҫ�_���Ĳ��Ǿ����п������õ�һ���⣬�����M�п��ڌ�����ʹ�õČ������ڵ�Ӗ���� ���ý��ܵ�һ��Ӗ��������ʂ��ˆ᣿");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}