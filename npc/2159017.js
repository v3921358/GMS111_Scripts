/*
	名字:	阿俊
	地圖:	冰封诅咒原野
	描述:	932000300
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.warpParty(932000400,0);
		cm.sendOk("....");
	} else {
		cm.sendOk("不要被它騙了，這一切都是謊言，請消滅掉這個冰騎士。");
		}
	cm.dispose();
}
