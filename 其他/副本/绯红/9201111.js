/*
	名字:	海盗大师
	地圖:	凝聚力测试
	描述:	610030500
*/

function start() {
	if (cm.getPlayer().getMap().getId() == 610030500) {
		cm.sendOk("做海盜最擅長的事——尋找戰利品！小心！！！密室里暗藏着许多怪物，你必須尋找的文物被稱為“禁槍”，這是一種古代武器，是最優秀的海盜用來美化馬斯特裡亞海岸的武器——鋼拳傑克！它被埋在海底眾多寶箱中的一個裏。");
		cm.dispose();
	} else if (cm.getPlayer().getMap().getId() == 610030000) {
		cm.sendOk("Long ago, a strange warrior washed upon the shores of Masteria. This being claimed to be a member of a mysterious band of warriors that used claw-like weapons and projectile-based artillery to defeat foes. Known as 'Steel Fist Jack', his cunning and trickery in battle was devilishly effective. He eventually built a boat and left the Keep in search of his former crew and captain.");
		cm.dispose();
}
}