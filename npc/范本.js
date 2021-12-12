/*
	名字: 	堵住的入口	
	地圖: 	东侧城塔
	描述: 	106021400	
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
	               cm.sendSimple("有什么事吗？\r\n\r\n#b#L1#三色雪人王#l\r\n#L2#結婚禮堂#l\r\n#L3#結婚禮堂#l");
    } else if (status == 1) {
	if (selection == 1) {
	  if (cm.getPlayerCount(106021500) == 0) {
                               cm.warpParty(106021500);
	    } else {
	               cm.sendNext("任務正在執行中，請嘗試其它頻道.");
    }
	} else if (selection == 2) {
                               cm.warp(106021401,0);
	} else if (selection == 3) {
	  if (cm.getPlayerCount(106021500) == 0) {
                               cm.warpParty(106021500);
	    } else {
	               cm.sendNext("任務正在執行中，請嘗試其它頻道.");
                          }
                 }
	cm.dispose();
       }
}