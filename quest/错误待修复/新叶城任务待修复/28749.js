/*
	名字:	A Heroic Rescue
	地圖:	被破坏的新叶城
	描述:	600000000
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendYesNo("我仔细想了想，那帮外星人会绑架市民估计是不想让目击者把它们的存在传播出去！我们得救出人质，告诉大家这一消息");
    } else if (status == 1) {
	qm.sendNextPrev("是时候发挥你的能力了！去把那些老百姓救出来吧。虽然我也不知道该怎么去救他们，但你可不能放弃啊！");
    } else if (status == 2) {
	qm.sendNextPrev("你说你是在基地附近看到他们的。这倒是让我想起了，有些市民说他们目击到田野上有奇怪的矩形容器。我猜那些东西其实就是囚笼！你快去看看能不能把人从那里头弄出来！");
	} else if (status == 3) {
	qm.sendNextPrev("I'm going to give you some Return to New Leaf City scrolls, but remember they're for the people you Rescue ONLY!");
	} else if (status == 4) {
	qm.forceStartQuest();
	qm.dispose();
    }
}
