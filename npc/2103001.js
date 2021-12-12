/*
	名字:	秘密之墙
	地圖:	阿里安特民宅
	描述:	260000200
*/

function start() {
	if (cm.getQuestStatus(3927) == 1) {
		cm.sendOk("#b這麼秘密的牆壁都能被你發現。。。。 你的意圖我剛剛有偷聽到，沒事就別和我說話了！");
		cm.getPlayer().updateQuestCustomData(3927,"1");
	} else {
		cm.sendOk("只是一個普通的牆！");
		}
	cm.dispose();
}
