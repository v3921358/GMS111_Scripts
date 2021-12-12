/*
	名字:	米乐的反应
	地圖:
	描述:	米乐
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("主人！ 我們加入的組織和#m310000000#的關係好像很可疑，不是嗎？ 我們幫他們執行任務，黑色之翼成員的身份好像逐漸確定下來了……這真的是好事嗎？");
	if (status == 1)
		qm.sendNextPrev("成為黑色之翼的成員之後，好像對黑色之翼這個組織卻越來越看不懂了。#m310000000#的人們好像很討厭黑色之翼。 黑色之翼真的是好人嗎？");
	if (status == 2)
		qm.sendNextPrevS("#b我也不知道。 總之我們現在能做的，好像只有去瞭解黑色之翼的任務。 不是嗎？");
	if (status == 3)
		qm.sendPrev("啊～越來越搞不明白了。 黑色之翼到底是好組織，還是壞組織？");
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}