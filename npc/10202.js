/*
	����:	��������
	�؈D:	ѡ��֮��·
	����:	1020000
*/

function start() {
	cm.sendYesNo("��ʿ���к�ǿ�Ĺ��������w��������ڑ��Y��̎춷ǳ���Ҫ�ĵ�λ��������������ǿ�����ԌW���߼����ܵ�Ԓ���԰l�]��ǿ��������#b���뿴���̳��N��#k");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���뿴����ʿ�̵̳�Ԓ��Ո�ف����Ұɣ�");
	} else {
		cm.MovieClipIntroUI(true);
		cm.warp(1020100, 0); // Effect/Direction3.img/swordman/Scene00
		}
	cm.dispose();
}
