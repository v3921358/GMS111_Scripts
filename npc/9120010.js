/*
	����:	���ؼ�
	�؈D:	�Ѻ��̵��
	����:	801000300
*/

var requiredItem  = 0;
var lastSelection = 0;
var prizeItem     = 0;
var prizeQuantity = 0;
var info;
var itemSet;
var reward;

function start() {
	var eQuestChoice = makeChoices(eQuestChoices);
	cm.sendSimple(eQuestChoice);
}

function action(mode, type, selection) {
		requiredItem = eQuestChoices[selection];
		reward = eQuestPrizes[selection];
		itemSet = (Math.floor(Math.random() * reward.length));
		prizeItem = reward[itemSet][0];
		prizeQuantity = reward[itemSet][1];
		if (!cm.canHold(prizeItem)){
			cm.sendNext("ʲ�N�� �������b�䡢ʹ�õȎ���ѝM���Ҳ��ܽo�㪄� Ո�R��ȥ������");
		} else if (checkQuantity(requiredItem) >= 100){   // check they have >= 100 in Inventory
			cm.gainItem(requiredItem,-100);
			cm.gainItem(prizeItem,prizeQuantity);
			cm.sendOk("��......�����������@��С����......�@�˿ښ⡣������ֻ���J���@��һ���˜ʵ�Ʒ�|�Ŀ�����N���@�e�� \r\n#t"+ prizeItem +"# �o�㡣");
		} else{
			cm.sendOk("�٣����Ԟ����ڎ�ʲ�N�� ȥ�_һ����֪�������fʲ�N���ˡ� �����ң�");
			}
		cm.safeDispose();
}


function makeChoices(a){
	var result  = "������ռ���100����ͬ���Ŀ��Ȼ���ҿ��ܕ��c��ƵĖ|���M�н��ס� ʲ�N�� �����ܲ�֪�������������Z�ԣ����������ؓ��ġ� �F�ڣ��҂����׺Æ᣿\r\n";
	for (var x = 0; x< a.length; x++){
	result += " #L" + x + "##v" + a[x] + "##t" + a[x] + "##l\r\n";
	}
	return result;
}

function checkQuantity(itemId){
	var itemCount = 0;
	var iter = cm.getInventory(4).listById(itemId).iterator();
	while (iter.hasNext()) {
	itemCount += iter.next().getQuantity();
	}
	return itemCount;
}

var eQuestChoices = new Array (4000064,4000065,4000066,4000075,4000077,4000089,4000090,4000091,4000092,4000093,4000094); 

var eQuestPrizes = new Array();

eQuestPrizes[0] = new Array ([2000000,1],  // Red Potion
	[2000006,1],	// Mana Elixir
	[2000003,5], 	// Blue Potion
	[2000002,5],	// White Potion
	[4020006,2],	// Topaz Ore
	[4020000,2],	// Garnet Ore
	[4020004,2],	// Opal Ore
	[2000003,10],	// Blue Potion
	[2000003,20],	// Blue Potion
	[2000002,10],	// White Potion
	[2000002,20],	// White Potion
	[2022026,15],	// Yakisoba
	[2022024,15],	// Takoyaki (Octopus Ball)
	[1002393,1]);	// Pink Bandana
eQuestPrizes[1] = new Array ([2000006,1],	// Mana Elixir
	[2000002,5],	// White Potion
	[4020006,2],	// Topaz Ore
	[2000002,10],	// White Potion
	[2000003,10],	// Blue Potion
	[2000002,20],	// White Potion
	[2000003,20],	// Blue Potion
	[2022024,15],	// Takoyaki (Octopus Ball)
	[2022026,15]);	// Yakisoba
eQuestPrizes[2] = new Array ([2000006,1],	// Mana Elixir
	[2000002,5],	// White Potion
	[2000003,5],	// Blue Potion
	[4020000,2],	// Garnet Ore
	[2000003,10],	// Blue Potion
	[2000002,10],	// White Potion
	[2000003,20],	// Blue Potion
	[2000002,20],	// White Potion
	[2022024,15],	// Takoyaki (Octopus Ball)
	[1002393,1]);	// Pink Bandana
eQuestPrizes[3] = new Array ([2060003,1000],	// Red Arrow for Bow
	[4010004,2],	// Silver Ore
	[4010006,2],	// Gold Ore
	[2022022,5],	// Tempura (Dish)
	[2022022,10],	// Tempura (Dish)
	[2022022,15],	// Tempura (Dish)
	[2022019,5],	// Kinoko Ramen (Pig Bone)
	[2022019,10],	// Kinoko Ramen (Pig Bone)
	[2022019,15],	// Kinoko Ramen (Pig Bone)
	[2001002,15],	// Red Bean Sundae
	[2001001,15],	// Ice Cream Pop
	[1102040,1],	// Yellow Adventurer Cape
	[1102043,1]);	// Brown Adventurer Cape
eQuestPrizes[4] = new Array ([2000003,1],	//Blue Potion
	[2022019,5],	// Kinoko Ramen (Pig Bone)
	[2000006,5],	// Mana Elixir
	[4010002,2],	// Mithril Ore
	[4010003,2],	// Adamantium Ore
	[2000006,10],	// Mana Elixir
	[2000006,15],	// Mana Elixir
	[2022019,10],	// Kinoko Ramen (Pig Bone)
	[2022019,15],	// Kinoko Ramen (Pig Bone)
	[2060003,1000],	// Red Arrow for Bow
	[2061003,1000],	// Blue Arrow for Crossbow
	[1082150,1],	// Grey Work Gloves
	[1082149,1]);	// Brown Work Gloves
eQuestPrizes[5] = new Array ([2000006,1],	// Mana Elixir
	[2000003,5],	// Blue Potion
	[2000002,5],	// White Potion
	[2000003,10],	// Blue Potion
	[2000003,20],	// Blue Potion
	[2000002,10],	// White Potion
	[2000002,15],	// White Potion
	[2060003,1000],	// Red Arrow for Bow
	[2061003,1000],	// Blue Arrow for Crossbow
	[2022026,15],	// Yakisoba
	[1002395,1]);	// Purple Bandana
eQuestPrizes[6] = new Array ([2022019,5],	// Kinoko Ramen (Pig Bone)
	[2000006,5],	// Mana Elixir
	[4010003,2],	// Adamantium Ore
	[2022019,10],	// Kinoko Ramen (Pig Bone)
	[2022019,15],	// Kinoko Ramen (Pig Bone)
	[2000006,10],	// Mana Elixir
	[2000006,15],	// Mana Elixir
	[2060003,1000],	// Red Arrow for Bow
	[2061003,1000]);	// Blue Arrow for Crossbow
eQuestPrizes[7] = new Array ([2000003,1],	// Blue Potion
	[2000006, 1], // Mana Elixir
	[2022019, 1], // Kinoko Ramen (Pig Bone)
	[2000006, 5], // Mana Elixir
	[4010002, 2], // Mithril Ore
	[4020001, 2], // Amethyst Ore
	[2022019, 10], // Kinoko Ramen (Pig Bone)
	[2022019, 15], // Kinoko Ramen (Pig Bone)
	[2000006, 10], // Mana Elixir
	[2000006, 15], // Mana Elixir
	[2060003, 1000], // Red Arrow for Bow
	[2061003, 1000]); // Blue Arrow for Crossbow
eQuestPrizes[8] = new Array ([2022019,5],	// Kinoko Ramen (Pig Bone)
	[2022022,5],	// Tempura (Dish)
	[4010006,2],	// Gold Ore
	[2022019,10],	// Kinoko Ramen (Pig Bone)
	[2022019,15],	// Kinoko Ramen (Pig Bone)
	[2022022,10],	// Tempura (Dish)
	[2022022,15],	// Tempura (Dish)
	[2001002,15],	// Red Bean Sundae
	[2001001,15],	// Ice Cream Pop
	[1102043,1]);	// Brown Adventurer Cape
eQuestPrizes[9] = new Array ([4010004,5],	// Silver Ore
	[2022019,5],	// Kinoko Ramen (Pig Bone)
	[2022022,15],	// Tempura (Dish)
	[2022019,15],	// Kinoko Ramen (Pig Bone)
	[2001002,15],	// Red Bean Sundae
	[2001001,15],	// Ice Cream Pop
	[1102043,1]);	// Brown Adventurer Cape
eQuestPrizes[10] = new Array   ([2000006,1],	// Mana Elixir
	[4020008,15],	// Black Crystal Ore
	[2022018,5],	// Kinoko Ramen (Roasted Pork)
	[2022018,10],	// Kinoko Ramen (Roasted Pork)
	[2022018,15],	// Kinoko Ramen (Roasted Pork)
	[2022000,10],	// Pure Water
	[2022000,20],	// Pure Water
	[2022025,15]);	// Takoyaki (Jumbo)