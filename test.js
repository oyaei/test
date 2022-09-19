Message = "解説"

const CorrectAnswers = ["答え","こたえ","answer"];


function JudgeAnswer(){
  var Result = "不正解です";

  var Color = "danger"
  let element = document.getElementById("answer");

  if (element.value!=""){
    if (CorrectAnswers.includes(element.value)){
      Result = "正解です！"
      Color = "info"
    } else {
      Message = "もう一度解答する";
    }
  
    var div = document.getElementById("main");
    div.innerHTML = '<div class="card"><header class="card-header has-background-'+Color+'"><p class="card-header-title is-size-3">'+Result+'</p><p class="is-size-6 has-text-dark">'+element.value+'</p></header><div class="content"><p>'+Message+'</p></div></div>';
  }
}
