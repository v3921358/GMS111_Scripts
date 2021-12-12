/*
	名字:	时间门
	地圖:	塔拉森林时间门
	描述:	240070000
*/

function start() {
	var chat = "#e<时间门>#n \r\n#b";
	chat += "\r\n#L0#Year 2021 - 平凡的村莊入口";
	chat += "\r\n#L1#Year 2099 - 深夜港口入口";
	chat += "\r\n#L2#Year 2215 - 遭到攻擊的城區商店";
	chat += "\r\n#L3#Year 2216 - 都市廢墟";
	chat += "\r\n#L4#Year 2230 - 危險的塔大廳";
	chat += "\r\n#L5#Year 2503 - 天空戰艦";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	var mapid = 0;

	switch (selection) {
	case 0:
		mapid = 240070100;  //2021年平凡的村莊入口
		break;
	case 1:
		mapid = 240070200;  //2099年深夜港口入口
		break;
	case 2:
		mapid = 240070300;  //2215年遭到攻击的城区商店
		break;
	case 3:
		mapid = 240070400;  //2216年变成废墟的城市交叉路
		break;
	case 4:
		mapid = 240070500;  //2230年危险的塔大厅
		break;
	case 5:
		mapid = 240070600;  //2503年天空战舰船头
		break;
		}
	if (mapid > 0) {
		cm.warp(mapid, 1);
	} else {
		cm.sendOk("Complete your mission first。");
		}
	cm.dispose();
}