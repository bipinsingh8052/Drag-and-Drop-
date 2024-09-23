let box_two=document.getElementById("box");
let box =document.getElementById("box_two");
console.log(box);
console.log(box_two);
let lists =document.getElementsByClassName("list");
console.log(lists);
for(list of lists){

    list.addEventListener("dragstart",function(e){
        let selected =e.target;
        // console.log(selected);
        box.addEventListener("dragover",function(e){
            e.preventDefault();
            console.log(e.preventDefault());
        });
        box.addEventListener("drop",function(e){
            box.appendChild(selected);
            console.log(box.appendChild(selected));
            selected = 'Null';
        });
        box_two.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        box_two.addEventListener("drop",function(e){
            box_two.appendChild(selected);
            selected='Null';
        })
        
    });
}
// for(lis of lists){
//     lis.addEventListener("dragstart",function(e){
//         let selected =e.target;
//         console.log(selected);
       
//     })
// }