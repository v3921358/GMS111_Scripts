/*
	名字:	魔法图书馆角落
	地圖:	魔法图书馆
	描述:	910110000
*/

function start() {
	if (cm.isQuestActive(20718) && cm.getQuestStatus(20732) != 1) {
		cm.forceStartQuest(20732,"1");
		cm.spawnMonster(2220100, 7);  
		cm.sendOk("糟糕！ 去哪裡冒出來的怪物！");
	} else {
		cm.sendOk("魔法圖書館角落。。。。");
		}
	cm.dispose();
}
