// Grade Calculator

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let css1 = +document.getElementById("CSS1-in").value;
  let sp1 = +document.getElementById("SP1-in").value;
  let sp2 = +document.getElementById("SP2-in").value;
  let css2 = +document.getElementById("CSS2-in").value;
  let pa = +document.getElementById("PA-in").value;

  // Process
  let total = (css1 + sp1 + sp2 + css2 + pa) / 5;

  // Output
  document.getElementById("output").innerHTML = `Final CS10 Grade: ${total} %`;
}
