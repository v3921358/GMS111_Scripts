/*
	����:	����
	�؈D:	ѡ��֮��·
	����:	1020000
*/

function start() {
	cm.sendYesNo("���I�{������ݼ������o�c���˰l��ٰl���еĶ̘����߿���ʹ��˲�g�Ƽs���˵ĸ��Y�g��ʹ�ö̘��ĺ��I�����x�������ӏ�����Ч�ع������˻������ڴ��Ϲ������ˣ�ʹ��ȭ�ף�ָ�����ĺ��I����׃����l�]��ǿ��������#b���뿴���̳��N��#k");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("���뿴�����I�̵̳�Ԓ��Ո�ف����Ұɣ�");
	} else {
		cm.MovieClipIntroUI(true);
		cm.warp(1020500, 0); // Effect/Direction3.img/pirate/Scene00
		}
	cm.dispose();
}
