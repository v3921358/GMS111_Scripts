/*
	����:	����
	�؈D:	�˻���������ɽ
	����:	931000000
*/

var status = -1;

function action(mode, type, selection) {
	status++;
	if (status == 0)
		cm.sendNext("�����đС���Ͱ��������@���ɡ� ���Ǟ�ʲ�N��׽�Բأ� ׌�҂����c��ġ�����");
	if (status == 1) {
		cm.sendPrev("�қ]���@�N�f������");
		cm.dispose();
}
}