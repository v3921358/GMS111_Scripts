/*
	名字:	保护苏阿尔
	地圖:	人迹罕至的公园
	描述:	931000440
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("周圍好像太安靜了……是有人打算襲擊我嗎？ 哎呀……竟然想偷襲我這個老頭。 黑色之翼的那些人還真是卑鄙……不過你是誰？ 我不會被這種事情嚇到的！");
	if (status == 1)
		qm.sendNextPrevS("#b（#p2152010#的膽子好像很大，看上去好像一點都不害怕。）#k");
	if (status == 2)
		qm.sendNextPrev("因為有你在，看來他們是不會輕易露面的了。 他們好像對你很戒備……真是的……看來我們得設個局，讓他們現身才行。 你說呢？");
	if (status == 3)
		qm.sendNextPrevS("#b我沒關係，不過你呢？ 他們的目標可是你啊。# k");
	if (status == 4)
		qm.sendAcceptDecline("哼，我老人家會被那些東西嚇到嗎？ 別擔心。 反正有你保護我，我幹嘛害怕？ 你好像是反抗者中間很有潜力的人。 好了，我往更僻靜的地方走一點，讓黑色之翼出來。");
	if (status == 5){
		qm.forceStartQuest();
		qm.playerMessage(5, '保护苏阿尔不受冲过来的黑色之翼的伤害。在规定时间内不能让苏阿尔倒下！');
		qm.playerMessage(-1, '击退黑色之翼，保护苏阿尔！');	
		qm.warp(931000441);
		qm.dispose();
}
}
