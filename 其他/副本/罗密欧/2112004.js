/*
	����:	����ŷ
	�؈D:	���������
	����:	261000011
*/

function start() {
	if (cm.getMapId() == 926100000) { //inside orbis pq
		cm.sendOk("�ܸ��x�������ң������҂�Ҫ�ҵ��M�댍��ҵ���ڣ��D���^�Y��̎�y�ѷŵĕ���Ҳ�S����ʲ�N�l�FҲ�f������");
		cm.dispose();
		return;
		}
	if (cm.getMapId() == 926100001) { //inside orbis pq
		cm.sendOk("�ۼ����@�e�Ĺ��������҂�ǰ�M�ĵ�·��׌�҂���������@Щ���Ȼ���^�mǰ�M��");
		cm.dispose();
		return;
		}
	if (cm.getMapId() == 926100100) { //inside orbis pq
		cm.sendOk("�@��һ������ħ���ķ��g���҂�����ޏͺ���Щ������©�������ƽY�磬�����_����һ��ͨ����");
		cm.dispose();
		return;
		}
	if (cm.getMapId() == 926100300) { //inside orbis pq
		cm.sendOk("���� Ҋ���˵��������ڌ���ҵ��Ϸ����҂������˱��Ҫ���_����ҵ�픶ˡ�");
		cm.dispose();
		return;
		}
	if (cm.getMapId() == 926100400) { //inside orbis pq
		cm.sendOk("Ո��һЩ��ϣ���r�g߀��ü����҂�Ҫ��ȥ�Ⱦ��ҵĐ��ˣ������~����ǰ����ǂ����g�Y��");
		cm.dispose();
		return;
		}
	if (cm.getMapId() == 926100401) { //inside orbis pq
		cm.warpParty(926100500); //urete
		cm.dispose();
		return;
		}
		var chat = "#e<�M��΄գ��_�ܚW�c�����~>#n \r\n�����R���c�����F���nͻ���������c�����~������Ҋ���Һܓ����ҵĐ��ˣ����@�����������h�o����ͣ��ȥ��һ��Ҫ�ҵ������@һ�еķ�����\r\n\r\n 2 Party Members, all level#r 10 and level 70 \r\n#b";
		chat += "\r\n#L0#�M���΄յ؈D";
		cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("�ܱ�Ǹ���e��Ĺ����Σ�U���Ҳ���׌��Ϊ�ȥð�U�������������@��΄գ�Ո���V���ĽM�L�c��ՄԒ��");
		} else {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 200) {
				next = false;
				break;
				}
			size += (ccPlayer.isGM() ? 4 : 1);
				}
		if (next && size >= 2) {
			var em = cm.getEventManager("Romeo");
			if (em == null) {
				cm.sendOk("�_���e�`��Ո������ԇ��");
			} else {
				var prop = em.getProperty("state");
				if (prop.equals("0") || prop == null) {
				em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
			} else {
				cm.sendOk("�΄����ڈ����У�Ո�Lԇ�����l����");
				}
				}
			} else {
				cm.sendOk("2 Party Members, all level#r 70 and level 200");
				}
				}
				}
			cm.dispose();
}