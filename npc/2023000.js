/*
	����:	Σ�յ������ٳ��⳵
	�؈D:	������
	����:
*/

var status = -1;

var map;
var cost;
var location;
var mapname;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
		cm.sendOk("��......����ɡ��@�ǳ���܇��˾�rֵ�ķ��գ������h������ڣ�");
		cm.dispose();
	return;
	}

	if (status == 0) {
	switch (cm.getMapId()) {
		case 540000000: // CBD
			map = 541020000;
			cost = 30000;
			mapname = "������";
			break;
		case 240000000: // Leafre
			map = 240030000;
			cost = 55000;
			mapname = "��ľ��-��ɭ��·��";
			break;
		case 220000000: // Ludi
			map = 220050300;
			cost = 45000;
			mapname = "�r�gͨ��";
			break;
		case 211000000: // El Nath
			map = 211040200;
			cost = 45000;
			mapname = "��ѩ�{��II";
			break;
		case 105000000:
			map = 105030000;
			cost = 45000;
			mapname = "��һ����";
			break;
		case 105030000:
			map = 105000000;
			cost = 30000;
			mapname = "����֮��";
			break;
			default:
			}
			cm.sendNext("��ã��@�N�ӏ�����܇��������κ�Σ�U�^�� #m"+cm.getMapId()+"# �� #b#m"+map+"##k �� "+mapname+"! �\ݔ�M�� #b"+cost+" ����#k ���ܿ�������F�����K���࣬�����뷽���ͨ�^Σ�U�^���\ݔ!");
			}
	if (status == 1)
		cm.sendYesNo("#b����Ҫ֧������#k ���͵� #b#m"+map+"##k?");
	if (status == 2){
		if (cm.getMeso() < cost) {
		cm.sendOk("�㿴����]ɶ�X����֧��,�ܱ�Ǹ�҂�������ؤ��܇��,�L��!!!");
		cm.dispose();
	} else {
		cm.gainMeso(-cost);
		cm.warp(map, 0);
		cm.dispose();
}
}
}