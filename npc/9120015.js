/*
	����:	��ľ
	�؈D:	�Ѻʹ�
	����:	801000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
	} else { 
	if (mode == 1)
	status++;
	if (status == 0)
		cm.sendSimple ("��������@�e�õ�Щʲ�N��\r #L0##b�ռ�һЩ�P춲���̎���YӍ.#l\r\n#L1#����ȥ����̎#l\r\n#L2#�]��ʲ�N#l#k");
	if (status == 1) {
		if (selection == 0)
			cm.sendOk("��F����̎�����e����Щ���韩�ı�ͽ��Ҫ�M���ǰ��������Ҫ���ǂ����ͣ���tֻ����·һ�l�����ǂ��^���в���BOSS�������ҪҊ����KĿ�ˣ������Ҫ�ȏ�Ů��������õ�#v4000138:##b#t4000138##k���������š�");
		if (selection == 1)
			cm.sendOk("��_����߂��@�ӵ�������ɵ���кܶ�N���]Ҋ�^�����@�Ӳ������ģ���������Ҫȥ����Ҳ�������Ղ����[�����������������難��������e�õ�#v4000141:##b#t4000141##k���Ҿ�����Ĳ�܇С�ܣ�");
		if (selection == 2)
			cm.sendOk("���ǂ���æ�ˣ���׌��һ���˴����ɣ�");
		if (selection != 1) {
			cm.dispose();
			}
			}
	if (status == 2) {
		cm.warp(801040000, 0);
		cm.dispose();
}
}
}