/*
	名字:	Dr. Lenu
	地圖:	射手村整容院
	描述:	100000103
*/

function start() {
	cm.sendOk("整形美容店的美容鏡片，我們擁有你一直渴望的美麗外觀~！如果想改变自己的瞳孔，请到商城处购买自己喜欢的镜片！");
	cm.dispose();
}

/*
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("你好~！我是勒努醫生，負責亨利整形美容店的美容鏡片，我們擁有你一直渴望的美麗外觀~！記住，每個人注意到的第一件事就是你的眼睛，我們可以幫助你找到最適合你的化妝鏡！現在，你想用什麼？\r\n#L0#Cosmetic Lenses: #i5152010##t5152010##l\r\n#L1#Cosmetic Lenses: #i5152013##t5152013##l");
    } else if (status == 1) {
	hair_Colo_new = [];

	var teye = cm.getPlayerStat("FACE") % 100;

	if (cm.getPlayerStat("GENDER") == 0) {
	    teye += 20000;
	} else {
	    teye += 21000;
	}
	hair_Colo_new[0] = teye + 100;
	hair_Colo_new[1] = teye + 200;
	hair_Colo_new[2] = teye + 300;
	hair_Colo_new[3] = teye + 400;
	hair_Colo_new[4] = teye + 500;
	hair_Colo_new[5] = teye + 600;
	hair_Colo_new[6] = teye + 700;

	if (selection == 0) {
	    beauty = 1;
	    cm.sendYesNo("如果你使用普通優惠券，你將隨機獲得一副化妝鏡片。你打算用 #b#t5152010##k 改變你的眼睛嗎?");
	} else if (selection == 1) {
	    beauty = 2;
	    cm.askAvatar("With our specialized machine, you can see yourself after the treatment in advance. What kind of lens would you like to wear? Choose the style of your liking.", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5152010, hair_Colo_new) == 1) {
		cm.sendOk("这次改变会让你有不同的体验！！");
	    } else {
		cm.sendOk("…看起來你沒有這個優惠券。很抱歉這麼說，我就不能幫你做整形手術了。。。.");
	    }
	} else {
	    if (cm.setAvatar(5152013, hair_Colo_new[selection]) == 1) {
		cm.sendOk("这次改变会让你有不同的体验！！");
	    } else {
		cm.sendOk("…看起來你沒有這個優惠券。很抱歉這麼說，我就不能幫你做整形手術了。。。");
	    }
	}
	cm.dispose();
    }
}
*/