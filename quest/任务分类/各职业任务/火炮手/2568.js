/*
	名字:	斯徒诺
	地圖:	遇险者小屋
	描述:	3000200
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
		qm.sendAcceptDecline("你来啦。在你去做事的时候，我已经把点火装置装到了大炮上。好了，事不宜迟！我们马上出发吧！");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(912060200, 0);
		qm.dispose();
}
}