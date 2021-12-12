/*
	名字:	龙神的工作
	地圖:
	描述:	米乐
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
		qm.sendNext("主人！ 我非常感動！ 主人真是個善良的人！ 看到你經常幫助那個年紀很大的人，我就很感動！ 我們以後必須幫助那些遇到困難的人！ 那是我們的使命！");
	if (status == 1)
		qm.sendNextPrevS("#b嗯？ 怎麼突然這麼說？ 使命？");
	if (status == 2)
		qm.sendNextPrev("嗯！ 主人和我現在擁有了强大的力量，不是嗎？ 我們之所以能够擁有那種力量，是為了幫助其他人！ 我是這麼想的。 作為龍神，這是你必須做的事情！");
	if (status == 3)
		qm.sendNextPrevS("#b作為龍神必須做的事情？");
	if (status == 4)
		qm.sendAcceptDecline("是的！ 讓我們去幫助那些有困難的人吧！ 在什麼地方，一定有人在期待得到主人的幫助！");
	if (status == 5)
		qm.sendPrevS("#b（答應了以龍神的身份去幫助別人。嗯……感覺自己很帥。好的！去#m100000000#看看有沒有人正在為無法解决的事情而苦惱吧。現在我應該可以去幫助別人了。",3);
	if (status == 6){
		qm.forceStartQuest();
		qm.dispose();
}
}
