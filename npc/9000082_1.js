/*
	����:	��
	�؈D:	950101000
	����:	950101000
*/

function start() {
	var chat = "������������S��y��20��#v4001433:##b#t4001433##k����t������悉�����ķ�ӡ���؁���\r\n#b";
	chat += "\r\n#L0##v03994115#;
	chat += "#L1##v03994116#;
	chat += "#L2##v03994117#;
	chat += "#L3##v03994118#;
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0: {
		var em = cm.getEventManager("Ravana_EASY");
		em.startInstance(cm.getPlayer());
		break;
		}
	case 1: {
		var em = cm.getEventManager("Ravana_MED");  
		em.startInstance(cm.getPlayer());
		break;
		}
	case 2: {
		var em = cm.getEventManager("Ravana_HARD");
		em.startInstance(cm.getPlayer());
		break;
		}
	case 3: {
		var em = cm.getEventManager("Ravana_HELL");
		em.startInstance(cm.getPlayer());
		break;
		}
		}
	cm.dispose();
}