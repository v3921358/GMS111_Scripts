
load('nashorn:mozilla_compat.js');
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server.life);


var status;
var h1=-1;
var h2=-1;

function start(){
	status = -1;
	str = "";
	select = -1;
	str += "\r\n#L1#掉落查詢#l";
	cm.sendSimple("#r掉落查詢系統可提共您物品掉落的準確資訊:#k" + str);
	
}

function action(mode,type,selection){
	if (mode == 1) {
		status++;
	} else {
		status--;
		cm.dispose();
		return;
	}
	
	switch (status) {
	case 0:
		str = selection;
		cm.sendGetText("請輸入想查詢道具:");
		break;
	case 1:
		cm.sendOk(cm.searchData(str, cm.getText()));
		break;
	case 2:
	    h2=selection;
		if (!cm.foundData(str, cm.getText())) {
			cm.dispose();
			return;
		}else
		cm.getMobs(h2);
		cm.dispose();
	}
}
