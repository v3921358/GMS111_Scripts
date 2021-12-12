/*
	名字:	空墙
	地圖:	废弃工地
	描述:	103010100
*/

function start(){
	switch(cm.getPlayer().getMapId()) {
	case 103020000:
		if (cm.getQuestStatus(2358) == 1) { //too lazy
			cm.forceStartQuest(2358000,"1");
			cm.sendOk("你已经粘贴好海报。");
		} else {
			cm.sendOk("地铁售票口的墙。");
			}
	case 103010100:
		if (cm.getQuestStatus(2358) == 1) { //too lazy
			cm.forceStartQuest(2358001,"1");
			cm.sendOk("你已经粘贴好海报。");
		} else {
			cm.sendOk("工地上的墙。");
			}
			}
		cm.dispose();
}