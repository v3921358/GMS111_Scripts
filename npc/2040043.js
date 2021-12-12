/*
	����:	��������
	�؈D:	��������&amp;lt;��5�׶�&gt;
	����:	922010800
*/

var status = -1;

var partyLdr;
var chatState;
var party;
var preamble;

var stage8question = Array("9*9+100-143=?", "3*8+10=?");
var stage8answer = Array(Array(0, 0, 1, 0, 0, 0, 0, 1, 0), Array(0, 0, 1, 1, 0, 0, 0, 0, 0));

function action(mode, type, selection) {
	preamble = null;
	if (mode == -1) {
	cm.dispose();
	} else {
	if (mode == 0 && status == 0) {
		cm.dispose();
	return;
	}
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	boxStage(cm);
}
}

function clear(stage, eim, cm) {
	eim.setProperty("8stageclear","true");

	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
	cm.givePartyExp(5040, eim.getPlayers());
}

function failstage(eim, cm) {
	cm.showEffect(true, "quest/party/wrong_kor");
	cm.playSound(true, "Party1/Failed");
}

function boxStage(cm) {
	var debug = false;
	var eim = cm.getEventInstance();
	var nthtext = "eighth";
	var nthobj = "boxes";
	var nthverb = "stand";
	var nthpos = "stand too close to the edges";
	var curcombo = stage8answer;
	var currect = cm.getMap().getAreas();
	var objset = [0,0,0,0,0,0,0,0,0];

	if (cm.isLeader()) { // leader
		if (status == 0) {
			party = eim.getPlayers();
			preamble = eim.getProperty("leader" + nthtext + "preamble");
		if (preamble == null) {
			cm.sendNext("#b�z��֮��#k<�����A��>  �^�PҪ�󣺱����Ѓ����M�T��ɼ���Ʒվ�ڱ������ֵĺ����ϣ�Ȼ���ɽM�L�c������֤��");
			eim.setProperty("leader" + nthtext + "preamble","done");
			var as = Math.floor(Math.random() * stage8answer.length);
			eim.setProperty("stage" + nthtext + "combo", as);
			cm.getMap().startSimpleMapEffect(stage8question[as], 5120018);
			cm.dispose();
		} else { // otherwise, check for stage completed
			var complete = eim.getProperty("8stageclear");
			if (complete != null) {
			var mapClear = "8stageclear";
			eim.setProperty(mapClear,"true"); // Just to be sure
			cm.sendNext("����^�P��ͨ��<�����A��>���T�ѽ��_����");
		} else {
			var totplayers = 0;
			for (i = 0; i < objset.length; i++) {
			var present = cm.getMap().getNumPlayersItemsInArea(i);
			if (present != 0) {
				objset[i] = objset[i] + 1;
				totplayers = totplayers + 1;
				}
				}
		if (totplayers == 2 || debug) {
			var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
			var testcombo = true;
			for (i = 0; i < objset.length; i++) {
			if (combo[i] != objset[i]){
				testcombo = false;
				}
				}
			if (testcombo || debug) {
				clear(8,eim,cm);
			if (cm.getEventInstance().getProperty("s8start") != null) {
				var starts4Time = cm.getEventInstance().getProperty("s8start");
				var nowTime = new Date().getTime();
				if((nowTime - starts4Time) < 90000)
				cm.getEventInstance().setProperty("s8achievement", "true"); // give via portal script.
				}
				cm.dispose();
			} else {
				failstage(eim,cm);
				cm.dispose();
				}
			} else {
				if (debug) {
				var outstring = "Objects contain:"
				for (i = 0; i < objset.length; i++) {
				outstring += "\r\n" + (i+1).toString() + ". " + objset[i].toString();
				}
				cm.sendNext(outstring);
				var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
			} else {
				cm.sendNext("It looks like you haven't found the 2 " + nthobj + " just yet. Please think of a different combination of " + nthobj + ". Only 2 are allowed to " + nthverb + " on " + nthobj + ", and if you " + nthpos + " it may not count as an answer, so please keep that in mind. Keep going!");
				cm.dispose();
				}
				}
				}
				}
			} else {
				cm.dispose();
				}
			} else { // not leader
	if (status == 0) {
		var complete = eim.getProperty("8stageclear");
		if (complete != null) {
			cm.sendNext("����^�P��ͨ��<�����A��>���T�ѽ��_����");
			cm.dispose();
		} else {
			cm.sendNext("�ܱ�Ǹ���Ҳ����c����Մ��Ո���V���ĽM�L�c��ՄԒ��");
			cm.dispose();
			}
		} else {
			var complete = eim.getProperty("8stageclear");
			if (complete != null) {
			cm.sendNext("����^�P��ͨ��<�����A��>���T�ѽ��_����");
			cm.dispose();
			}
			cm.dispose();
}
}
}