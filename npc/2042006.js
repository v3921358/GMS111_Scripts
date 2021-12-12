/*
	名字:	休彼德蔓
	地圖:	休彼德蔓的办公室
	描述:	980030000
*/

var status = -1;

var request;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else
	status = 0;
	if (status == 0) {
		request = cm.getNextCarnivalRequest();
		if (request != null) {
			cm.sendYesNo(request.getChallengeInfo() + "\r\n你想要這些夥伴參與到你的怪物嘉年華2來嗎?")
		} else {
			cm.dispose();
			}
			}
	if (status == 1) {
		try {
		cm.getChar().getEventInstance().registerCarnivalParty(request.getChallenger(), request.getChallenger().getMap(), 1);
		cm.dispose();
		} catch (e) {
		cm.sendOk("挑戰不再有效。");
		}
		cm.dispose();
}
}