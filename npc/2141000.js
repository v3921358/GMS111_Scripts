/*
	����:	����
	�؈D:	��Ļƻ�
	����:	270050100
*/

function start() {
	cm.sendAcceptDecline("�������һ���������R�ӣ����N�ҾͿ��������ن����׎��ˣ� \r\n�ȴ������c�����ţ���ʲ�N���׎��]�б��ن����ȵȣ��@��ʲ�N�������Ҹ��X���������ͺ��׎���ȫ��ͬ��!!!!! \r\n\r\n #b(��һ�b�ַ���Kryston�ļ���ϡ�)");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.removeNpc(270050100, 2141000);
		cm.forceStartReactor(270050100, 2709000);
		}
	cm.dispose();
}