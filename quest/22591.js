/*
	名字:	过去，玛瑙龙和黑魔法师
	地圖:	寂静的洞穴
	描述:	914100021
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
		qm.sendNext("幾百年前……冒險島世界還有很多瑪瑙龍……還有很多喜愛瑪瑙龍的人……我們和你的朋友弗裡德希望這兩個不同的種族可以一同生活下去。");
	if (status == 1)
		qm.sendNextPrev("瑪瑙龍擁有强大的力量，但卻有著不完整的靈魂……而人類的力量雖然很弱，但卻擁有强大的意志……我們把兩個種族的意志結合了起來，誕生了龍神……我們希望通過這種管道讓人類和瑪瑙龍共存。");
	if (status == 2)
		qm.sendNextPrev("但是這種希望被#r黑魔法師#k打破了。");
	if (status == 3)
		qm.sendNextPrevS("#b（黑魔法師？！黑色之翼說為了冒險島的和平而想復活的人，不就是黑魔法師嗎！？）");
	if (status == 4)
		qm.sendAcceptDecline("與其慢慢跟你說，我想還是讓你親眼看到會更快一些……#b我會把你送進我的記憶之中#k。 把你送進我記憶的一個片段，幾百年前和黑魔法師戰鬥之前，弗裡德和我對話時的那段記憶……");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(900030000, 0);
		qm.dispose();
}
}
