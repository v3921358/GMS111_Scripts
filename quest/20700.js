/*
	����:	����������ȥ��
	�؈D:	ʥ��
	����:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("��ʲ�N�r��������R���Լ��ж�ܛ����");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��K���Ӗ���гɞ���һ���Tʿ�� �����R�Ͻo��һ���΄գ����㿴�����x�Լ�������΄�߀�кÎ�Ӣ���h�� ��_���������@��ȥ���y�u�᣿");
	if (status == 1)
		qm.sendNextPrev("ȥ��ȥ���y�u�������������һ����Ӗ���в����ڑ��Y������Լ����Tʿ�ܿ��ܕ��p���ʺ�oи�ɓ������� �����@���u�ϵ���ϯ���g�����Ҳ���׌�@�N�°l���� ��Ҫ��һֱӖ�������m�ĕr��");
	if (status == 2)
		qm.sendAcceptDecline("#p1102000#��Ӗ����������������Ӗ���ɞ�һ�����õ��Tʿ�� һ�����_��13�����ҕ��o�����һ�ɂ��΄ա� ��������֮ǰ���^�mӖ����");
	if (status == 3)
		qm.sendPrev("��֪��������#p1101001#ՄԒ�������o��ף����һ������������ó̡�");
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}