/*
	����:	ʱ������
	�؈D:	׷��֮·1
	����:	270010100
*/

var quest;
var tomap;
var uncompletedmap;

function enter(pi) {
	switch (pi.getMapId()) {

        // Green area
	case 270010100:
		quest = 3501;
		tomap = 270010110;  //׷���е�����
		uncompletedmap = 270010000;
		break;
	case 270010200:   //׷��֮·2
		quest = 3502;
		tomap = 270010210;   //׷���е�����2
		uncompletedmap = 270010110;//׷���е�����
		break;
	case 270010300:  //׷��֮·3
		quest = 3503;
		tomap = 270010310;
		uncompletedmap = 270010210;//׷���е�����2
		break;
	case 270010400:  //׷��֮·4
		quest = 3504;
		tomap = 270010410;
		uncompletedmap = 270010310;//׷���е�����3
		break;
	case 270010500:  //׷��֮·5
		quest = 3507;
		tomap = 270020000;
		uncompletedmap = 270010410;  //׷���е�����4
		break;

	// Blue area
	case 270020100:   //���֮·1
		quest = 3508;
		tomap = 270020110;//����е�����1
		uncompletedmap = 270020000;
		break;
	case 270020200:   //���֮·2
		quest = 3509;
		tomap = 270020210;//����е�����2
		uncompletedmap = 270020110;
		break;
	case 270020300:  //���֮·3
		quest = 3510;
		tomap = 270020310;   //����е�����3
		uncompletedmap = 270020210;
		break;
	case 270020400:  //���֮·4
		quest = 3511;
		tomap = 270020410;  //����е�����4
		uncompletedmap = 270020310;
		break;
	case 270020500:  //���֮·5
		quest = 3514;
		tomap = 270030000;  //ȼ�յĹ�ȥ
		uncompletedmap = 270020410;
		break;

        // Red zone
	case 270030100:   //��ȴ֮·1
		quest = 3515;
		tomap = 270030110;   //��ȴ�е�����1
		uncompletedmap = 270030000;
		break;
	case 270030200:  //��ȴ֮·2
		quest = 3516;
		tomap = 270030210;  //��ȴ�е�����2
		uncompletedmap = 270030110;
		break;
	case 270030300:    //��ȴ֮·3
		quest = 3517;
		tomap = 270030310;  //��ȴ�е�����3
		uncompletedmap = 270030210;
		break;
	case 270030400:   //��ȴ֮·4
		quest = 3518;
		tomap = 270030410;   //��ȴ�е�����
		uncompletedmap = 270030310;
		break;
	case 270030500:    //��ȴ֮·5
		quest = 3521;
		tomap = 270040000;   //����Ļ���
		uncompletedmap = 270030410;
		break;

	case 270040000:
	if (pi.haveItem(4032002)) {
		pi.playPortalSE();
		pi.warp(270040100, "out00");
		pi.forceStartQuest(7402,1);
		pi.playerMessage(-7,"[Portal]�F���Ƶ��R����̎��");
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]������һ���������i�˂����c");
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