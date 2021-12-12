/*
	名字:	崔斯坦的继承人
	地圖:	崔斯坦的坟墓
	描述:	105100101
*/

var status = -1;

function start(mode, type, selection) {
		qm.forceStartQuest();
		qm.dispose();
	
}

function end(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
                                qm.sendNext("我相信是你的话一定能够做到！");
	} else if (status == 1) {	   	
                                qm.sendNextPrev("继承我的遗志，好好奋斗下去！");		
	} else if (status == 2) {		
		qm.forceCompleteQuest();
                                qm.gainItem(1142079,1);
		qm.dispose();
	}
}
	
