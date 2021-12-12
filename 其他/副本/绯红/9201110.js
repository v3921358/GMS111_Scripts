/*
	名字:	魔法大师
	地圖:	凝聚力测试
	描述:	610030500
*/

function action(mode,type,selection) {
	switch(cm.getPlayer().getMapId()) {
		case 610030500:
			cm.sendOk("正如每個小偷都知道的那樣，最好的攻擊是你永遠看不到的，所以，為了更好地說明這一點，你將在一個未知的房間裏，消除一切障礙，證明自己的存在。");
			break;
		case 610030000:
			cm.sendOk("Once known as the 'Prince of Shadows', Grandmaster Ryo possessed supreme speed and power with short-ranged daggers and longer chain-like Claw. A part-time memeber of the Bosshunters, he was reowned for unparalleled ability to blend into the very nigth itself. His legend grew during a battle with Crimson Balrog, where he moved so swiftly that Balrog's attacks only caught air. Ryo also performed occasional 'retrievals' for those less fortunate than himself.");
			break;
		case 610030530:
			if (cm.isAllReactorState(6108004, 1) && !cm.haveItem(4001256, 1)) {
				cm.gainItem(4001256,1);
				cm.sendOk("Good job.");
			} else {
				cm.sendOk("用所有你力所能及的本領，消滅掉所有的眼睛，然後回來向我彙報，領取你應有的獎勵-絕殺暗爪。");
				}
				break;
				}
			cm.dispose();
}