/*
	名字:	情报员
	地圖:	骑士团第2区域
	描述:	271030200
*/

function start() {
	var chat = "#e<你要进入的地图>#n \r\n#b";
	chat += "\r\n#L0#魂靈之地";
	chat += "\r\n#L1#火焰之地";
	chat += "\r\n#L2#暴風之地";
	chat += "\r\n#L3#黑暗之地";
	chat += "\r\n#L4#閃電之地";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	var mapid = 0;

	switch (selection) {
	case 0:
		mapid = 271030201;
		break;
	case 1:
		mapid = 271030202;
		break;
	case 2:
		mapid = 271030203;
		break;
	case 3:
		mapid = 271030204;
		break;
	case 4:
		mapid = 271030205;
		break;
		}
	if (mapid > 0) {
		cm.warp(mapid, 1);
		}
	cm.dispose();
}