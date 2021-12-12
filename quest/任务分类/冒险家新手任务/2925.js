/*
	名字:	深海中抓到的奇怪生物
	地圖:	诺特勒斯内部
	描述:	120000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("這可是為了我們海盜啊。 你成為海盜的理由是什麼？");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("嗯… 實在是搞不懂啊。 ");
	if (status == 1)
		qm.sendNextPrev("不久前，出海之後捉來了奇怪的生物，卻不知道到底是什麼。 那傢伙渾身散發著奇妙的氣息，應該不是平凡之物。 為了進行調查進行攻擊，一下就會消失掉，實在沒什麼方法。 可能我的力量不適合…\r\n");
	if (status == 2)
		qm.sendAcceptDecline("對！ 你來試試怎麼樣？ 如果是你的話也許還真能行！ 如何？ 想不想試一下？");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}