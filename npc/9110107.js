/*
	����:	Palakeen
	�؈D:	Zipangu - Mushroom Shrine
	����:	800040000
*/

function start() {
	if (cm.getMapId() == 800000000) {
		cm.sendYesNo("�҂������m�ϵĳ��d��~�����Դ���ȥ�ѻ������߳Ǳ�~����һգ�۾͵��ˣ�Ŷ���@���������X�ġ����쌦�ҁ��f�ǂ������ӣ������Ҿ�׌�����M��܇�ɣ��F�ڣ��@����׌����X�ܺÆ᣿�������ӣ��҂��߰ɣ�");
	} else {
		cm.sendYesNo("Ŷ��ʲ�N���@�����Nһ���£������ȥ�᣿");
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("ʲ�N�� �㲻�������@���� ����߀�к��҂���ʲ�N��");
		}
	if (mode == 1) {
		if (cm.getMapId() == 800000000) {
			cm.warp(800040000);
		} else {
			cm.warp(800000000);
			}
			}
		cm.dispose();
}