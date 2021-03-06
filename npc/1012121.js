/*
	名字:	服装收纳箱
	地圖:	射手村市场
	描述:	100000100
*/

var status= -1;

var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || mode <= 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
		text = "\t\t\t\t#e- 便捷功能 -#n\r\n\r\n#b";
		text += "\t\t\t#L0#回收包裹内指定道具#l\r\n";
		text += "\r\n\r\n\r\n\r\n";
		cm.sendSimple(text);
		} else {
		if (selstatus == -1) {
			selstatus = selection;
			}
			switch (selstatus) {
		case 0:
			deleteItemBySlot(selection);
			break;
		case 1:
			cm.openNpc(cm.getNpc(), 501);
}
}
}

function deleteItemBySlot(selection) {
	if (status == 1) {
		text = "\t\t#e- 请选择要回收的道具类型 -#n\r\n\r\n#b";
		text += "\t\t\t\t#L1#装备栏#l\r\n";
		text += "\t\t\t\t#L2#消耗栏#l\r\n";
		text += "\t\t\t\t#L4#其它栏#l\r\n";
		text += "\t\t\t\t#L3#设置栏#l\r\n";
		text += "\t\t\t\t#L5#特殊栏#l\r\n";
		cm.sendSimple(text);
		}
	if (status == 2) {
		inventoryType = selection;
		itemList = cm.getInventory(inventoryType).list().iterator();
		text = "\t\t#e- 请选择要回收的道具 -#n\r\n\r\n#b";
		var indexof = 1;
		while (itemList.hasNext()) {
		var item = itemList.next();
		text += "#L" + item.getPosition() + "##v" + item.getItemId() + "#";
	if (indexof > 1 && indexof % 5 == 0) {
		text += "\r\n";
		}
		indexof++;
		}
		cm.sendSimple(text);
		}
	if (status == 3) {
		var item = cm.getInventory(inventoryType).getItem(selection);
		deleteSlot = selection;
		deleteQuantity = item.getQuantity();
		text = "#e确定要回收#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "个 #k吗？";
		cm.sendNextPrev(text);
		}
	if (status == 4) {
		cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
		cm.sendOk("回收成功，祝你游戏愉快~");
		status = 0;
	}
}