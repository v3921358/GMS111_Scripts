/*
	名字:	雪人的愤怒-发现线索
	地圖:	雪精灵的休息处
	描述:	211040102
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
		qm.sendNextS("雕像散發出耀眼的美麗。 像冰塊兒一樣透明，但好像又不是冰塊兒。 我到雕像周圍仔細看了一下。",3);
	if (status == 1)
		qm.sendPrevS("雕像的一角碎掉了。 周圍也能看到幾個大脚印。",3);
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}