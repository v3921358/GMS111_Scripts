/*
	名字:	米兰达
	地圖:	新叶城 购物中心
	描述:	600000001
*/

var status = -1;

var skin = Array(0, 1, 2, 3, 4, 5);

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("你好！歡迎來到護膚中心！你想擁有像我一樣緊致、健康的皮膚嗎？只要持有  #b#v5153015:##t5153015##k，就能让你擁有一直想要的那種肌膚~！");
	if (status == 1)
		cm.sendStyle("使用我們的專用機器，您可以在治療後提前看到自己。你想做什麼樣的皮膚護理？選擇你喜歡的風格。", skin);
	if (status == 2){
	if (cm.setAvatar(5153015, skin[selection]) == 1) {
		cm.sendOk("享受你新的和改善的皮膚!");
	} else {
		cm.sendOk("你沒有接受治療所需的護膚優惠券。對不起，恐怕我們不能為您做這件事。。。");
		}
		cm.dispose();
}
}