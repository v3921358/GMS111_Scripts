/*
	名字:	合作的必要性
	地圖:	埃欧雷
	描述:	910150001
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
		qm.sendNext("还好这次守住了村子……要是下次再受到攻击，可能会有危险。长老们和你都还没恢复过去的力量。");
	if (status == 1)
		qm.sendNextPrevS("…#b银槲之剑暂时最好放在你这里#k，#p1012100#。放在村里的话，要是受到攻击，被他们抢走，那就糟了。我相信你一定可以保护好它……");
	if (status == 2)
		qm.sendNextPrev("但是村子谁来保护呢……");
	if (status == 3)
		qm.sendNextPrevS("#b必须想想其他办法。我也可以一直在村里守着。");
	if (status == 4)
		qm.sendNextPrev("双弩精灵，你得继续修炼……你看这个办法怎么样？把这件事告诉在最前线和黑色之翼战斗的#b冒险骑士团，向他们请求协助#k。");
	if (status == 5)
		qm.sendNextPrevS("#b冒险骑士团？是现在的皇帝手下的骑士吗？");
	if (status == 6)
		qm.sendNextPrev("是的，和以前不同，那里聚集了大量骑士。他们和我们有着相同的敌人。如果告诉他们我们的情况，他们肯定会帮我们的。");
	if (status == 7)
		qm.sendNextPrev("那我回#m100000000#去给冒险骑士团所在的#m130000000#写封信。双弩精灵，你能到村里去等待他们派人来吗？");
	if (status == 8)
		qm.sendNextPrevS("#b不，我要到#m130000000#去见见他们的皇帝。我想亲眼确认一下他是不是可以信任的人。");
	if (status == 9)
		qm.sendPrev("双弩精灵，你果然还是没变……虽然是国王，但总是喜欢自己亲自处理事情……那我会给他们写封信，让他们做好迎接你的准备。");
	if (status == 10){
		qm.forceStartQuest();
		qm.warp(130000000, 0);
		qm.dispose();
}
}