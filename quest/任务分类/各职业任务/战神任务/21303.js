/*
	名字:	和白雪人的友情
	地圖:	万仞悬崖
	描述:	914022100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("嗚嗚～#p1203001#很難過。#p1203001#很生氣。#p1203001#很想哭……嗚嗚嗚嗚～");
	if (status == 1)
		qm.sendNextPrevS("#b怎、怎麼了？");
	if (status == 2)
		qm.sendNextPrev("#p1203001#做好了寶石#v4032339:#。# b像蘋果一樣的紅寶石#k。 結果#r小偷#k卻把寶石給偷走了。#p1203001#寶石沒了。#p1203001#好難過……..");
	if (status == 3)
		qm.sendNextPrevS("#b你說小偷偷走了紅寶石?");
	if (status == 4)
		qm.sendAcceptDecline("對。 必須找回#p1203001#寶石。 你要是能幫我找回#p1203001#寶石，我會好好答謝你的。 要是幫我抓到小偷，我也會答謝你的。");
	if (status == 5)
		qm.sendPrev("小偷往那個方向去了。 那個方向是……吃飯的手是右手，不吃飯的手是左手……#b左邊#k！ 往左邊去就能抓到小偷。");
	if (status == 6){
		qm.forceStartQuest();
		qm.dispose();
}
}