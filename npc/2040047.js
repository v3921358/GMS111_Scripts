/*
	����:	ʿ�������ǵ�˹
	�؈D:	��������&amp;lt;��1�׶�&gt;
	����:	922010100
*/

function start() {
	cm.sendYesNo("�����ȥ�� �����㱻���Լ����ˡ�");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("����܈Գֵ���������؄e���");
	} else {
		cm.removeAll(4001022);
		cm.removeAll(4001023);
		cm.warp(221023300,0);
		}
	cm.dispose();
}