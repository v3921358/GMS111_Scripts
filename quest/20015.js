/*
	名字:	向年轻女王行礼
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("我知道你猶豫了，但是我可以看到你的勇氣，還沒有迸發出來…");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你知道嗎？ 冒險島世界看起來很和平，但是在某些地方卻充滿了黑暗的力量。 暗黑魔法師，那些即將要復活的暗黑魔法師正威脅著冒險島世界！");
	if (status == 1)
		qm.sendNextPrev("我們不能在這裡坐以待斃，我們的敵人越來越強壯。 我們需要更加强大！");
	if (status == 2)
		qm.sendAcceptDecline("但是我不會太擔心，#b#h0##k，確定你能保護冒險島世界嗎？ 如果你相信自己能成為冒險島騎士團，我相信你可以做到這一切！");
	if (status == 3)
		qm.sendPrev("#p1101002#，我的謀劃師，他就在我的旁邊，他會幫助你成為一名冒險島騎士。 希望你成功！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142065# 1 #t1142065#");
	if (status == 4){
		qm.forceStartQuest();
		qm.gainItem(1142065, 1);
		qm.dispose();
}
}