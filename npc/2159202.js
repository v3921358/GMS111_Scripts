/*
	名字:	红狗
	地圖:	危险！临时机场
	描述:	931000420
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {//判断地图有没有怪物
		cm.sendOk("感謝你救了我，黑色之翼最近的越來越倡狂！");
	} else {
		cm.sendOk("請消滅黑色之翼後在來解救我！");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(23131, "1");
	cm.warp(310000010);
	cm.dispose();
}