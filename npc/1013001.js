/*
	����:	��
	�؈D:	���е�ɭ��
	����:	900010200
*/

function start() {
	cm.sendAcceptDecline("�K��ҵ��ˣ��������s�˗l�����ˡ���������Լ��������");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���ң���t�@һ�Ќ����������с�");
	} else {
		cm.warp(100030100,0);
		}
	cm.dispose();
}
