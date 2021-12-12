/*
	名字:	越过城墙2
	地圖:	蘑菇森林小道
	描述:	106020000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("是嗎？ 嗯，有哪種奇怪尖銳的樹啊？ 如果不是那個的話，請你再去尋找看看。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("雖說可以打破結界，但我的心裡仍然不踏實。我們菇菇王國的城堡想從外部進入是絕對不可能的，想要潛入不是件容易的事情。嗯。請你先去城堡週邊偵察一下好嗎？");
	if (status == 1)
		qm.sendPrev("如經過菇菇森林，在#b#m106020400##k往西邊走，就會看見#b#m106020500##k了。 調查就拜託你了。");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
	