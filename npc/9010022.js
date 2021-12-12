/*
	名字:	万能传送门
	地圖:	金银岛
	描述:	104000000
*/

var text = "";

function start() {
	var 等级 = cm.getPlayerStat("LVL");
	if (等级 < 10) {
		cm.askMapSelection("");
		cm.dispose();
		return;
}
	if (等级 >= 10) {
		text += "#0#纳希竞技大会";
}
	if (等级 >= 25) {
		text += "#1#武陵道场";
}
	if (等级 >= 30) {
		text += "#2#怪物嘉年华1";
}
	if (等级 >= 50) {
		text += "#3#怪物嘉年华2";
}
	if (等级 >= 60) {
		text += "#4#雾海幽灵船";
}
	if (等级 >= 40) {
		text += "#5#奈特的金字塔";
}
	if (等级 >= 25 && 等级 <= 200) {
		text += "#6#废弃的地铁月台";
}
		text += "#7#幸福村";
		text += "#8#黄金寺院";
	if (等级 >= 10) {
		text += "#9#月秒的年糕";
}
	if (等级 >= 20) {
		text += "#10#废弃副本";
}
	if (等级 >= 30) {
		text += "#11#次元裂缝";
}
	if (等级 >= 40) {
		text += "#12#毒雾森林";
}
	if (等级 >= 50) {
		text += "#13#女神的痕迹";
}
	if (等级 >= 60) {
		text += "#14#海盗船";
}
	if (等级 >= 70) {
		text += "#15#罗密欧与茱丽叶";
}
	if (等级 >= 70) {
		text += "#16#侏儒怪皇帝的复活";
}
	if (等级 >= 100) {
		text += "#17#御龙魔";
}
	if (等级 >= 30) {
		text += "#18#叛徒房间的入口";
}
	if (等级 >= 50) {
		text += "#19#鬧鬼宅邸外部";
}
	if (等级 >= 50) {
		text += "#21#陷入危险的坎特";
}
	if (等级 >= 50) {
		text += "#22#逃脱";
}
	if (等级 >= 50) {
		text += "#23#冰騎士的詛咒";
}
	if (等级 >= 10) {
		text += "#25#结婚小镇";
}
	if (等级 >= 10) {
		text += "#87#魔女塔";
}
	if (等级 >= 30) {
		text += "#98#外星基地";
}
	cm.askMapSelection(text);
}

function action(mode, type, selection) {
	var 等级 = cm.getPlayerStat("LVL");
	if (mode == 1) {
		if (等级 < 10) { // they cannot use any
		cm.dispose();
		return;
		}
	switch (selection) {
	case 0: // 纳希竞技大会
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(980010000, 3);
		break;

	case 1: // 武陵道场
		if (等级 >= 25) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(925020000, 4);
		}
		break;

	case 2: // 怪物嘉年华1
		if (等级 >= 30) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(980000000, 4);
		}
		break;

	case 3: // 怪物嘉年华2
		if (等级 >= 50) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(980030000, 4);
		}
		break;

	case 4: // Dual Raid
		if (等级 >= 60) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(923020000, 0);
		}
		break;

	case 5: // 奈特的金字塔
		if (等级 >= 40) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(926010000, 4);
		}
		break;

	case 6: // 废弃的地铁月台
		if (等级 >= 25 && 等级 <= 30) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(910320000, 2);
		}
		break;

	case 7: // 幸福村
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(209000000, 0);
		break;

	case 8: // 黄金寺院
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(950100000, 9);
		break;

	case 9: // 月秒的年糕
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(910010500, 0);
		break;

	case 10: // 废弃副本
		if (等级 >= 20) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(910340700, 0);
		}
		break;

	case 11: // 玩具塔
		if (等级 >= 30) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(221023300, 2);
		}
		break;

	case 12: //毒雾森林
		if (等级 >= 40) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(300030100, 1);
		}
		break;

	case 13: // 女神塔
		if (等级 >= 50) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(200080101, 1);
		}
		break;

	case 14: // 海盗船
		if (等级 >= 60) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(251010404, 1);
		}
		break;

	case 15: // 罗密欧与茱丽叶
		if (等级 >= 70) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(261000011, 0);
		}
		break;

	case 16: // 邪摩斯的房间
		if (等级 >= 30) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(211000002, 0);
		}
		break;

	case 17: // 御龙魔
		if (等级 >= 100) {
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(240080000, 2);
		}
		break;

	case 18: //叛徒房间的入口
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(674030100, 0);
		break;

	case 19: //鬧鬼宅邸外部
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(682000000, 0);
		break;

	case 21: //危海岔路
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(923040000, 0);
		break;

	case 22: //隐藏的塔入口
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(921160000, 0);
		break;

	case 23: //冰騎士的詛咒
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(932000000, 0);
		break;

	case 25: //结婚小镇
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(670010000, 0);
		break;

	case 87: //魔女塔
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(980040000, 0);
		break;

	case 98: //外星基地
		cm.saveReturnLocation("MULUNG_TC");
		cm.warp(502029000, 0);
		break;
		}
		}
	cm.dispose();
}