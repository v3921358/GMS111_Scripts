/*
	����:	������
	�؈D:	ѡ��֮��·
	����:	1020000
*/

function start() {
	cm.sendYesNo("���֓��и����ݼ��������ڑ��Y��ؓ؟�h���x���������繭���I��������\�õ؄ݵ�Ԓ����C���Ƿǳ��p󠅖����#b���뿴���̳��N��#k");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���뿴�����̵ֽ̳�Ԓ��Ո�ف����Ұɣ�");
	} else {
		cm.MovieClipIntroUI(true);
		cm.warp(1020300, 0); // Effect/Direction3.img/archer/Scene00
		}
	cm.dispose();
}
