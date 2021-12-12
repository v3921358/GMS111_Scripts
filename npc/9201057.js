/*
	����:	����
	�؈D:	������Ʊ��
	����:	103000100
*/

var section;

function start() {
	status = -1;
	sw = cm.getEventManager("Subway");
	action(1, 0, 0);
}

var msg = new Array("��˹��������Ҷ��","ά�����ǵ�������","��������","��Ҷ��");
var ticket = new Array(4031711,4031713);
var cost = 5000;
var returnMap = new Array(103000100,600010001);

function action(mode, type, selection) {
	if(mode == 0 && status == 0) {
		cm.dispose();
	} else {
	status++;
	if(mode == 0) {
		if (section == 2) {
		cm.sendNext("�õģ�Ո�Ե�~!");
	} else {
		cm.sendOk("��һ����һЩ����Ҫ̎�����᣿");
		}
		cm.dispose();
	return;
	}
	if (status == 0) {
	switch (cm.getMapId()) {
	case 103000100: //same as 103020000 newbms only
		section =0;
		break;
	case 103020000: //newer version of 103000100
		section = 0;
		break;
	case 600010001:
		section = 1;
		break;
	case 600010004:
		section = 2;
		break;
	case 600010002:
		section = 3;
		break;
		default:
		cm.sendNext("Error~ mapid not defined.");
		cm.dispose();
		break;
		}
		if(section < 2) {
			cm.sendSimple("��á������Iһ�����\Ʊ�᣿\r\n#L0##b"+msg[section]+"#l");
		} else {
			cm.sendYesNo("�����ȥ�� "+msg[section]+" subway station now?");
			}
			}
	if (status == 1) {
		if(section < 2) {
			cm.sendYesNo("The ride to "+msg[section]+" takes off every 10 minutes, beginning on the hour, and it'll cost you #b"+cost+" mesos#k. Are you sure you want to purchase #b#t"+ticket[section]+"##k?");
		} else {
			section -= 2;
			cm.warp(returnMap[section]);
			cm.dispose();
			}
			}
	if (status == 2) {
		if(cm.getMeso() < cost || !cm.canHold(ticket[section])) {
			cm.sendNext("��_�����І� #b"+cost+" mesos#k? ������@�ӵ�Ԓ���ҽ��h��z��һ�����etc��棬�����Ƿ��ѽ��M�ˡ�");
			}
		else {
			cm.gainItem(ticket[section],1);
			cm.gainMeso(-cost);
			}
		cm.dispose();
}
}
}