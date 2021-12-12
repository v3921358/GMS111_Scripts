/*
	名字:	巴希里
	地圖:	南港
	描述:	2000000
*/

function start() {
	if (cm.getPlayerStat("LVL") <=7) {
		cm.sendOk("讓我看看... 我覺得你還不夠強壯，你至少要達到#b 7 level #k我才能讓你到金銀島囉。");
		cm.dispose();
	} else if (cm.haveItem(4031801)) {
		cm.sendYesNo("這艘船將前往金銀島，既然你有#b#v4031801:#推薦信#k，我不會收你任何的費用。坐好，旅途中可能會有點動盪！");		
	} else {
		cm.sendYesNo("搭上了這艘船，你可以前往更大的大陸冒險。 只要給我 #e150 楓幣#n，我會帶你去 #b金銀島#k。 不過，一旦離開了這裡，就不能再回來囉。 你想要去金銀島嗎？");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.haveItem(4031801)) {
		cm.gainItem(4031801, -1);
		cm.warp(2010000, 0);
	} else if (cm.getMeso() < 150) {
		cm.sendOk("什麼？你都沒帶楓幣，你說你想搭免費的船？ 你真是個怪人！");
	} else {
		cm.gainMeso(-150);
		cm.warp(2010000, 0);
		}
		}
	cm.dispose();
}
