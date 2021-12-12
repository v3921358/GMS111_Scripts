/*
	名字:	The Mayor of Disaster
	地圖:	被破坏的新叶城
	描述:	600000000
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendNext("出大事了！#b#m600000000##k刚发生了一场强震！建筑变成废墟，平地变成沟壑。我都快认不出这座我一手创造的城市了！我倒是想雇个地震学家研究下是什么情况，但预算实在是不够。你好像对这方面颇有研究。能帮我这个忙吗？");
    } else if (status == 1) {
	qm.sendNext("我就知道你会答应我！来#b#m600000000##k跟我碰头吧。");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.dispose();
    }
}
