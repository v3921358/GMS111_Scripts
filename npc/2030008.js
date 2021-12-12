/*
	名字:	阿杜比斯
	地圖:	扎昆入口
	描述:	211042300
*/

var status= -1;

var mapId = 211042300;
var stage;
var teethmode;

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
	cm.dispose();
	return;
	}
	if (mode == 1) {
	status++;
	} else {
	if (status == 3) {
	cm.sendOk("看来不想这样啊？如果想明白了可以来找我！");
	cm.dispose();
	}
	status--;
		cm.removeAll(4001015);
		cm.removeAll(4001016);
		cm.removeAll(4001018);
		}
	if (status == 0) {
		if (cm.getPlayerStat("LVL") >= 50) {
		if (cm.getQuestStatus(100200) != 2 && cm.getQuestStatus(100200) != 1) {
			cm.startQuest(100200);
			cm.sendOk("你想被允许挑战扎昆大怪物的任务吗？  嗯……。我#b阿杜比斯#k觉得你有能力承担这项任务。但是再这之前，你必须完成我交给你的任务。  但是你要小心点。");
			cm.dispose();
			return;
		} else if (cm.getQuestStatus(100201) == 1) {
			teethmode = 1;
			cm.sendNext("你们没有我需要的物品吗？这可不是慈善事业！");
		} else {
			if (cm.haveItem(4001109)) {
			cm.sendSimple("好。。。我看你们有充分的资格，你想挑战那一阶段？ #b\r\n#L0#废矿调查 (第一阶段)#l\r\n#L1#扎昆迷宫调查 (第二阶段)#l\r\n#L2#治炼邀请 (第三阶段)#l\r\n#L3#进去打扎昆#l\r\n#L4#花钱跳过任务#l");
		} else {
			cm.sendSimple("好。。。我看你们有充分的资格，你想挑战那一阶段？ #b\r\n#L0#废矿调查 (第一阶段)#l\r\n#L1#扎昆迷宫调查 (第二阶段)#l\r\n#L2#治炼邀请 (第三阶段)#l\r\n#L4#花钱跳过任务#l");
			}
			}
		if (cm.getQuestStatus(100201) == 2) { // They're done the quests
			teethmode = 2;
			}
		} else {
			cm.sendOk("按照你目前的情况，你还不能满足进行这项任务的能力，当你变的强大的时候，再来找我吧！");
			cm.dispose();
			}
	} else if (status == 1) {
		if (teethmode == 1) {
			if (cm.haveItem(4000082, 30)) { // take away items, give eyes of fire, complete quest
			if (!cm.canHoldByTypea(1, 2)) {
			cm.sendOk("请确认背包是否已经满了。");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(2, 2)) {
			cm.sendOk("请确认背包是否已经满了。");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(3, 2)) {
			cm.sendOk("请确认背包是否已经满了。");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(4, 2)) {
			cm.sendOk("请确认背包是否已经满了。");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(5, 2)) {
			cm.sendOk("请确认背包是否已经满了。");
			cm.dispose();
			return;
			}
			if (cm.canHold(4001017)) {
			cm.removeAll(4031061);
			cm.removeAll(4031062);
			cm.gainItem(4000082, -30);
			cm.gainItem(4001017, 5);
			cm.sendNext("冶炼好了。 看到左边的门了吗？它就是通往扎昆祭台的门。 不过你需要 #b#t4001017##k 才能进入裡面。让我看看有多少人能进入到那个恐怖的地方？");
			cm.completeQuest(100201);
			cm.completeQuest(100200);
		} else {
			cm.sendNext("嗯？你确定你有足够的背包空间吗？请再检查一下。");
			}
			cm.dispose();
		} else { // go get more
			cm.sendNext("你还没有带来我需要的东西吗？");
			cm.dispose();
			}
			return;
			}
		if (selection == 0) { //ZPQ
			if (cm.getParty() == null) { //no party
			cm.sendNext("你现在还没有一个组队，请组队后再和我谈话。");
			cm.safeDispose();
			return;
		} else if (!cm.isLeader()) { //not party leader
			cm.sendNext("你不是组队长，请让你的组队长和我谈话。");
			cm.safeDispose();
			return;
		} else {

			var party = cm.getParty().getMembers();
			mapId = cm.getMapId();
			var next = true;
			for (var i = 0; i < party.size(); i++) {
			if ((party.get(i).getLevel() < 50) || (party.get(i).getMapid() != mapId)) {
			next = false;
			}
			}
			if (next) {

		var em = cm.getEventManager("ZakumPQ");
			if (em == null) {
			cm.sendOk("我不能让你进入这个未知的世界，因为管理员还没有准备好开放。");
		} else {
			var prop = em.getProperty("state");
			if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap());
		} else {
			cm.sendOk("另一个组队已经开始了调查任务，请稍后再来。");
			}
			}
			cm.dispose();
		} else {
			cm.sendNext("请确保你所有组队员都达到50级以上。");
			cm.dispose();
			}
			}
		} else if (selection == 1) { //Zakum Jump Quest
			stage = 1;
			if (cm.haveItem(4031061) && !cm.haveItem(4031062)) {

			cm.sendYesNo("你已经成功通过了第一阶段。你还有很长的路才能到达扎昆的祭台。所以，你想好挑战下一个阶段了吗？");
		} else {
			if (cm.haveItem(4031062)) {
			cm.sendNext("你已经得到了#t4031062#，所以你不用再挑战此阶段了。");
		} else {
			cm.sendNext("请完成上一阶段的任务再来挑战此阶段。");
			}
			cm.dispose();
			}
	} else if (selection == 2) { //Golden Tooth Collection
		stage = 2;
		if (teethmode == 2 && cm.haveItem(4031061) && cm.haveItem(4031062)) {
			cm.sendYesNo("如果你想得到更多的#b火焰的眼#k， 你需要给我 #b30 个僵尸丢失的金齿#k。 你有更多的金牙要给我吗？");
		} else if (cm.haveItem(4031061) && cm.haveItem(4031062)) {
			cm.sendYesNo("好吧， 你已经完成了早期的阶段。  现在， 努力一点我可以帮你得到进入扎昆祭台所需要的 火焰的眼。 但是， 我的牙齿最近有点疼。  你见过一个牙医在冒险岛世界的故事吗？  哦，我听说殭尸们有几颗金牙。我需要你找到 #b30 个殭尸丢失的金齿#k 。这样我就可以自己製造一些假牙。然后我可以帮你拿到你想要的物品\r\n任务要求：\r\n#i4000082##b x 30 个");
		} else {
			cm.sendNext("请完成上一阶段的任务再来挑战此阶段。");
			cm.dispose();
			}
	} else if (selection == 3) { // Enter the center of Lava, quest
			var dd = cm.getEventManager("FireDemon");
			if (dd != null && cm.haveItem(4001109)) {
			dd.startInstance(cm.getPlayer());
		} else {
			cm.sendOk("暂时不能进入。");
			}
			cm.dispose();
	} else if (selection == 4) {
		if (cm.getQuestStatus(100200) == 2) {
			cm.sendOk("你已经完成了这个任务，进行此操作。");
			cm.dispose();
		} else {
			cm.sendYesNo("你想收买我？哈哈，可以啊！但你必须给我 #e30,000,000#n 金币，我就可以让你直接跳过任务。");
		status = 3;
		}
		}
	} else if (status == 2) {
		if (stage == 1) {
			cm.warp(280020000, 0); // Breath of Lava I
			cm.dispose();
		} else if (stage == 2) {
			if (teethmode == 2) {
		if (cm.haveItem(4031061, 1) && cm.haveItem(4031062, 1) && cm.haveItem(4000082, 30)) { // take away items, give eyes of fire, complete quest
			if (!cm.canHoldByTypea(1, 2)) {
			cm.sendOk("请确认背包是否已经满了。");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(2, 2)) {
			cm.sendOk("请确认背包是否已经满了。");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(3, 2)) {
			cm.sendOk("请确认背包是否已经满了。");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(4, 2)) {
			cm.sendOk("请确认背包是否已经满了。");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(5, 2)) {
			cm.sendOk("请确认背包是否已经满了。");
			cm.dispose();
			return;
			}
			if (cm.canHold(4001017)) {
			cm.gainItem(4031061, -1);
			cm.gainItem(4031062, -1);
			cm.gainItem(4000082, -30);
			cm.gainItem(4001017, 5);
			cm.sendNext("冶炼好了。 看到左边的门了吗？它就是通往扎昆祭台的门。 不过你需要 #b#t4001017##k 才能进入裡面。让我看看有多少人能进入到那个恐怖的地方？");
			cm.completeQuest(100201);
			cm.completeQuest(100200);
		} else {
			cm.sendNext("你好像没有足够的背包空间，请检查一下再来。");
			}
			cm.dispose();
		} else {
			cm.sendNext("我不认为你带来了30个 殭尸丢失的金牙呢……。请快点找来，我就会给你需要的东西。");
			cm.dispose();
			}
		} else {
			cm.startQuest(100201);
			cm.dispose();
			}
			}
	} else if (status == 4) { //bribe
		if (cm.getPlayer().getMeso() < 3000000) {
			cm.sendNext("你好像没有足够的枫币来支付，请检查一下再来。需要300万");
		} else if (!cm.canHold(4001017, 5)) {
			cm.sendNext("你好像没有足够的背包空间，请检查一下再来。");
		} else {
			cm.gainItem(4001017, 5);
			cm.completeQuest(100201);
			cm.completeQuest(100200);
			cm.forceCompleteQuest(7000);
			cm.completeQuest(100203);
			cm.sendOk("好了，祝你玩的愉快！");
			cm.gainMeso(-3000000);
			}
			cm.dispose();
		} else {
			cm.dispose();
}
}