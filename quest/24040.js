/*
	名字:	醒来
	地圖:
	描述:
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(24040) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24040) == 1) {
		qm.sendNext("等等……好像有点奇怪？我的等级是多少？",1033110);
		}
		}
	if (status == 1)
		qm.sendNextPrev("10……级？！",1033110);
	if (status == 2)
		qm.sendNextPrev("……到底是怎么回事？我的等级……怎么这么低？！只有10级？10级？不是100级，是10级？我还在做梦吗？掐一下自己的话，会醒来吗？啊！",1033110);
	if (status == 3)
		qm.sendNextPrev("哎呀！不是梦！这是黑魔法师的诅咒的影响吗？！……呃呃呃……可恶的黑魔法师！本来就没有任何好感，现在真的是不可原谅！",1033110);
	if (status == 4)
		qm.sendNextPrev("啊……啊……冷静，冷静下来，双弩精灵。着急也没用。冷静地把现在的情况整理一下。",1033110);
	if (status == 5)
		qm.sendNextPrev("黑魔法师的诅咒没有消失。从长老们和其他百姓们还困在冰里来看，这一点可以确认。",1033110);
	if (status == 6)
		qm.sendNextPrev("醒来的人好像只有我。虽然不知道是为什么……想到醒来之前感觉到的那个气息，也许是因为黑魔法师的封印变弱了？",1033110);
	if (status == 7)
		qm.sendNextPrev("虽然想到外面去看看冒险岛世界的情况，但是不行。因为……我现在等级只有10级。这到底是怎么回事！我竟然只有10级！",1033110);
	if (status == 8)
		qm.sendNextPrev("黑魔法师的最后一个诅咒……那个诅咒的影响当然会很大，看来我是太低估了。而且也不知道过了多长时间，被困在冰里这么长时间，身体也便僵硬了。",1033110);
	if (status == 9)
		qm.sendNextPrev("受了伤，又受到诅咒，被困在冰里这么长时间，等级变低是当然的事情。当然的事情……怎么会这样！快让我恢复成原来的等级！我双弩精灵竟然只有10级！",1033110);
	if (status == 10)
		qm.sendPrev("……呼，呼……冷，冷静。不是尖叫的时候！先确认一下身体状态。真的只有10级了吗？该不会还有伤没好吧？手脚还能动吗？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142336#  #t1142336#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 400 exp",1033110);
	if (status == 11){
		qm.forceCompleteQuest();
		qm.gainItem(1142336,1);
		qm.gainExp(400);
		qm.dispose();
}
}