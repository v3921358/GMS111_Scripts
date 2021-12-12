/*
	名字:	罗宾
	地圖:	大蘑菇
	描述:	50000
*/

function start() {
	var chat = "我可以告訴你些冒險者的技巧唷!!\r\n#b";
	chat += "\r\n#L0#要怎麼移動？";
	chat += "\r\n#L1#我要如何擊退怪物？";
	chat += "\r\n#L2#我要怎麼撿起物品？";
	chat += "\r\n#L3#當我死掉會發生什麼事情？";
	chat += "\r\n#L4#我何時能選擇職業？";
	chat += "\r\n#L5#告訴我有關這個島嶼！";
	chat += "\r\n#L6#我要怎麼做才能成為戰士？";
	chat += "\r\n#L7#我要怎麼做才能成為弓箭手？";
	chat += "\r\n#L8#我要怎麼做才能成為魔法師？";
	chat += "\r\n#L9#我要怎麼做才能成為盜賊？";
	chat += "\r\n#L10#我要怎麼做才能成為海盜？";
	chat += "\r\n#L11#怎麼提升能力值？(S)";
	chat += "\r\n#L12#我要怎麼確認我撿起來的物品呢？";
	chat += "\r\n#L13#我要怎麼裝備物品？";
	chat += "\r\n#L14#我要怎麼確認我身上已經裝備的物品？";
	chat += "\r\n#L15#什麼是技能？(K)";
	chat += "\r\n#L16#我要怎麼前往維多利亞島？";
	chat += "\r\n#L17#楓幣是什麼？";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		cm.sendOk("好，我來教你如何移動。 使用 #方向左鍵#k 就能在平台上移動了，按下 #bAlt#k 可以進行跳躍。 有些鞋子能提升你的速度以及跳躍力。\r\n\r\n#fUI/DialogImage.img/Help/0#");
		break;
	case 1:
		cm.sendOk("好，擊退怪物很簡單，每個怪物有自己的血條，你可以使用武器將他們殺死。當然，如果怪物等級越高，你越難擊退它們。\r\n\r\n#fUI/DialogImage.img/Help/1#");
		cm.ShowWZEffect("UI/tutorial.img/20");
		break;
	case 2:
		cm.sendOk("接下來告訴你如何剪取物品，當你擊退怪物時，會有機會掉落寶物以及楓幣，當地上有物品時，按下#bZ#k 或是 數字鍵盤上的 #b0 #k來撿取物品。\r\n\r\n#fUI/DialogImage.img/Help/2#");
		cm.ShowWZEffect("UI/tutorial.img/21");
		break;
	case 3:
		cm.sendOk("你好奇地找出當你死會發生什麼嗎？ 當你的HP歸零時，你會變成幽靈。 而地上會出現一塊墓碑，而你無法移動，但是你還是可以聊天。");
		break;
	case 4:
		cm.sendOk("什麼時候你可以選擇你的職業？哈哈哈，別緊張，我的朋友啊～每個職業都有等級的限制。通常在#b8 - 10#k等之間會進行。");
		break;
	case 5:
		cm.sendOk("你想要知道這個島嶼嗎？ 這裏是楓之島，這座島嶼浮在天空上。由於浮在天空上，強大的怪物們無法靠近。這裏非常和平，非常適合新手。");
		break;
	case 6:
		cm.sendOk("你想成為#b戰士#k？ 摁...那我建議你到維多利亞港，尋找一個叫做#r勇士之村#k的戰士村莊以及去找尋#bDances with Balrog#k。 他會教你如何成為一個戰士。 喔對了，有件很重要的事，你必須達到等級10才能成為戰士！");
		break;
	case 7:
		cm.sendOk("你想當#b弓箭手#k嗎？ 在金銀島你會當弓箭手。 在金銀島南部有弓箭手的村落，射手村。 在那裡赫麗娜會告訴你當弓箭手的方法。 但關鍵是要當弓箭手你的等級應該是10級。");
		break;
	case 8:
		cm.sendOk("你想當#b魔法師#k是嗎？ 魔法師跟別的職業不同，是在8級轉職。你要去金銀島東部的魔法密林。 在那裡你會見到很多魔法師。 而且在那裡你要見漢斯。 他就會讓你當魔法師。");
		break;
	case 9:
		cm.sendOk("你想當#b飛俠#k嗎？ 那你要去金銀島西部的廢棄都市。 廢都的達克魯就會告訴你當飛俠的辦法。 關鍵的是為了當飛俠，你的等級應該是10級。");
		break;
	case 10:
		cm.sendOk("你想成為#b海盜#k嗎？ 想要轉職的話，必須到金銀島去。 在#r諾特勒斯#k的航海室裏，可以見到#b凱琳#。");
		break;
	case 11:
		cm.sendOk("你想知道如何提高你的角色的能力統計？ 首先按#bS#k以檢查出的能力的視窗。 每次你的水准的時候，你會獲得又名能力5點AP的。 分配這些AP的到您選擇的能力。 就這麼簡單。");
		cm.ShowWZEffect("UI/tutorial.img/24");
		break;
	case 12:
		cm.sendOk("你想知道在哪裡會確認你揀取的道具呢？ 你按下Z鍵可以揀取地上的物品，那些物品自動放到道具背包。 你按下I鍵可以確認背包的內容。");
		break;
	case 13:
		cm.sendOk("你想裝備道具嗎？ 先打開背包（I）吧。 那你可以確認你所有的道具然後按兩下一個道具吧。 那麼你就可以裝備該道具。 但你要注意的是大多裝備道具有職業，等級，能力等限制。 所以你先確認道具的裝備條件後再使用道具吧。 而且你打開裝備窗（E）按一下道具後直接把該道具移動到你想裝備的部分。");
		cm.ShowWZEffect("UI/tutorial.img/29");
		break;
	case 14:
		cm.sendOk("你想確認現在裝備的道具嗎？ 按下E鍵你可以打開裝備窗。 在那裡你就可以確認你的裝備。 在裝備窗按兩下道具的話，道具就被回到背包（I）。");
		break;
	case 15:
		cm.sendOk("轉職後你可以學習更多的專業技能，你可以設定快速鍵，讓這些技能使用起來更容易。 攻擊技能也不用按#b Ctrl鍵#k，只用快速鍵就可以發出。 按下#b K鍵#k你可以打開技能窗。");
		cm.ShowWZEffect("UI/tutorial.img/23");
		break;
	case 16:
		cm.sendOk("在南港乘船你會去金銀島。 按下#b W鍵#k你可以確認你現在的位置。 但要乘船需要一定的金幣，你在這裡打獵怪物賺錢吧。");
		cm.ShowWZEffect("UI/tutorial.img/26");
		break;
	case 17:
		cm.sendOk("金幣是冒險島的貨幣。 用金幣你可以購買各種道具。 打獵怪物或在商店賣道具或完成任務後你就可以獲得金幣。");
		break;
		}
	cm.dispose();
}