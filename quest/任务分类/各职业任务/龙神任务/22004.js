/*
	名字:	修理篱笆
	地圖:	农场中心
	描述:	100030300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("嗯……#p1013101#的話，應該就能幫我了。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("最近農場上的#o1210100#有點奇怪。經常無緣無故地發脾氣，做出一些煩人的事情來。我對此很擔心，所以今天很早就出來了。果然有一只#o1210100#鑽出了籬笆，逃到了外面去了。");
	if (status == 1)
		qm.sendAcceptDecline("在找到#o1210100#之前，必須先把壞的籬笆修好。還好壞的不是太嚴重，只要有幾個#b#v4032498:##t4032498##k應該就能修好了。小不點，要是你能幫我搜集#b3個#t4032498##k就好了……");
	if (status == 2)
		qm.sendPrev("哦，真是謝謝你。#b#t4032498##k可以從周圍的#r#o0130100##k身上收集到。它們雖然不是很強，但不小心的話，可能會遇到危險。你一定要好好使用技能道具。");
	if (status == 3){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/6/0", 1);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("哦，#b#v4032498:##t4032498##k搜集到了嗎？真了不起。我應該給你什麼作為獎勵呢……對了，我有那個東西。");
	if (status == 1)
		qm.sendPrev("好了，我用修理籬笆剩下的木板做了一把椅子。雖然不太好看，但卻很結實。就給你用吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010097# #t3010097#1個 \r\n#i2022621# #t2022621# 15個\r\n#i2022622# #t2022622# 15個 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 210 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.evanTutorial("UI/tutorial/evan/7/0", 1);
		qm.gainItem(4032498, -3);
		qm.gainItem(3010097, 1);
		qm.gainItem(2022621, 15);
		qm.gainItem(2022622, 15);
		qm.gainExp(210);
		qm.dispose();
}
}