/*
	����:	���׶�
	�؈D:	ȼ�յ���ľ��6
	����:	272000600
*/

function start() {
	if (cm.isQuestFinished(31177)) {
		cm.sendSimple('�s�����Ǽs���� ֻҪ����⣬�Ҿ���׌��׃���#r��#k�� ���N�ӣ�\r\n\r\n#L1##b׌��׃������ɡ�#l');
	} else {
		cm.sendOk("����F�ڵ��������ҕ��r���ܽo���ṩ������#k");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(200090520, 0);
		cm.useItem(2210016);   //����
		}
	cm.dispose();
}
