/*
	����:	���³
	�؈D:	ѡ��֮��·
	����:	1020000
*/

function start() {
	cm.sendYesNo("�w�b�����\���һЩ���ݼ��������ڑ����п���ͻ�u���˻���ʹ���[������⼼�ܡ��w�b���зǳ����ݵ��ƄӼ��رܣ��������Ķ��ӻ����ܿ��Գ�����ܲ����Ę�Ȥ��#b���뿴���̳��N��#k");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���뿴���w�b�̵̳�Ԓ��Ո�ف����Ұɣ�");
	} else {
		cm.MovieClipIntroUI(true);
		cm.warp(1020400, 0); // Effect/Direction3.img/rouge/Scene00
		}
	cm.dispose();
}
