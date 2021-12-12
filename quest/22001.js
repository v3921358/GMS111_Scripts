/*
	名字:	喂猎犬
	地圖:	前院
	描述:	100030102
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("一大早就笑了半天。哈哈哈。對了不要再說奇怪的話了，快點拿早餐給 #p1013102#。");
	if (status == 1)
		qm.sendNextPrevS("#b咦？那不是 #p1013101#要做的工作嗎？");
	if (status == 2)
		qm.sendAcceptDecline("這個傢伙！居然這樣叫哥哥！你又不是不知道 #p1013102#有多討厭我。靠近的話一定會咬我。獵犬喜歡你，你拿去啦。");
	if (status == 3){
		if (!qm.haveItem(4032447))
		qm.gainItem(4032447, 1);
		qm.sendNext("快點到#b左邊#k去把飼料#v4032447:##k拿給#b#p1013102##k再回來。那隻狗從剛剛開始汪汪叫，可能是肚子餓了。");
		}
	if (status == 4)
		qm.sendOk("把飼料拿給#p1013102#吃完就快點回來，我還有事情要和你說。");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}