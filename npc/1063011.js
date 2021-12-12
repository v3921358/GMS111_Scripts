/*
	名字:	奇怪的墙壁
	地圖:	石冢荒野 
	描述:	102010100
*/

function start() {
	if (cm.isQuestActive(21731) || cm.isQuestActive(20730))
		cm.sendGetText("听见奇怪的声音。若想进入，#e#b就要说出暗号#k#n");
}

function action(mode, type, selection) {
	if (cm.getText() == "弗朗西斯是天才人偶师！" && cm.isQuestActive(20730)) {
		cm.resetMap(910510000);   //地图刷新
		cm.warp(910510000,1);
		cm.spawnMobOnMap(9300285,1,220,240,910510000);//召唤怪物
	} else if (cm.getText() == "弗朗西斯是天才人偶师！" && cm.isQuestActive(21731)) {
		cm.resetMap(910510201);   //地图刷新
		cm.warp(910510201,1);
		cm.spawnMobOnMap(9300344,1,220,240,910510201);//召唤怪物
	} else {
		cm.sendOk("有奇怪的声音嘲笑着\r\n\r\n#e#b你是笨蛋吗？这是暗号吗？从写法到感叹号都一模一样？#k#n");
		}
	cm.dispose();
}