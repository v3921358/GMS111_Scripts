/*
	����:	�鱨Ա
	�؈D:	��ʿ�ŵ�2����
	����:	271030200
*/

function start() {
	var chat = "#e<��Ҫ����ĵ�ͼ>#n \r\n#b";
	chat += "\r\n#L0#���`֮��";
	chat += "\r\n#L1#����֮��";
	chat += "\r\n#L2#���L֮��";
	chat += "\r\n#L3#�ڰ�֮��";
	chat += "\r\n#L4#�W�֮��";
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