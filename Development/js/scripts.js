let food = prompt("ماذا تريد ان تطلب");

switch( food ) {
    case "1":
    console.log  ("بيتزا");
      break;
    case "2":
    console.log  ("برجر");
    break;
    case "3":
    console.log ("سوشي");
         break;
    default: 
    console.log ("طلبك غير متوفر");
      
  } 

  const first = parseInt(prompt("ادخل الرقم الاول ")); 

  const secount = parseInt(prompt("ادخل الرقم الثاني"));

  const opp  = parseInt(prompt("اختر العمليه الحسابيه(+,-,*,/"));

  switch(opp) {
    case "+":
     console.log ("الجواب هو " + first + secount);
      break;
    case "-":
      console.log ("الجواب هو " + first - secount);
      break;
    case "*":
      console.log ("الجواب هو " +first * secount);
      break;
    case "/":
      console.log ("الجواب هو " + first / secount);
      break;
    default:
      console.log ("قم بادخال عمليه صحيحه");
  } 

  const age = prompt ("ادخل عمرك هنا");
  if (age =< 6 ){
  alert("روضه");
  }else if (age =< 18 ){
      alert("مدرسه");
  }

if (age =< 19 ){
    alert("جامعه");
}else "اكتب عمرك باللغه الانجليزيه"
  

