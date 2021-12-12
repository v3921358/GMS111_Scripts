/*
	名字:	What's Quaking
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
	qm.sendYesNo("首先，我们得弄明白是什么引起了这场地震！听我#b#m600000000##k的那些个蛋头伙计说，这地震可不是什么自然现象。我觉得你应该从这点着手开始调查。.");
    } else if (status == 1) {
	qm.sendNext("给，拿好这个叫…………#b#i2430680# #t2430680:##k…………玩意儿。造出它的哥们儿说你“能用它来找到地震的震中”什么的。就照他们说的去做吧。.");
    } else if (status == 2) {
	qm.forceStartQuest();
                qm.gainItem(2430680, 1);
                qm.forceCompleteQuest();
	qm.dispose();
    }
}

