/*
	����:	����
	�؈D:	�˻���������ɽ
	����:	931000000
*/

var status = -1;

function action(mode, type, selection) {
	status++;
	if (status == 0)
		cm.sendNext("�Һܸ��d���܁� ���X���҂����Oҕ�ˡ����� �҂���ԓ���]��ȥ�᣿");
	if (status == 1) {
		cm.sendPrev("�����N�@�NđС�� �҂�һ·�߁� �҂���ȥ֮ǰ���ّ�ԓ���cʲ�N��", 2159002);
		cm.dispose();
}
}