/*
	名字:	前往崔斯坦的坟墓
	地圖:	寺院地下
	描述:	105100100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
                                qm.sendNext("在旁边的洞穴里住着个#b#p1061015##k,你可以去向他问问情况。");	
	} else if (status == 1) {
		qm.forceStartQuest();
		qm.dispose();
	}
}
