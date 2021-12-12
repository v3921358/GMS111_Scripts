/*
	名字:	密拉
	地圖:	叛徒房间的入口
	描述:	674030100
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	switch(cm.getPlayer().getMapId()) {
	case 674030100:
		if (status == 0) {
			cm.sendOk("你想回去了嗎？");
		} else {
			cm.warp(910010500,0);
			cm.dispose();
			}
			break;
	case 674030000:
		if (status == 0) {
			cm.sendOk("你怎麼跑到這裡來拉，我可以幫你移到到這個房間的其他地方！");
		} else {
			cm.warp(674030000,1);
			cm.dispose();
			}
			break;
	case 674030200:
		if (status == 0) {
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.warpParty(674030300);
		} else {
			cm.sendNext("請打敗這個叛徒！");
			}
			cm.dispose();
			}
			break;
	case 674030300:
		if (status == 0) {
			cm.sendOk("我想離開這裡！");
		} else {
			cm.warp(674030100,1);
			cm.dispose();
			}
			break;
}
}