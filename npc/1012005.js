/*
	名字:	科洛伊
	地圖:	射手村公园
	描述:	100000200
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 13) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0){
		var chat = "你....是不是將我的孩子帶在身邊呢？藉由使用生命水的魔法，我成功研發出賦予玩偶生命的魔法。而人們將我獲得生命的孩子稱為#b寵物#k。如果持有寵物的話，任何事情都可以來問我。\r\n#b";
		chat += "\r\n#L0#請針對寵物說明。";
		chat += "\r\n#L1#寵物要怎麼養？";
		chat += "\r\n#L2#寵物也是會死嗎？";
		chat += "\r\n#L3#請告訴寵物貓,黑色貓的命令語。";
		chat += "\r\n#L4#請告訴寵物狗的命令語。";
		chat += "\r\n#L5#請告訴粉紅兔，白兔的命令語。";
		chat += "\r\n#L6#請告訴小魔龍命令語。";
		chat += "\r\n#L7#請告訴麋鹿的命令語。";
		chat += "\r\n#L8#請告訴黑色豬的命令語。";
		chat += "\r\n#L9#請告訴熊貓的命令語。";
		chat += "\r\n#L10#請告訴哈士奇的命令語。";
		chat += "\r\n#L11#請告訴迪諾龍、妮諾龍的命令語。";
		chat += "\r\n#L12#請告訴猴子的命令語。";
		chat += "\r\n#L13#請告訴電子雞的命令語。";
		chat += "\r\n#L14#請告訴白虎的命令語。";
		chat += "\r\n#L15#請告訴企鵝的密令語。";
		chat += "\r\n#L16#請告訴黃金豬的命令語。";
		chat += "\r\n#L17#請告訴機器人的命令語。";
		chat += "\r\n#L18#請告訴迷你雪吉拉的命令語。";
		chat += "\r\n#L19#請告訴巴洛谷的命令語。";
		chat += "\r\n#L20#請告訴神奇寶貝的命令語。";
		chat += "\r\n#L21#請告訴綠紅藍的命令語。";
		chat += "\r\n#L22#請告訴黑龍的命令語。";
		chat += "\r\n#L23#請告訴黑色鬼精靈的命令語。";
		chat += "\r\n#L24#請告訴豪豬的命令語。";
		chat += "\r\n#L25#請告訴雪寶的命令語。";
		chat += "\r\n#L26#請告訴臭鼬的命令語。";
		chat += "\r\n#L27#請告訴我轉移寵物親密度的方法。";
		cm.sendSimple(chat);
		}
	if (status == 1){
		if (selection == 0){
			status = 1;
			cm.sendNext("想對寵物有所瞭解嘛。很久以前，我再做出的木偶身上用了生命水，透過魔法成功的做出了魔法動物。雖然難以相信，木偶成了有生命的生命體。它們能聽懂人類的話，是很乖巧可愛的傢伙。");
			}
		if (selection == 1){
			status = 4;
			cm.sendNext("寵物對於特別的指令會有高興和難過等不同的反應。給寵物下指令後，聽主人的話，就會提高與主人之間的親密度。雙擊寵物的話就能看到親密度，等級，飽滿度等資訊。");
			}
		if (selection == 2){
			status = 9;
			cm.sendNext("死掉啊！其實這些小傢伙並不是真正活著的，所以它們會死，我也不知道對不對啊。這些小傢伙是將我的魔法力量與生命水的力量灌注在木偶身體裡做出來的。當然當它們活動的時候，是與其他動物沒什麼兩樣。");
			}
		if (selection == 3){
			cm.sendOk("#r褐色小貓﹐黑色小貓#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b座#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 4){
			cm.sendOk("#r褐色小狗#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 5){
			cm.sendOk("#r粉紅兔子，白色兔子#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b抱抱#k (等級 10 ~ 30)\r\n#b睡覺, 困了, 去睡覺#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 6){
			cm.sendOk("#r小魔龍#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 7){
			cm.sendOk("#r麋鹿#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b聖誕快樂，聖誕快樂#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 11 ~ 30)\r\n#b寂寞, 孤獨#k (等級 11 ~ 30)\r\n#b撒嬌#k (等級 11 ~ 30)\r\n#b走#k (等級 21 ~ 30)");
			cm.dispose();
			}
		if (selection == 8){
			cm.sendOk("#r黑色豬#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 9){
			cm.sendOk("#r熊貓#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 10){
			cm.sendOk("#r哈士奇#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 11){
			cm.sendOk("#r迪諾龍、妮諾龍#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 12){
			cm.sendOk("#r猴子#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 13){
			cm.sendOk("#r電子雞#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 14){
			cm.sendOk("#r白虎#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 15){
			cm.sendOk("#r企鵝#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 16){
			cm.sendOk("#r黃金豬#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 17){
			cm.sendOk("#r機器人#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 18){
			cm.sendOk("#r迷你雪吉拉#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 19){
			cm.sendOk("#r巴洛谷#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 20){
			cm.sendOk("#r神奇寶貝#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 21){
			cm.sendOk("#r綠紅藍#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 22){
			cm.sendOk("#r黑龍#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 23){
			cm.sendOk("#r黑色鬼精靈#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 24){
			cm.sendOk("#r豪豬#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 25){
			cm.sendOk("#r雪寶#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 26){
			cm.sendOk("#r臭鼬#k的指令語旁邊的等級意味著能夠使用那條指令的寵物的等級。\r\n#b坐#k (等級 1 ~ 30)\r\n#b不要, 住手, 不行, 不可以#k (等級 1 ~ 30)\r\n#b笨蛋, 傻瓜, 討厭#k (等級 1 ~ 30)\r\n#b愛你#k (等級 1~30)\r\n#b便便#k (等級 1 ~ 30)\r\n#b說, 說吧, 說話#k (等級 10 ~ 30)\r\n#b撒嬌#k (等級 10 ~ 30)\r\n#b站, 站起來, 起來#k (等級 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 27){
			status = 12;
			cm.sendNext("為了移動寵物能力值需要魔法卷軸，帶著這本書給艾靈森林的妖精瑪莉的話，就可以將你真心培育的寵物等級和親密度移動其他寵物身上去。只給對於寵物如此關心的你而已，免費給你有點困難，所以只要支付25萬楓幣的話，就可以把書讓給你，對了，即使有咒文書，如果沒有可移動的新寵物，也是沒有用的。");
			}
			}
		if (status == 2){
			cm.sendNext("可是那生命水只在世界樹的根部長出來一點點而已，不能賦予那些孩子太多的時間真可惜啊！不過就算變成木偶也能再賦予它生命，在一起要好好疼它哦。");
			}
		if (status == 3){
			cm.sendPrev("對了小傢伙隊特別指令會有所反應的。會鬧也會學乖一切都靠你發現了。小傢伙們很害怕離開主人身邊，要經常疼它們。別讓它們孤獨哦。");
			cm.dispose();
			}
		if (status == 5){
			cm.sendNext("經常和寵物聊天，關心它，親密度就會提高，寵物的等級也會跟著提高。親密度提高到某一程度時，寵物就會升級，等級高的話，還會學人說話，要努力撫養，當然不是那麼容易吧。");
			}
		if (status == 6){
			cm.sendNextPrev("雖然是木偶，可是這些傢伙也有生命，也會覺得肚子餓的。#b飽滿度#k是顯示肚子飽的程度的，最高是100，降到一定程度的，寵物會不聽話等等，變得神經質呢。要多花點心思啊。");
			}
		if (status == 7){
			cm.sendNextPrev("對了！寵物不大喜歡吃人類的食物。我的徒弟#b科爾#k在弓箭手村的市集裡賣#b寵物食品#k，如果需要食物就到弓箭手村去。最好先買好食物，以防寵物失去力氣哦。");
			}
		if (status == 8){
			cm.sendPrev("阿對了！如果太久沒餵寵物吃東西的話它會自己回家。雖然下次將它拿出來在餵它也可以，但因為對健康不好，所以每一餐都要準時餵食喔。解說能夠理解嗎?");
			cm.dispose();
			}
		if (status == 10){
			cm.sendNext("過一段時間後對了！這些傢伙會停掉的。就會恢復到原本木偶的樣子。魔法的力量和生命水用光的話，不過並不是永遠停掉哦，再給它擦上生命水的話，就能復活哦。");
			}
		if (status == 11){
			cm.sendPrev("雖然能讓它們恢復過來，不過停止還是讓人滿傷心的鎖已在它們活著的時候一定要好好愛護它們啊。可要記得按時餵它們。有一個生命，一直追隨你、關注你，你不覺得這是非常快樂的事情嗎？");
			cm.dispose();
			}
		if (status == 13){
			cm.sendYesNo("#v4160011:#將減去#b 250000#k楓幣，確定要購買嗎？");
			}
		if (status == 14){
			if (cm.getMeso() < 250000) {
			cm.sendOk("請確認是否有足夠的楓幣，或者其他欄是否滿了。");
		} else {
			cm.gainMeso(-250000);
			cm.gainItem(4160011, 1);
			}
			cm.dispose();
}
}