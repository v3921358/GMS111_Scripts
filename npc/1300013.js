/*
	����:	��ס�����
	�؈D:	�������
	����:	106021400
*/

function start() {
	cm.sendSimple("����ί���^���Ӣ�ۆ᣿\r\n\r\n#b#L0#��ɫѩ����#l\r\n#L1#�Y��Y��#l");
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (cm.getPlayerCount(106021500) == 0) {
			cm.warpParty(106021500);
		} else {
			cm.sendOk("�΄����ڈ����У�Ո�Lԇ�����l����");
			}
			break;
	case 1:
		cm.warp(106021401,1);
		}
	cm.dispose();
}