/*
	����:	���ű�˹
	�؈D:	��පѨ��
	����:	211042200
*/

function start() {
	if (cm.getPlayer().getMapId() == 211042400) {
		cm.openNpc(2030013,"2030013_1");
			return;
			}
	if (cm.getPlayer().getMapId() == 211042401) {
		cm.openNpc(2030013,"2030013_2");
			return;
			}
	var chat = "#e<̽�U������>#n #b";
	chat += "\r\n#L0#����";
	chat += "\r\n#L1#���缙��";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		cm.warp(211042300,0);
		break;
	case 1:
		cm.warp(211042301,0);
			}
		cm.dispose();
}
