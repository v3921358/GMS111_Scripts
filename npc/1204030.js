/*
	名字:	仓库桌子
	地圖:	危险的图书馆
	描述:	930010000
*/

function start() {
	if (cm.isQuestFinished(21752) && cm.getQuestStatus(21764) != 1) {//判断是否完成任务
		cm.forceStartQuest(21764, '1');
		cm.sendOk("封印石應該就在這附近……咦，怎麼沒有？ 難道已經被黑色之翼……？ 封印石被眼鏡將軍搶走了！ 去見見赫麗娜！");
	} else {
		cm.sendOk("倉庫的桌子………….");
		}
	cm.dispose();
}