/*
	名字:	第二次情报收集完成
	地圖:	魔法密林
	描述:	101000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.sendOk("你還在猶豫些什麼，那個孩子一定是嫌疑犯，快把這個情況彙報給#b#p1002104##k。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("哦，這次好像快一點了嘛……看來調查要比之前的容易吧？#b#p1032112##k說了些什麼？");
	if (status == 1)
		qm.sendNextPrevS("#b（我把聽到的內容轉達給了#p1032101#。）#k");
	if (status == 2)
		qm.sendNextPrev("拿著人偶的小傢伙？ 不得不叫人懷疑。 一定是他讓怪物們變得殘暴的。");
	if (status == 3)
		qm.sendNextPrev("#m101000000#地區的和平已經被打破…………這種惡行絕對不能饒恕…………看來我得提醒村民們最近一定要多加小心。");
	if (status == 4)
		qm.sendAcceptDecline("#b（怪物們變得兇暴的原因找到了。現在把蒐集到的情報告訴#p1002104#吧。）#k");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}