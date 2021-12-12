/*
	����:	��
	�؈D:	���﹫԰
	����:	951000000
*/

var maps = Array(953000000, 953010000, 953020000, 953030000, 953040000, 953050000);
var ticket = 4001516; //leopard stripe ticket

function start() {
	var chat = "#e<�M��΄գ����﹫�@>#n \r\n#r(Dungeons available for players Lv. 70-119)\r\n#b";
	chat += "\r\n#L0##m953000000# (Monsters Lv.70 - 80)";
	chat += "\r\n#L1##m953010000# (Monsters Lv.75 - 85)";
	chat += "\r\n#L2##m953020000# (Monsters Lv.85 - 95)";
	chat += "\r\n#L3##m953030000# (Monsters Lv.95 - 105)";
	chat += "\r\n#L4##m953040000# (Monsters Lv.100 - 110)";
	chat += "\r\n#L5##m953050000# (Monsters Lv.110 - 120)";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	if (mode == 1) {
	if(cm.getParty() == null || !cm.isLeader()){
		cm.sendOk("�ܱ�Ǹ���e��Ĺ����Σ�U���Ҳ���׌��Ϊ�ȥð�U�������������@��΄գ�Ո���V���ĽM�L�c��ՄԒ��");
		cm.dispose();
	}else{
		var party = cm.getParty().getMembers().iterator();
		var next = true;
		var cPlayer = party.next();
		if(cPlayer.getLevel() <70 || cPlayer.getLevel() >119 || cPlayer.getMapid() != cm.getMapId()){
		next = false;
		}
		}
		if(!next){
		cm.sendOk("All to   #v4001516:##b#t4001516##k ��2 Party Members, all level#r 70 and level 119");

		cm.dispose();
	}else{
		if(!cm.partyHasItem(ticket, 1)){
			cm.sendOk("All to   #v4001516:##b#t4001516##k\r\n\r\n#r" + cm.getPlayersMissingItem(ticket, 1) + " \r\n#kDoesn't have a Zebra Stripe Ticket."); 
			cm.dispose();
		}else{
			var em = cm.getEventManager("MonsterPark");
			if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null){
				cm.sendOk("�΄����ڈ����У�Ո�Lԇ�����l����");
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