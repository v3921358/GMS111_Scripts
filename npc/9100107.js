/*
	����:	����ת����
	�؈D:	����(Ů)
	����:	809000201
*/

function start() {
	if (cm.haveItem(5220000)) {
		cm.sendOk("����ʹ�� #v5220000:#�����@�e�����\��᣿");
	} else {
		cm.sendOk("�����ϛ]��#v5220000:#���Ҳ��ܞ�����գ�Ո�ȵ���؛��˾�IƱ��");
		cm.dispose();
}
}

function action(mode, type, selection) {
	var item;
		if (Math.floor(Math.random() * 300) == 0) {
		var rareList = new Array(1102042, 2049100);
		var item = cm.gainGachaponItem(rareList[Math.floor(Math.random() * rareList.length)], 1);
	} else {
		var itemList = new Array(2000004, 2022113, 2040019, 2040020, 1072238, 1040081, 1382002, 1442021, 1072239, 1002096, 1322010, 1472005, 1002021, 1422007, 1082148, 1102081, 1040043, 1002117, 1302013, 1462024, 1382003, 1051001, 1472000, 1002088, 1472003, 1002048, 1002178, 1040007, 1002131, 1002288, 1002183, 1372006, 1442004, 1040082, 1322003, 2022195, 1412001, 1472009, 1060088, 1002035, 1322009, 1472016, 1332011, 1032027, 1002214, 1312014, 1002120, 1322023, 1452010, 1002034, 1060025, 1082147, 1002055, 1060019, 1002180, 1002154, 1060068, 1462013);

		var item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	if (item != -1) {
		cm.gainItem(5220000, -1);
		cm.sendOk("You have obtained #b#t" + item + "##k��");
	} else {
		cm.sendOk("Ո�z��������Ʒ��Σ��������Ƿ���Ʊ�����ߎ���Ƿ��ѝM��");
		}
		}
	cm.dispose();
}