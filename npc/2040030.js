/*
	����:	����
	�؈D:	��������
	����:	220000400
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == -1) {
	cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
	}
	if (mode == 1)
	status++;
	else
	status--;
	if(status == 0){
		var chat = "���ã����ǾS�������u����Ҫ���ӡ� #b������Ů#k���ҽе��@�e�������@�e�Č����Ƿ�õ������ ���ܞ�����Щʲ�N��\r\n#b";
		chat += "\r\n#L0#My pet has turned back into a doll\r\nPlease help me make it move again!";
		chat += "\r\n#L1#���V�Ҹ����P춌������";
		chat += "\r\n#L2#�����N�B���";
		chat += "\r\n#L3#����Ҳ�����᣿";
		chat += "\r\n#L4#Ո���V����؈,��ɫ؈�������Z��";
		chat += "\r\n#L5#Ո���V���ﹷ�������Z��";
		chat += "\r\n#L6#Ո���V�ۼt�ã����õ������Z��";
		chat += "\r\n#L7#What are the commands for Mini Cargo?";
		chat += "\r\n#L8#Ո���V��ʿ��������Z��";
		chat += "\r\n#L9#Ո���V��ɫ�i�������Z��";
		chat += "\r\n#L10#Ո���V��؈�������Z��";
		chat += "\r\n#L11#Ո���V���Z�������Z���������Z��";
		chat += "\r\n#L12#Ո���V��¹�������Z��";
		chat += "\r\n#L13#Ո���V���ӵ������Z��";
		chat += "\r\n#L14#Ո���V�C���˵������Z��";
		chat += "\r\n#L15#What are the commands for Elephant?";
		chat += "\r\n#L16#Ո���V�S���i�������Z��";
		chat += "\r\n#L17#Ո���V���Z�������Z��";
		chat += "\r\n#L18#Ո���V����ѩ�����������Z��";
		chat += "\r\n#L19#Ո���V����ȵ������Z��";
		chat += "\r\n#L20#Ո���V���挚ؐ�������Z��";
		chat += "\r\n#L21#Ո���V�G�t�{�������Z��";
		chat += "\r\n#L22#Ո���V�����������Z��";
		chat += "\r\n#L23#Ո���Vѩ���������Z��";
		chat += "\r\n#L24#What are the commands for Sun Wu Kong?";
		chat += "\r\n#L25#Ո���V��ɫ���`�������Z��";
		chat += "\r\n#L26#What are the commands for Crystal Rudolph?";
		chat += "\r\n#L27#What are the commands for Kino?";
		chat += "\r\n#L28#What are the commands for White Duck?";
		chat += "\r\n#L29#What are the commands for Pink Bean?";
		chat += "\r\n#L30#Ո���V���i�������Z��";
		cm.sendSimple(chat);
		}
	if (status == 1){
		if (selection == 0){
			cm.sendOk("I'm Wisp, continuing on with the studies that my Master Mar the Fairy assigned me. There seems to be a lot of pets even her in Ludibrium. I need to get back to my studies, so if you'll excuse me...");
			cm.dispose();
			}
		if (selection == 1){
			status = 1;
			cm.sendNext("Hmmmm,you must have a lot of questions regarding the pets. Long ago, a person by the name #bCloy#k, sprayed Water of Life on it, and cast spell on it to create a magical animal. I know it sounds unbelievable, but it's a doll that became an actual living thing. They understand and follow people very well.");
			}
		if (selection == 2){
			status = 3;
			cm.sendNext("Depending on the command you give, pets can love it, hate, and display other kinds of reactions to it. If you give the pet a command and it follows you well, your closeness goes up. Double click on the pet and you can check the closeness, level, fullness and etc...");
			}
		if (selection == 3){
			status = 7;
			cm.sendNext("Dying... well, they aren't technically ALIVE per se, so I don't know if dying is the right term to use. They are dolls with my magical power and the power of Water of Life to become a live object. Of course while it's alive, it's just like a live animal...");
			}
		if (selection == 4){
			cm.sendOk("These are the commands for #rBrown Kitty and Black Kitty#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (level 1 ~ 30)\r\n#biloveyou#k (level 1~30)\r\n#bpoop#k (level 1 ~ 30)\r\n#btalk, say, chat#k (level 10 ~ 30)\r\n#bcutie#k (level 10 ~ 30)\r\n#bup, stand, rise#k (level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 5){
			cm.sendOk("These are the commands for #rBrown Puppy#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (level 1 ~ 30)\r\n#bstupid, ihateyou, baddog, dummy#k (level 1 ~ 30)\r\n#biloveyou#k (level 1~30)\r\n#bpee#k (level 10 ~ 30)\r\n#btalk, say, chat, bark#k (level 10 ~ 30)\r\n#bdown#k (level 10 ~ 30)\r\n#bup, stand, rise#k (level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 6){
			cm.sendOk("These are the commands for #rPink Bunny and White Bunny#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (level 1 ~ 30)\r\n#bup, stand#k (level 1 ~ 30)\r\n#biloveyou#k (level 1~30)\r\n#bpoop#k (level 1 ~ 30)\r\n#btalk, say, chat#k (level 10 ~ 30)\r\n#bhug#k (level 10 ~ 30)\r\n#bsleep, sleepy, gotobed#k (level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 7){
			cm.sendOk("These are the commands for #rMini Cargo#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (level 1 ~ 30)\r\n#bup, stand#k (level 1 ~ 30)\r\n#biloveyou#k (level 1~30)\r\n#bpee#k (level 1 ~ 30)\r\n#btalk, say, chat#k (level 10 ~ 30)\r\n#bthelook, charisma#k (level 10 ~ 30)\r\n#bgoodboy, good#k (level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 8){
			cm.sendOk("These are the commands for #rHusky#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (level 1 ~ 30)\r\n#bstupid, ihateyou, baddog, dummy#k (level 1 ~ 30)\r\n#biloveyou#k (level 1 ~ 30)\r\n#bpee#k (level 1 ~ 30)\r\n#btalk, say, chat, bark#k (level 10 ~ 30)\r\n#bdown#k (level 10 ~ 30)\r\n#bup, stand, rise#k (level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 9){
			cm.sendOk("These are the commands for #rBlack Pig#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (level 1 ~ 30)\r\n#bpoop#k (level 1 ~ 30)\r\n#biloveyou#k (level 1~30)\r\n#bpoop#k (level 1 ~ 30)\r\n#bhand, up, stand#k (level 1 ~ 30)\r\n#btalk, say, chat, hug#k (level 10 ~ 30)\r\n#bsmile#k (level 10 ~ 30)\r\n#blaugh, smile#k (level 10 ~ 30)\r\n#bcharisma, sleep, sleepy, gotobed#k(level 20~30)");
			cm.dispose();
			}
		if (selection == 10){
			cm.sendOk("These are the commands for #rPanda#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (level 1 ~ 30)\r\n#biloveyou#k (level 1 ~ 30)\r\n#bpee#k(level 1 ~ 30)\r\n#bup, stand, hug#k (level 1 ~ 30)\r\n#btalk, chat#k (level 10 ~ 30)\r\n#bplay#k (level 20 ~ 30)\r\n#bmeh, bleh#k (level 10 ~ 30)\r\n#bsleep, sleepy, gotobed#k (level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 11){
			cm.sendOk("These are the commands for #rDino Boy and Dino Girl#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no,, stupid, ihateyou, badboy, badgirl#k (evel 1 ~ 30)\r\n#biloveyou, dummy#k (level 1 ~ 30)\r\n#bpoop#k (level 1 ~ 30)\r\n#btalk, chat(level 10 ~ 30)\r\n#bsmile, laugh#k (level 1 ~ 30)\r\n#bcutie#k (level 10 ~ 30)\r\n#bsleep, nap, sleepy#k (level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 12){
			cm.sendOk("These are the commands for #rRudolph#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k(level 1 ~30) \r\n#bbad, no, badgirl, badboy#k(level 1~30)\r\n#bup, stand#k(level 1 ~ 30) \r\n#bstupid, ihateyou, dummy#k(level 1 ~ 30) \r\n#bmerryxmas, merrychristmas#k(level 11 ~ 30)\r\n#biloveyou#k(level 1 ~ 30)\r\n#bpoop#k(level 1 ~ 30)\r\n#btalk, say, chat#k(level 11 ~ 30)\r\n#blonely, alone, down, rednose#k(level 11~30),\r\n#bcutie#k(level 11 ~ 30)\r\n#bmush, go#k(level 21 ~ 30)");
			cm.dispose();
			}
		if (selection == 13){
			cm.sendOk("These are the commands for #rMonkey#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit, rest#k (level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (level 1 ~ 30)\r\n#bup, stand#k(level 1 ~ 30)\r\n#biloveyou, pee#k (level 1 ~ 30)\r\n#btalk, say, chat#k (level 11 ~ 30)\r\n#bplay, melong#k (level 11 ~ 30)\r\n#bsleep, sleepy, gotobed#k (level 21 ~ 30)");
			cm.dispose();
			}
		if (selection == 14){
			cm.sendOk("These are the commands for #rRobot#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit, stand, rise#k (level 1 ~ 30)\r\n#battack, bad, no, badboy#k (level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (level 1 ~ 30)\r\n#biloveyou, good#k (level 1 ~ 30)\r\n#bspeak, disguise#k (level 11 ~ 30)");
			cm.dispose();
			}
		if (selection == 15){
			cm.sendOk("These are the commands for #rElephant#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit, rest#k (level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (level 1 ~ 30)\r\n#bup, stand, rise#k(level 1 ~ 30)\r\n#biloveyou, pee#k (level 1 ~ 30)\r\n#btalk, say, chat, play#k (level 11 ~ 30)\r\n#bsleep, sleepy, gotobed#k (level 21 ~ 30)");
			cm.dispose();
			}
		if (selection == 16){
			cm.sendOk("These are the commands for #rGolden Pig#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (level 1 ~ 30)\r\n#bpoop, iloveyou#k (level 1 ~ 30)\r\n#btalk, say, chat#k (level 11 ~ 30)\r\n#bloveme, hugme#k (level 11 ~ 30)\r\n#bsleep, sleepy, gotobed#k (level 21 ~ 30)\r\n#bimpressed, outofhere#k (level 21 ~ 30)\r\n#broll, showmethemoney#k (level 21 ~ 30)");
			cm.dispose();
			}
		if (selection == 17){
			cm.sendOk("These are the commands for #rPenguin#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (level 1 ~ 30)\r\n#bpoop#k (level 1 ~ 30)\r\n#bup, stand, rise#k (level 1 ~ 30)\r\n#biloveyou#k (level 1 ~ 30)\r\n#btalk, chat, say#k (level 10 ~ 30)\r\n#bhug, hugme#k (level 10 ~ 30)\r\n#bwing, hand#k (level 10 ~ 30)\r\n#bsleep#k (level 20 ~ 30)\r\n#bkiss, smooch, muah#k (level 20 ~ 30)\r\n#bfly#k (level 20 ~ 30)\r\n#bcute, adorable#k (level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 18){
			cm.sendOk("These are the commands for #rMini Yeti#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (level 1 ~ 30)\r\n#bpoop#k (level 1 ~ 30)\r\n#bdance, boogie, shakeit#k (level 1 ~ 30)\r\n#bcute, cutie, pretty, adorable#k (level 1 ~ 30)\r\n#biloveyou, likeyou, mylove#k (level 1 ~ 30)\r\n#btalk, chat, say#k (level 10 ~ 30)\r\n#bsleep, nap#k (level 10 ~ 30)");
			cm.dispose();
			}
		if (selection == 19){
			cm.sendOk("These are the commands for #rJr. Balrog#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bliedown#k (level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (level 1 ~ 30)\r\n#biloveyou|mylove|likeyou#k (level 1 ~ 30)\r\n#bcute|cutie|pretty|adorable#k (level 1 ~ 30)\r\n#bpoop#k (level 1 ~ 30)\r\n#bsmirk|crooked|laugh#k (level 1 ~ 30)\r\n#bmelong#k (level 11 ~ 30)\r\n#bgood|thelook|charisma#k (level 11 ~ 30)\r\n#bspeak|talk|chat|say#k (level 11 ~ 30)\r\n#bsleep|nap|sleepy#k (level 11 ~ 30)\r\n#bgas#k (level 21 ~ 30)");
			cm.dispose();
			}
		if (selection == 20){
			cm.sendOk("These are the commands for #rBaby Dragon#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (level 1 ~ 30)\r\n#biloveyou|loveyou#k (level 1 ~ 30)\r\n#bpoop#k (level 1 ~ 30)\r\n#bstupid|ihateyou|dummy#k (level 1 ~ 30)\r\n#bcutie#k (level 11 ~ 30)\r\n#btalk|chat|say#k (level 11 ~ 30)\r\n#bsleep|sleepy|gotobed#k (level 11 ~ 30)");
			cm.dispose();
			}
		if (selection == 21){
			cm.sendOk("These are the commands for #rGreen/Red/Blue Dragon#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 15 ~ 30)\r\n#bno|bad|badgirl|badboy#k (level 15 ~ 30)\r\n#biloveyou|loveyou#k (level 15 ~ 30)\r\n#bpoop#k (level 15 ~ 30)\r\n#bstupid|ihateyou|dummy#k (level 15 ~ 30)\r\n#btalk|chat|say#k (level 15 ~ 30)\r\n#bsleep|sleepy|gotobed#k (level 15 ~ 30)\r\n#bchange#k (level 21 ~ 30)");
			cm.dispose();
			}
		if (selection == 22){
			cm.sendOk("These are the commands for #rBlack Dragon#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 15 ~ 30)\r\n#bno|bad|badgirl|badboy#k (level 15 ~ 30)\r\n#biloveyou|loveyou#k (level 15 ~ 30)\r\n#bpoop#k (level 15 ~ 30)\r\n#bstupid|ihateyou|dummy#k (level 15 ~ 30)\r\n#btalk|chat|say#k (level 15 ~ 30)\r\n#bsleep|sleepy|gotobed#k (level 15 ~ 30)\r\n#bcutie, change#k (level 21 ~ 30)");
			cm.dispose();
			}
		if (selection == 23){
			cm.sendOk("These are the commands for #rSnowman#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bstupid, ihateyou, dummy#k (level 1 ~ 30)\r\n#bloveyou, mylove, ilikeyou#k (level 1 ~ 30)\r\n#bmerrychristmas#k (level 1 ~ 30)\r\n#bcutie, adorable, cute, pretty#k (level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (level 1 ~ 30)\r\n#btalk, chat, say/sleep, sleepy, gotobed#k (level 10 ~ 30)\r\n#bchang#k (level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 24){
			cm.sendOk("These are the commands for #rSun Wu Kong#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k(level 1 ~ 30)\r\n#bno,bad,badgirl,badboy#k(level 1 ~ 30) \r\n#bpoope#k(level 1 ~ 30) \r\n#bcutie,adorable,cute,pretty#k(level 1 ~ 30) \r\n#biloveyou,loveyou,luvyou,ilikeyou,mylove#k(level 1 ~ 30) \r\n#btalk,chat,say/sleep,sleepy,gotobed#k(level 10 ~ 30) \r\n#btransform#k(level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 25){
			cm.sendOk("These are the commands for #rJr. Reaper#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (level 1 ~ 30)\r\n#bplaydead, poop#k (level 1 ~ 30)\r\n#btalk|chat|say#k (level 1 ~ 30)\r\n#biloveyou, hug#k (level 1 ~ 30)\r\n#bsmellmyfeet, rockout, boo#k (level 1 ~ 30)\r\n#btrickortreat#k (level 1 ~ 30)\r\n#bmonstermash#k (level 1 ~ 30)");
			cm.dispose();
			}
		if (selection == 26){
			cm.sendOk("These are the commands for #rCrystal Rudolph#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bno|badgirl|badboy#k (level 1 ~ 30)\r\n#bbleh|joke#k(level 1~30)\r\n#bdisguise|transform#k(level 1 ~ 30) \r\n#bawesome|feelgood|lalala#k(level 1 ~ 30) \r\n#bloveyou|heybabe#k(level 1 ~ 30) \r\n#btalk|say|chat#k(level 10 ~ 30) \r\n#bsleep|sleepy|nap|gotobed#k(level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 27){
			cm.sendOk("These are the commands for #rKino#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bbad|no|badgirl|badboy#k (level 1 ~ 30)\r\n#bpoop#k (level 1 ~ 30)\r\n#bsleep|nap|sleepy|gotobed#k(level 1 ~ 30) \r\n#btalk|say|chat#k(level 10 ~ 30) \r\n#biloveyou|mylove|likeyou#k(level 10 ~ 30) \r\n#bmeh|bleh#k(level 10 ~ 30) \r\n#bdisguise|change|transform#k(level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 28){
			cm.sendOk("These are the commands for #rWhite Duck#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k(level 1 ~ 30) \r\n#bbad|no|badgirl|badboy#k(level 1 ~ 30) \r\n#bup|stand#k(level 1 ~ 30) \r\n#bpoop#k(level 1 ~ 30) \r\n#btalk|chat|say#k(level 1 ~ 30) \r\n#bhug#k(level 1 ~ 30) \r\n#bloveyou#k(level 1 ~ 30) \r\n#bcutie#k(level 1 ~ 30) \r\n#bsleep#k(level 1 ~ 30) \r\n#bsmarty(level 10 ~ 30) \r\n#bdance#k (level 20 ~ 30) \r\n#bswan#k(level 20 ~ 30)");
			cm.dispose();
			}
		if (selection == 29){
			cm.sendOk("These are the commands for #rPink Bean#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k(level 1 ~ 30) \r\n#bbad|no|badgirl|badboy|poop#k(level 1 ~ 30) \r\n#blazy|dummy|ihateyoutalk|chat|say|mumbleiloveyou|hugme|loveyou|#k(level 1 ~ 30) \r\n#bshake|music|charmbleh|joke|boo#k(level 20 ~ 30) \r\n#bgotobed|sleep|sleepypoke|stinky|dummy|ihateyou#k(level 20 ~ 30)\r\n#bkongkong#k(level 30)");
			cm.dispose();
			}
		if (selection == 30){
			cm.sendOk("These are the commands for #rPorcupine#k. The level mentioned next to the command shows the pet level required for it to respond.\r\n#bsit#k (level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (level 1 ~ 30)\r\n#bhugcushion|sleep|knit|poop#k (level 1 ~ 30)\r\n#bcomb|beach#k (level 10 ~ 30)\r\n#btreeninja|dart#k (level 20 ~ 30)");
			cm.dispose();
			}
			}
		if (status == 2)
			cm.sendNextPrev("But Water of Life only comes out little at the very bottom of the World Tree, so those babies can't be alive forever... I know, it's very unfortunate... but even if it becomes a doll again they can be brought back to life so be good to it while you're with it.");
		if (status == 3){
			cm.sendPrev("Oh yeah, they'll react when you give them special commands. You can scold them, love them.. it all depends on how you take care of them. They are afraid to leave their masters so be nice to them, show them love. They can get sad and lonely fast..");
			cm.dispose();
			}
		if (status == 4)
			cm.sendNextPrev("Talk to the pet, pay attention to it and its closeness level will go up and eventually his overall level will go up too. As the closeness rises, the pet's overall level will rise soon after. As the overall level rises, one day the pet may even talk like a person a little bit, so try hard raising it. Of course it won't be easy doing so...");
		if (status == 5)
			cm.sendNextPrev("It may be a live doll but they also have life so they can feel the hunger too. #bFullness#k shows the level of hunger the pet's in. 100 is the max, and the lower it gets, it means that the pet is getting hungrier. After a while, it won't even follow your command and be on the offensive, so watch out over that.");
		if (status == 6)
			cm.sendNextPrev("That's right! Pets can't eat the normal human food. Instead a teddy bear in Ludibrium called #bPatricia#k sells #bPet Food#k so if you need food for your pet, find #bPatricia#k It'll be a good idea to buy the food in advance and feed the pet before it gets really hungry.");
		if (status == 7){
			cm.sendPrev("Oh, and if you don't feed the pet for a long period of time, it goes back home by itself. You can take it out of its home and feed it but it's not really good for the pet's health, so try feeding him on a regular basis so it doesn't go down to that level, alright? I think this will do.");
			cm.dispose();
			}
		if (status == 8)
			cm.sendNextPrev("After some time... that's correct, they stop moving. They just turn back to being a doll, after the effect of magic dies down and Water of Life dries out. But that doesn't mean it's stopped forever, because once you pour Water of Life over, it's going to be back alive.");
		if (status == 9){
			cm.sendPrev("Even if it someday moves again, it's sad to see them stop altogether. Please be nice to them while they are alive and moving. Feed them well, too. Isn't it nice to know that there's something alive that follows and listens to only you?");
			cm.dispose();
}
}
}