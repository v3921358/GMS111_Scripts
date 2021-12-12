/*
	名字:	神兽的眼泪
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你從#b變身术士#k那裡帶回的寶石是神鳥的眼淚。這是它力量的結晶。如果黑巫師掌握了這一點，那麼對我們所有人來說都是厄運。");
	if (status == 1)
		qm.sendAcceptDecline("為了表彰你在防止潜在的嚴重災難方面所做出的努力，#b#p1101000##k賜予你一個新的骑士頭銜。 你做好接受的準備了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142068#  #t1142068#");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(1111);
		qm.gainItem(4032179,-1);
		qm.gainItem(4032101,-1);
		qm.gainItem(1142068,1);
		qm.sendOk("從現在起，你就是#b高级骑士#k。天鹅座騎士團的高级骑士。請你永遠捍衛著這份榮耀， 願你的以后的人生都能像現在一樣璀璨。");
		}
	if (status == 3){
		qm.dispose();
}
}