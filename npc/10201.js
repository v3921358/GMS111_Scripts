/*
	����:	��˹
	�؈D:	ѡ��֮��·
	����:	1020000
*/

function start() {
	cm.sendYesNo("ħ��������ʹ���A��Ч��������ħ�����K�����ڽM꠴�C��ʹ�÷ǳ����õ��o��ħ����2�D��W��������ħ�����Խo�෴���ݵĔ��������Ă���Ŷ��#b���뿴���̳��N��#k");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���뿴��ħ�����̵̳�Ԓ��Ո�ف����Ұɣ�");
	} else {
		cm.MovieClipIntroUI(true);
		cm.warp(1020200, 0); // Effect/Direction3.img/magician/Scene00
		}
	cm.dispose();
}
