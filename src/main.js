let listScore = [];

const listclass = document.getElementsByClassName("td-scores");
for (let i = 0; i < listclass.length; i++) {
  listScore.push(listclass[i].innerHTML * 1);
}
console.log(listScore);

const btnSVCaoDiemNhat = document.getElementById("btnSVCaoDiemNhat");
btnSVCaoDiemNhat.onclick = function () {
  let max = listScore[0];
  let dc = 0;
  for (let i = 0; i < listScore.length; i++) {
    if (max < listScore[i]) {
      max = listScore[i];
      dc = i;
    }
  }
  document.getElementById("svGioiNhat").innerHTML = max;
  console.log(
    document.getElementsByClassName("tblBody").rows[dc].cells[2].innerHTML,
  );
};
