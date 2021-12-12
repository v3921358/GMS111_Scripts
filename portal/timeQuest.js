/*
	名字:	时间领主
	地圖:	追忆之路1
	描述:	270010100
*/

var quest;
var tomap;
var uncompletedmap;

function enter(pi) {
	switch (pi.getMapId()) {

        // Green area
	case 270010100:
		quest = 3501;
		tomap = 270010110;  //追忆中的邂逅
		uncompletedmap = 270010000;
		break;
	case 270010200:   //追忆之路2
		quest = 3502;
		tomap = 270010210;   //追忆中的邂逅2
		uncompletedmap = 270010110;//追忆中的邂逅
		break;
	case 270010300:  //追忆之路3
		quest = 3503;
		tomap = 270010310;
		uncompletedmap = 270010210;//追忆中的邂逅2
		break;
	case 270010400:  //追忆之路4
		quest = 3504;
		tomap = 270010410;
		uncompletedmap = 270010310;//追忆中的邂逅3
		break;
	case 270010500:  //追忆之路5
		quest = 3507;
		tomap = 270020000;
		uncompletedmap = 270010410;  //追忆中的邂逅4
		break;

	// Blue area
	case 270020100:   //后悔之路1
		quest = 3508;
		tomap = 270020110;//后悔中的邂逅1
		uncompletedmap = 270020000;
		break;
	case 270020200:   //后悔之路2
		quest = 3509;
		tomap = 270020210;//后悔中的邂逅2
		uncompletedmap = 270020110;
		break;
	case 270020300:  //后悔之路3
		quest = 3510;
		tomap = 270020310;   //后悔中的邂逅3
		uncompletedmap = 270020210;
		break;
	case 270020400:  //后悔之路4
		quest = 3511;
		tomap = 270020410;  //后悔中的邂逅4
		uncompletedmap = 270020310;
		break;
	case 270020500:  //后悔之路5
		quest = 3514;
		tomap = 270030000;  //燃烧的过去
		uncompletedmap = 270020410;
		break;

        // Red zone
	case 270030100:   //忘却之路1
		quest = 3515;
		tomap = 270030110;   //忘却中的邂逅1
		uncompletedmap = 270030000;
		break;
	case 270030200:  //忘却之路2
		quest = 3516;
		tomap = 270030210;  //忘却中的邂逅2
		uncompletedmap = 270030110;
		break;
	case 270030300:    //忘却之路3
		quest = 3517;
		tomap = 270030310;  //忘却中的邂逅3
		uncompletedmap = 270030210;
		break;
	case 270030400:   //忘却之路4
		quest = 3518;
		tomap = 270030410;   //忘却中的邂逅
		uncompletedmap = 270030310;
		break;
	case 270030500:    //忘却之路5
		quest = 3521;
		tomap = 270040000;   //破碎的回廊
		uncompletedmap = 270030410;
		break;

	case 270040000:
	if (pi.haveItem(4032002)) {
		pi.playPortalSE();
		pi.warp(270040100, "out00");
		pi.forceStartQuest(7402,1);
		pi.playerMessage(-7,"[Portal]現在移到寺廟的深處。");
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]好像有一股力量封鎖此傳送點");
		return false;
		}
		break;
		default:
		return false;
		}
	if (pi.getQuestStatus(quest) == 2) {
		pi.playPortalSE();
		pi.warp(tomap, "out00");
	} else {
		pi.playPortalSE();
		pi.warp(uncompletedmap, 0);
		pi.playerMessage(-7,"[Portal]Instruders are unable to reverse the current that originates from the temple, and are sent back to their previous spots.");
		}
		return true;
}