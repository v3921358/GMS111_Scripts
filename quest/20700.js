/*
	名字:	可以这样出去吗？
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("你什麼時候才能意識到自己有多軟弱。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你終於在訓練中成為了一名騎士。 我想馬上給你一個任務，但你看起來離自己能完成任務還有好幾英里遠。 你確定你能像這樣去金銀島嗎？");
	if (status == 1)
		qm.sendNextPrev("去不去金銀島由你决定，但是一個在訓練中不能在戰鬥中照顧自己的騎士很可能會損害皇后無懈可擊的名聲。 作為這個島上的首席戰術師，我不能讓這種事發生。 我要你一直訓練到合適的時候。");
	if (status == 2)
		qm.sendAcceptDecline("#p1102000#，訓練導師，將幫助你訓練成為一個有用的騎士。 一旦你達到13級，我會給你分配一兩個任務。 所以在那之前，繼續訓練。");
	if (status == 3)
		qm.sendPrev("你知道如果你和#p1101001#談話，她會給你祝福，一定會幫助你的旅程。");
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}