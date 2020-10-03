

// Creating a shopping list with a for loop
    let list = ["milk", "chicken", "ham", "bread", "banana"];
    for (i = 0; i < list.length; i++) {
      let li = document.createElement("li");
      let text = document.createTextNode(list[i]);
      li.appendChild(text);
      document.getElementById("shoppingList").appendChild(li);
    }

// Using a while loop to count to nine
// To see the code in action, please comment out the code above and un-comment this one.

// let text = '';
// let i = 0;
// while (i < 10) {
//     text += '<br>' + i;
//     i++; //this line is used to stop the loop
// }
// document.getElementById('count').innerHTML = text;





