/*
	名字:	迪纳卡的召唤
	地圖:	埃欧雷
	描述:	101050000
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
		qm.sendNext("双弩精灵！双弩精灵！我想见你！呜呜～虽然我装得很坦然，但我一直害怕我们再也不能见面了！");
	if (status == 1)
		qm.sendNextPrevS("你身体没事吧，#p1033101#？");
	if (status == 2)
		qm.sendNextPrev("是的！没事！就身体而言，我自信比任何精灵都要强壮！虽然没有自信能像以前那样使用技能，但是没有不舒服的地方！");
	if (status == 3)
		qm.sendNextPrevS("太好了……");
	if (status == 4)
		qm.sendPrev("当然啦！很棒吧！独自生活在已经历经数百年时间的世界！那是多么苦闷的事情啊！呜哇！~ 从现在开始，就让#p1033101#我来陪伴你吧！");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}