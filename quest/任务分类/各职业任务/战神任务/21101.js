/*
	名字:	使用战斧的英雄
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.sendOkS("#b(再慎重的考慮一下）#k",3);
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNextS("#b(摸了一下#p1201001#。奇怪的是應該是冰冷的矛，卻感覺異常的溫暖。好像想起了以前的記憶。)#k",3);
	if (status == 1)
		qm.sendNextPrevS("#b(…使用矛的英雄是個以強大的力量和體力為基礎，擅長使用各種技能，擅長近戰的戰士…)#k");
	if (status == 2)
		qm.sendNextPrevS("#b(…因為擁有高力量，且還有少量的敏捷，所以單純以力量是揮不動的…)#k。");
	if (status == 3)
		qm.sendYesNoS("#b(這是我的記憶還是英雄同伴的記憶…為了確認還是在摸一下#p1201001#吧)#k",3);
	if (status == 4)
		qm.sendPrevS("#b(難道我能確信我是那使用矛的英雄嗎？慎重考慮後，要是可以確定就再摸一次#p1201001#吧)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142129#  #t1142129#",3);
	if (status == 5){
		if(!qm.canHold(1142129, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(2100);
		qm.resetStats(35,4,4,4);
		qm.gainItem(1142129,1);
		qm.warp(914090100);
		qm.dispose();
}
}