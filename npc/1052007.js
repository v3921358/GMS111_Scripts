/*
	����:	��Ʊ��
	�؈D:	������Ʊ��
	����:	103020000
*/

var status = 0;

var itemid = new Array(4031036,4031037,4031038,4031711);
var mapid = new Array(910360000,910360100,910360200,600010004);
var menu;
var status;
var sw;

function action(mode, type, selection) {
	sw = cm.getEventManager("Subway");
	if (mode == 0 && status ==1) {
	cm.dispose();
	} else {
	if (mode == 0) {
		cm.sendNext("You must have some business to take care of here, right?");
		cm.dispose();
		return;
		}
	if (mode == 1)
	status++;
	if (status == 1) {
		menu = "�����Ǽ�Ʊ�ڣ�����Ҫ���͵����\r\n";
		for (i=0; i < itemid.length; i++) {
		if(cm.haveItem(itemid[i])) {
			menu += "#L"+i+"##b#m"+mapid[i]+"##k#l\r\n";
			}
			}
			menu += "#L" + (itemid.length) + "##b����1����#k#l\r\n#L" + (itemid.length + 1) + "##b�϶��㳡#k#l\r\n#L"+ (itemid.length + 2) + "##bά���е��г�#k#l\r\n";
			cm.sendSimple(menu);
			}
	if (status == 2) {
		section = selection;
		if(section < (itemid.length - 1)) {
			cm.gainItem(itemid[selection],-1);
			cm.warp(mapid[selection]);
			cm.dispose();
			}
		else if (section == (itemid.length - 1)){
		if(sw == null) {
			cm.sendNext("Trains are currently down.");
			cm.dispose();
		} else if(sw.getProperty("entry").equals("true")) {
			cm.sendYesNo("It looks like there's plenty of room for this ride. Please have your ticket ready so I can let you in, The ride will be long, but you'll get to your destination just fine. What do you think? Do you want to get on this ride?");
		} else if(sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
			cm.sendNext("The subway is getting ready for takeoff. I'm sorry, but you'll have to get on the next ride. The ride schedule is available through the usher at the ticketing booth.");
			cm.dispose();
		} else {
			cm.sendNext("We will begin boarding 1 minutes before the takeoff. Please be patient and wait for a few minutes. Be aware that the subway will take off right on time, and we stop receiving tickets 1 minute before that, so please make sure to be here on time.");
			cm.dispose();
			}
		} else {
		if (section == itemid.length) { //����1����
			cm.warp(103020100, 2);
		} else if (section == (itemid.length + 1)) { //�϶��㳡
			cm.warp(103020020, 2);
		} else if (section == (itemid.length + 2)) { //ά���е��г�
			cm.warp(931050400, 1);
			}
			cm.dispose();
			}
			}
	if (status == 3) {
			cm.gainItem(itemid[section],-1);
			cm.warp(mapid[section]);
			cm.dispose();
}
}
}