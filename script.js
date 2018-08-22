$(document).ready(function(){
        var magic8Ball = {};
             magic8Ball.listOfAnswers = ["It is certain.","It is decidedly so.","Without a doubt.","Yes - Definitely.","You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes.","Reply hazy, try again","Ask again later","Better not tell you now.","Cannot predict now.","Concentrate and ask again.","Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."];

             magic8Ball.askQuestion = function(question){
                 var randomAnswer = 				this.listOfAnswers[Math.floor(Math.random () * this.listOfAnswers.length)];
                 $("#answer").text( randomAnswer );
                 $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
                 $("#answer").hide();
                 $("#answer").fadeIn(4000);
                  console.log(question);
                  console.log(randomAnswer);
             };

        var onClick = function() {
             var question = prompt("ASK A YES/NO QUESTION!")
             $("#8ball").effect( "shake" );
             setTimeout(
                   function() {
                         magic8Ball.askQuestion(question)
             }, 1000);

        };

      $("#questionButton").click( onClick );
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

});
