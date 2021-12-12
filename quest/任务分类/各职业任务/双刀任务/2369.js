/*
	名字:	暗影双刀 - 达克鲁的日记
	地圖:	雪姬的房间
	描述:	103050101
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(2369) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(2369) == 1) {
		qm.sendNext("#v4032617:#这是父親的日記，没想到你居然把它拿回来拉，这让我想起了以前的事情，我遇见我父亲的那一天……我当时被怪物们团团围住，是他救了我，还把我收为女儿。");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("我是越来越喜欢你， 以你现在的能力，应该有资格晋升到刀鋒侍從的職位上，你是否愿意接受？");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(431);
		qm.gainItem(4032617, -1);
		qm.gainItem(1052244, 1);
		qm.sendOk("你现在已经是刀鋒侍從了，我希望你也能拥有一颗善良的心……！");
		}
	if (status == 3){
		qm.dispose();
}
}