/*
	����:	������������
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("�y����5�b̫���ˆ᣿Ҫ�Ǟ����ޟ����������b��Ԓ�����ǲ��������ġ��mȻ���c��ʹ�����Ǟ���Ӣ�۵��ޟ��@���Ҿͱ�һ�b���]һ�b�۰ɡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�ã��Ǿ��_ʼ�z�һ������w���ɡ������ܺ��Σ�ȥ�����@�u���������Ĺ���#b#o0100134##k�Ϳ��ԣ����҂�����50�b��Ԓ�ٺò��^�ˡ�");
	if (status == 1)
		qm.sendAcceptDecline("���ǰћ]�Ў��b��#o0100134#ȫ���������Ԓ�������B�h��Ҳ�ǲ��õ����Ծͳ���5�b�ɡ���h������Ȼ������ޟ���������������");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}