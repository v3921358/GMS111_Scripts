/*
	名字:	门
	地圖:	怪物公园
	描述:	951000000
*/

var maps = Array(954000000, 954010000, 954020000, 954030000, 954040000, 954050000);
var ticket = 4001522; //tiger stripe ticket

function start() {
	var chat = "#e<組隊任務：怪物公園>#n \r\n#r(Dungeons available for players Lv. 120+)\r\n#b";
	chat += "\r\n#L0##m954000000# (Monsters Lv.120 - 130)";
	chat += "\r\n#L1##m954010000# (Monsters Lv.125 - 135)";
	chat += "\r\n#L2##m954020000# (Monsters Lv.130 - 140)";
	chat += "\r\n#L3##m954030000# (Monsters Lv.140 - 150)";
	chat += "\r\n#L4##m954040000# (Monsters Lv.150 - 165)";
	chat += "\r\n#L5##m954050000# (Monsters Lv.165 - 175)";
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
		if(cPlayer.getLevel() <120 || cPlayer.getLevel() >200 || cPlayer.getMapid() != cm.getMapId()){
		next = false;
		}
		}
		if(!next){
		cm.sendOk("All to   #v4001522:##b#t4001522##k ，2 Party Members, all level#r 120 and level 200");

		cm.dispose();
	}else{
		if(!cm.partyHasItem(ticket, 1)){
			cm.sendOk("All to   #v4001522:##b#t4001522##k\r\n\r\n#r" + cm.getPlayersMissingItem(ticket, 1) + " \r\n#kDoesn't have a Tiger Stripe Ticket.");
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