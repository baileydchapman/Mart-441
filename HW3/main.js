function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Men's Shoes") {
        document.getElementById("story").innerHTML = "You enter the Men's shoes area, and you find a display of new Nike's. What will you do?";
        document.getElementById("choice1").innerHTML = "Try a pair on";
        document.getElementById("choice2").innerHTML = "Look for a different brand";
    } else if (choice == 2 && answer2 == "Women's Shoes") {
        document.getElementById("story").innerHTML ="You enter the Women's shoes area and find a display of new Nike's. What will you do?";
        document.getElementById("choice1").innerHTML = "Try on a pair";
        document.getElementById("choice2").innerHTML = "Look for a different brand";
    }
    else if (choice == 1 && answer1 == "Try on a pair") {
        document.getElementById("story").innerHTML = "You try on a pair of Nike's and want to buy them. What do you do next?";
        document.getElementById("choice1").innerHTML =  "Go to a register";
        document.getElementById("choice2").innerHTML = "Look for a new pair of socks";
    } else if (choice == 2 && answer2 == "Look for a different brand") {
        document.getElementById("story").innerHTML ="You look for a new brand and find a display of Hoka's. What do you do?";
        document.getElementById("choice1").innerHTML = "Try on a pair";
        document.getElementById("choice2").innerHTML = "Leave the store";
    }
    else if (choice == 1 && answer1 == "Go to a register") {
        document.getElementById("story").innerHTML ="You head to the register to purchase the Nike's. While waiting, you notice a sale on socks. What will you do?";
        document.getElementById("choice1").innerHTML ="Buy a pair of socks";
        document.getElementById("choice2").innerHTML ="Skip the socks";
    } else if (choice == 2 && answer2 == "Look for a new pair of socks") {
        document.getElementById("story").innerHTML ="You decide to buy a new pair of socks to go with your Nike's. What's your next move?";
        document.getElementById("choice1").innerHTML = "Go to a register";
        document.getElementById("choice2").innerHTML = "Explore more shoes";
    }
    else if (choice == 1 && answer1 == "Buy a pair of socks") {
        document.getElementById("story").innerHTML ="You grab a pair of socks on sale and add them to your purchase. What's your next move?";
        document.getElementById("choice1").innerHTML = "Complete the purchase";
        document.getElementById("choice2").innerHTML = "Keep browsing";
    } else if (choice == 2 && answer2 == "Skip the socks") {
        document.getElementById("story").innerHTML ="You decide to skip the socks and complete your purchase. What do you want to do now?";
        document.getElementById("choice1").innerHTML = "Leave the store";
        document.getElementById("choice2").innerHTML = "Explore more shoes";
    }
    else if (choice == 1 && answer1 == "Go to a register") {
        document.getElementById("story").innerHTML ="You head to the register to purchase the Nike's and socks. What's your next move?";
        document.getElementById("choice1").innerHTML = "Complete the purchase";
        document.getElementById("choice2").innerHTML = "Keep browsing";
    } else if (choice == 2 && answer2 == "Explore more shoes") {
        document.getElementById("story").innerHTML ="You decide to explore more shoes. What section would you like to visit?";
        document.getElementById("choice1").innerHTML = "Athletic shoes";
        document.getElementById("choice2").innerHTML = "Casual shoes";
    }
    else if (choice == 1 && answer1 == "Purchase the Hoka's") {
        document.getElementById("story").innerHTML ="You decide to purchase the Hoka's. What do you want to do next?";
        document.getElementById("choice1").innerHTML = "Buy matching socks";
        document.getElementById("choice2").innerHTML = "Leave the store";
    } else if (choice == 2 && answer2 == "Keep looking for other brands") {
        document.getElementById("story").innerHTML ="You continue exploring other brands. What section would you like to visit?";
        document.getElementById("choice1").innerHTML = "Running shoes";
        document.getElementById("choice2").innerHTML = "Sandals";
    }
    else if (choice == 1 && answer1 == "Buy matching socks") {
        document.getElementById("story").innerHTML ="You grab a pair of matching socks to go with your Hoka's. What's your next move?";
        document.getElementById("choice1").innerHTML = "Complete the purchase";
        document.getElementById("choice2").innerHTML = "Keep exploring";
    } else if (choice == 2 && answer2 == "Leave the store") {
        document.getElementById("story").innerHTML =("You decide to leave the store. Thanks for shopping!";
    }
}
