/*
	����:	аĦ˹
	�؈D:	��������
	����:	921120000
*/

function start() {
	var chat = "����Ҫ��ʲô��#b";
	chat += "\r\n#L0#�o��һƿ�ű���ˮ";
	chat += "\r\n#L1#����ȥ���Y���΄գ�";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (!cm.haveItem(4032649) && !cm.haveItem(2022698)) {
			cm.gainItem(4032649,1);
		} else {
			cm.sendOk("���Ѿ��б���ˮ�������ڶ�o�ˡ�");
			}
			break;
	case 1:
		cm.warp(921120705,0);
		}
	cm.dispose();
}