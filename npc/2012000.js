/*
	名字:	桑艺
	地圖:	天空之城售票处
	描述:	200000100
*/

var status = 0;

var cost = 5000;
var TICKET_TO_ELLINIA = 4031047;
var ticket = [4031047, 4031074, 4031331, 4031576];
var cost = [5000, 6000, 30000, 6000];

var mapNames = ["金银岛", "玩具城", "神木村", "阿里安特"];
var mapName2 = ["Ellinia of Victoria Island", "Ludibrium", "Leafre of Minar Forest", "Nihal Desert"];
var select;

function start() {
	var where = "您好，我負責銷售每個目的地的乘船票。 你想買哪張票?";
	for (var i = 0; i < ticket.length; i++)
	where += "\r\n#L" + i + "##b" + mapNames[i] + "#k#l";
	cm.sendSimple(where);
}

function action(mode, type, selection) {
	if (mode < 1) {
	cm.dispose();
	} else {
	status++;
	if (status == 1) {
		select = selection;
		cm.sendYesNo("The ride to " + mapName2[select] + " takes off every " + (select == 0 ? 15 : 10) + " minutes, beginning on the hour, and it'll cost you #b" + cost[select] + " mesos#k. Are you sure you want to purchase #b#t" + ticket[select] + "##k?");
		}
	if (status == 2) {
		if (cm.getMeso() < cost[select] || !cm.canHold(ticket[select]))
		cm.sendOk("Are you sure you have #b" + cost[select] + " mesos#k? If so, then I urge you to check you etc. inventory, and see if it's full or not.");
	else {
		cm.gainMeso(-cost[select]);
		cm.gainItem(ticket[select], 1);
		cm.sendOk("You recived #b#t" + ticket[select] + "##k")
		}
	cm.dispose();
}
}
}