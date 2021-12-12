/*
	名字:	德朗博士所希望的
	地圖:	禁止出入(除相关者外)
	描述:	261020401
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("嗯? 不要? 討厭就沒有辦法... 看你有興趣而故意辛苦知道的事情, 竟然這樣忽視派溫的好意... 哭哭。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("呼嗚~ 親切的冒險家朋友! 來了嗎? 很久了吧? 真的很想很想見你。為什麼啊? 呼呼呼呼... 知道了你之前詢問的事情! 那, 就是那件事情。那個性黑暗的煉金術師的思念。");
	if (status == 1)
		qm.sendAcceptDecline("又有了這人的另外思念痕跡。因為你有興趣, 所以努力去找了。呼呼呼... 那, 快去找他。");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(926120200);
		qm.dispose();
}
}