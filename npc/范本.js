/*
	����: 	��ס�����	
	�؈D: 	�������
	����: 	106021400	
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	}
	status--;
    }
    if (status == 0) {
	               cm.sendSimple("��ʲô����\r\n\r\n#b#L1#��ɫѩ����#l\r\n#L2#�Y��Y��#l\r\n#L3#�Y��Y��#l");
    } else if (status == 1) {
	if (selection == 1) {
	  if (cm.getPlayerCount(106021500) == 0) {
                               cm.warpParty(106021500);
	    } else {
	               cm.sendNext("�΄����ڈ����У�Ո�Lԇ�����l��.");
    }
	} else if (selection == 2) {
                               cm.warp(106021401,0);
	} else if (selection == 3) {
	  if (cm.getPlayerCount(106021500) == 0) {
                               cm.warpParty(106021500);
	    } else {
	               cm.sendNext("�΄����ڈ����У�Ո�Lԇ�����l��.");
                          }
                 }
	cm.dispose();
       }
}