/*
	����:	ʱ����
	�؈D:	����ɭ��ʱ����
	����:	240070000
*/

function start() {
	var chat = "#e<ʱ����>#n \r\n#b";
	chat += "\r\n#L0#Year 2021 - ƽ���Ĵ��f���";
	chat += "\r\n#L1#Year 2099 - ��ҹ�ۿ����";
	chat += "\r\n#L2#Year 2215 - �⵽�����ĳǅ^�̵�";
	chat += "\r\n#L3#Year 2216 - ���ЏU��";
	chat += "\r\n#L4#Year 2230 - Σ�U������d";
	chat += "\r\n#L5#Year 2503 - ��Ց�Ş";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	var mapid = 0;

	switch (selection) {
	case 0:
		mapid = 240070100;  //2021��ƽ���Ĵ��f���
		break;
	case 1:
		mapid = 240070200;  //2099����ҹ�ۿ����
		break;
	case 2:
		mapid = 240070300;  //2215���⵽�����ĳ����̵�
		break;
	case 3:
		mapid = 240070400;  //2216���ɷ���ĳ��н���·
		break;
	case 4:
		mapid = 240070500;  //2230��Σ�յ�������
		break;
	case 5:
		mapid = 240070600;  //2503�����ս����ͷ
		break;
		}
	if (mapid > 0) {
		cm.warp(mapid, 1);
	} else {
		cm.sendOk("Complete your mission first��");
		}
	cm.dispose();
}