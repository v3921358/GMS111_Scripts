/*
	����:	��
	�؈D:	�����
	����:	104000000
*/

function start() {
	if (cm.isQuestFinished(22574)) {
		cm.sendOk("��Ҫȥ˯���u�᣿ �҂��F�ھͿ��Գ��l��");
	} else {
		cm.sendOk("�]��ʲ�N���Ƚ�����m�ϳ���������");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.warp(200090080,0);
	cm.dispose();
}