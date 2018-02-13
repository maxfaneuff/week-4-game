
$(document).ready(function initialize(){
		
	var targetNum;
	var userNum = 0;
	var gemOne;
	var gemTwo;
	var gemThree;
	var gemFour;
	var isEqual = false;
	var isGreater = false;
	var wins = 0;
	var losses = 0;
	

	function winCheck() {
		wins++;
		$(".gem").off("click");

		$("#wins").text("Wins: " + wins);
		$("#youWin").show();
	}
	

	function lossCheck() {
		losses++;
		$(".gem").off("click");
		
		$("#losses").text("Losses: " + losses);
		$("#youLose").show();
	}
	function resetGame() {
			$(".targetNum").empty();
			$(".yourScore").empty();
			
			userNum = 0;
			targetNum = randomInt(19, 120);
			gemOne = randomInt(1, 12)
			gemTwo = randomInt(1, 12)
			gemThree = randomInt(1, 12)
			gemFour = randomInt(1, 12)
			isGreater = false;
			isEqual = false;
			
			$(".gem").on("click");
			$(".targetNum").text(targetNum);
			$("#youLose").hide();
			$("#youWin").hide();

			console.log(gemOne);
			console.log(gemTwo);
			console.log(gemThree);
			console.log(gemFour);
			console.log("gem  Reset");
	}	

	function randomInt(min,max){
    	return Math.floor(Math.random()*(max-min+1)+min);
		}
		userNum = 0;
		targetNum = randomInt(19, 120);
		gemOne = randomInt(1, 12)
		gemTwo = randomInt(1, 12)
		gemThree = randomInt(1, 12)
		gemFour = randomInt(1, 12)
		console.log("gems 1-4");
		console.log(gemOne);
		console.log(gemTwo);
		console.log(gemThree);
		console.log(gemFour);

		$(".targetNum").text(targetNum);
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		$("#youWin").hide();
		$("#youLose").hide();
	

		$("#gemOne").on("click", function() {
			console.log("click value gemOne");
			console.log(gemOne);
			if(this.value == "purple");
			userNum += gemOne;
			
		$(".yourScore").text(userNum);

		if(userNum === targetNum) {
				winCheck();	
			}
			if(userNum > targetNum) {
				lossCheck();
			}
		})

		$("#gemTwo").on("click", function() {
			console.log("click value gemTwo");
			console.log(gemTwo);
			if(this.value == "red");
			userNum += gemTwo;

			$(".yourScore").text(userNum);

			if(userNum === targetNum) {
				winCheck();	
			}
			if(userNum > targetNum) {
				lossCheck();
			}
		})

		$("#gemThree").on("click", function() {
			console.log("click value gemThree");
			console.log(gemThree);
			if(this.value == "green");
			userNum += gemThree;
			
			$(".yourScore").text(userNum);

			if(userNum === targetNum) {
				winCheck();	
			}
			if(userNum > targetNum) {
				lossCheck();
			}
		})

		$("#gemFour").on("click", function() {
			console.log("click value gemFour");
			console.log(gemFour);
			if(this.value == "brown");
			userNum += gemFour;

			$(".yourScore").text(userNum);

			if(userNum === targetNum) {
				winCheck();	
			}
			if(userNum > targetNum) {
				lossCheck();
			}
		})

		// $(".gems").on("click", function() {
		// 	if(userNum === targetNum) {
		// 		winCheck();	
		// 	}
		
		// 	if(userNum > targetNum) {
		// 		lossCheck();
		// 	}
		// })

		
		$("#reset").on("click", resetGame);
})	

//bugs://
	//hitting button beyond loss ups count unnecessarially//
	//getting to win/loss conditions need to stop game.//
	//Last addition doesn't show up in userNum when you go over.//
	//why doesn't the $(".gems").click(false); work?//


	// $(".gems").on("click", function(event) {
	// 	//which gem is clicked on
	// 	//assign value from gemVar to the particular thing being clicked.  the specific img tag
	// 	//add value to userNum

	// 	if($(event.target).is("#gemOne")) {
	// 		$("#gemOne").attr("value", gemOne);
	// 		gemOne = event;
	// 	}	else if ($(event.target).is("#gemTwo")) {
	// 		$("#gemTwo").attr("value", gemTwo);

	// 	}	else if($(event.target).is("#gemThree")) {
	// 		$("#gemThree").attr("value", gemThree);

	// 	}	else if($(event.target).is("#gemFour")) {
	// 		$("#gemFour").attr("value", gemFour);
			
	// 	}
	// 	userNum = userNum + event;
		
	// 	console.log(userNum);
	// 	//each click of a gem + the sum of the previous clicks.  Remember wins = wins + 1 from heads/tails execrise//
	// })



