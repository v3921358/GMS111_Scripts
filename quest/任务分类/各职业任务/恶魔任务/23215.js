/*
	名字:	力量的觉醒
	地圖:	秘密广场
	描述:	310010000
*/

var status = -1;

function start(mode, type, selection) {
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
	if (status == 0)
		qm.sendNext("#h0#，修炼进展顺利吗？");
	if (status == 1)
		qm.sendNextPrevS("#b#p2151009#，我刚好想和你说话呢。");
	if (status == 2)
		qm.sendNextPrev("(啊！#h0#想和我说话！？)嗯？有什么事吗？？");
	if (status == 3)
		qm.sendNextPrevS("#b我想再进行一次上次的修炼。");
	if (status == 4)
		qm.sendNextPrev("上次的修炼？嗯……你好像又遇到了障碍。但是以你现在的水平，那种修炼好像不会有什么帮助……");
	if (status == 5)
		qm.sendNextPrevS("#b好吧，知道了。");
	if (status == 6)
		qm.sendNextPrev("等一下……等一下。你这就要走了吗……在这之前，我想把我想到的修炼方法告诉你。#h0#，其实对你最有帮助的修炼，是和过去的自己战斗。所以我想到了一个办法，把你送回过去，和过去的自己决斗。");
	if (status == 7)
		qm.sendNextPrev("要想让时间倒转，必须到#m270000100#去。但是#h0#，对现在的你来说太危险了。因此我找到了一个地方，听说#m220000000#的时间流动有点异常。");
	if (status == 8)
		qm.sendNextPrev("在#m220000000#的时间塔下层，有个名叫#b#m220050300##k的地方，在那里可以进入时间缝隙。你到那里去，我会为你打开时间缝隙。");
	if (status == 9)
		qm.sendNextPrev("虽然我变成了召唤兽的样子，但正是因为如此，我可以移动到通往其他次元的空间。我会移动到只有我才能去的通道去，在那里等你。");
	if (status == 10)
		qm.sendPrev("由于进入的是时间缝隙，因此可能会到达过去的某个时间点，但是不会改变过去的事情，对现在或未来不造成影响。请你放心地和过去的自己战斗……");
	if (status == 11){
		qm.forceStartQuest();
		qm.dispose();
}
}

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
	if (status == 0)
		qm.sendNext("#h0#，你回来啦！！状态怎么样？");
	if (status == 1)
		qm.sendNextPrev("和过去的自己战斗，是非常困难的事。和过去的自己见面之后，你应该会想起过去忘记了的技能。");
	if (status == 2)
		qm.sendNextPrev("成功了。#h0#，我感觉到了和全盛时期的你差不多的气息。别忘了进行刻印。要我帮你刻印吗？");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.changeJob(3112);
		qm.sendOk("现在你已经差不多恢复了过去的力量。从现在开始，就要靠你自己修炼了。我想尽快恢复原来的样子。");
		}
	if (status == 4){
		qm.dispose();
}
}