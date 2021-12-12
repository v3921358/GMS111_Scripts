/*
	名字:	克鲁特
	地圖:	第一次同行&amp;lt;1号门&g
	描述:	910340100
*/

var status	= -1;

var partyLdr;
var chatState;
var party;
var preamble = null;
var stage8question;
var stage8answer;
if(preamble == null){
var random = java.lang.Math.floor(Math.random() * 4 + 1);
}
if(random == 1){
stage8question = Array("10+5=?", "10+5=?");
stage8answer = Array(Array(1, 0, 0, 0,1), Array(1, 0, 0, 0,1));
} else if(random == 2){
stage8question = Array("20+4=?", "20+4=?");
stage8answer = Array(Array(0, 1, 0, 1,0), Array(0, 1, 0, 1,0));
} else if(random == 3){
stage8question = Array("30+5=?", "30+5=?");
stage8answer = Array(Array(0, 0, 1, 0,1), Array(0, 0, 1, 0,1));
} else if(random == 4){
stage8question = Array("10+3=?", "10+3=?");
stage8answer = Array(Array(1, 0, 1, 0,0), Array(1, 0, 1, 0,0));
}

function action(mode, type, selection) {
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
	eim.setProperty("3stageclear", "true");

	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
	cm.givePartyExp(5040, eim.getPlayers());
	// stage 9 does not have a door, might be cause of DC error
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
	var objset = [0, 0, 0, 0,0];

	if (cm.isLeader()) { // leader
		if (status == 0) {
			party = eim.getPlayers();
			preamble = eim.getProperty("leader" + nthtext + "preamble");
		if (preamble == null) {
			cm.sendNext("你已經進入到第一次同行<3號門>階段，前面有5個有猫猫的臺階，必須由兩名組員站在有猫猫的臺階中間，由組長與我交談判斷答案，如果能猜對就讓你進入下一階段。");
			eim.setProperty("leader" + nthtext + "preamble", "done");
			var as = Math.floor(Math.random() * stage8answer.length);
			eim.setProperty("stage" + nthtext + "combo", as);
			cm.getMap().startSimpleMapEffect(stage8question[as], 5120018);
			cm.dispose();
		} else { // otherwise, check for stage completed
			var complete = eim.getProperty("3stageclear");
			if (complete != null) {
				var mapClear = "3stageclear";
				eim.setProperty(mapClear, "true"); // Just to be sure
				cm.sendNext("通往下一階段的門已開啟。");
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
			if (combo[i] != objset[i]) {
				testcombo = false;
				}
				}
	if (testcombo || debug) {
		clear(8, eim, cm);
		if (cm.getEventInstance().getProperty("s8start") != null) {
			var starts4Time = cm.getEventInstance().getProperty("s8start");
			var nowTime = new Date().getTime();
			if ((nowTime - starts4Time) < 90000) cm.getEventInstance().setProperty("s8achievement", "true"); // give via portal script.
			}
			cm.dispose();
		} else {
			failstage(eim, cm);
			cm.dispose();
			}
		} else {
			if (debug) {
				var outstring = "Objects contain:"
				for (i = 0; i < objset.length; i++) {
				outstring += "\r\n" + (i + 1).toString() + ". " + objset[i].toString();
				}
				cm.sendNext(outstring);
				var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
		} else {
			cm.sendNext("必須由兩名組員站在有猫猫的臺階中間，由組長與我交談判斷答案，如果能猜對就讓你進入下一階段。");
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
		cm.sendNext("你已經進入到第一次同行<3號門>階段，前面有5個有猫猫的臺階，必須由兩名組員站在有猫猫的臺階中間，由組長與我交談判斷答案，如果能猜對就讓你進入下一階段。");
		cm.dispose();
	} else {
		cm.sendNext("通往下一階段的門已開啟。");
		cm.dispose();
}
}
}