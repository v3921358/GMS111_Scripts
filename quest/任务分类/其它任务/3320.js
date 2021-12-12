/*
	名字:	疯老头知道的事情
	地圖:	禁止出入(除相关者外)
	描述:	261020401
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("嗯? 不要? 討厭就沒有辦法... 不過無法告訴你在這裡研究的煉金術師是誰?");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("喔喔! 你來了啊! 歡迎歡迎! 最近多虧有你不無聊 ...什麼? 什麼? 再這裡研究的煉金術師是誰嗎? 恩... 他的名字知道是知道...");
	if (status == 1)
		qm.sendNextPrev("什麼啊? 什麼... 到底是什麼... 啊啊!  怎麼就想不起來。這個人對你很重要嗎? 沒有什麼事情就忘了吧... 不行? 這要怎麼辦..");
	if (status == 2)
		qm.sendAcceptDecline("唉! 不知道了。你來親自看吧!");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(926120200);
		qm.dispose();
}
}