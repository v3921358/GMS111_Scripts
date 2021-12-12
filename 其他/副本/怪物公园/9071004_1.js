/*
	名字:	门
	地圖:	怪物公园
	描述:	951000000
*/

var maps = Array(952000000, 952010000, 952020000, 952030000, 952040000);
var ticket = 4001514; //zebra stripe ticket

function start() {
	var chat = "#e<組隊任務：怪物公園>#n\r\n#r(Dungeons available for players Lv. 13-69)\r\n#b";
	chat += "\r\n#L0##m952000000# (Monsters Lv.20 - 30)";
	chat += "\r\n#L1##m952010000# (Monsters Lv.45 - 55)";
	chat += "\r\n#L2##m952020000# (Monsters Lv.50 - 60)";
	chat += "\r\n#L3##m952030000# (Monsters Lv.55 - 65)";
	chat += "\r\n#L4##m952040000# (Monsters Lv.60 - 70)";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	if (mode == 1) {
	if(cm.getParty() == null || !cm.isLeader()){
		cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險，如果妳想執行這項任務，請告訴妳的組長與我談話。");
		cm.dispose();
	}else{
		var party = cm.getParty().getMembers().iterator();
		var next = true;
		var cPlayer = party.next();
		if(cPlayer.getLevel() <13 || cPlayer.getLevel() >69 || cPlayer.getMapid() != cm.getMapId()){
		next = false;
		}
		}
		if(!next){
		cm.sendOk("All to   #v4001514:##b#t4001514##k ，2 Party Members, all level#r 13 and level 69");

		cm.dispose();
	}else{
		if(!cm.partyHasItem(ticket, 1)){
			cm.sendOk("All to   #v4001514:##b#t4001514##k\r\n\r\n#r" + cm.getPlayersMissingItem(ticket, 1) + " \r\n#kDoesn't have a Zebra Stripe Ticket."); 
			cm.dispose();
		}else{
			var em = cm.getEventManager("MonsterPark");
		if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null){
			cm.sendOk("任務正在執行中，請嘗試其它頻道。");
			cm.dispose();
		} else{
			cm.givePartyItems(ticket, -1);
			em.startInstance_Party("" + maps[selection], cm.getPlayer());
			}
			}
			}
			}
		cm.dispose();
}