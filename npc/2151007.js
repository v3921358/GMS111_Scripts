/*
	名字:	升降机控制台
	地圖:	训练室入口
	描述:	310010010
*/

function start() {
	var chat = "升降機控制台：\r\n#b";
	chat += "\r\n#L0#培訓室A";
	chat += "\r\n#L1#培訓室B";
	chat += "\r\n#L2#培訓室C";
	chat += "\r\n#L3#培訓室D";
	chat += "\r\n#L4#第四訓練室";
	cm.sendSimple(chat);
}

function action(mode,type,selection) {
	if (mode == 1) { //or 931000400 + selection..?
	switch(selection) {
	case 0:
		cm.warp(310010100,1);
		break;
	case 1:
		cm.warp(310010200,1);
		break;
	case 2:
		cm.warp(310010300,1);
		break;
	case 3:
		cm.warp(310010400,1);
		break;
	case 4:
		cm.resetMap(931000400);
		cm.warp(931000400,1);
		break;
		}
		}
	cm.dispose();
}