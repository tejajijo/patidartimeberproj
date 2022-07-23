var sequence = 1;
var index = 0;
var selectedRowIndex;
var row;

// calling function on click of + button on UI

document.querySelector('#add-rows').addEventListener("click",()=>{
    createRow();
})


// generating rows and cells on + button click
function createRow(){

    let table = document.getElementById("dataTable");

    // create rows on the table

    let row = document.createElement("tr");
    row.onclick = (function(){
        getRowIndex(row);
    })

    // creating columns on the data table

    let seq = document.createElement("td");
    let cell = document.createElement("input");
    cell.id="seq";
    cell.setAttribute("value",sequence++);
    cell.className="sequence";
    cell.readOnly='true';
    seq.appendChild(cell);

    let wood = document.createElement("td");
    let cell1 = document.createElement("input");
    cell1.className = "data-input";
    wood.appendChild(cell1);


    let breadth = document.createElement("td");
    let cell2 = document.createElement("input");
    cell2.type="number";
    cell2.className = "data-input";
    breadth.appendChild(cell2);

    let width = document.createElement("td");
    let cell3 = document.createElement("input");
    cell3.type="number";
    cell3.className = "data-input";
    width.appendChild(cell3);

    let length = document.createElement("td");
    let cell4 = document.createElement("input");
    cell4.type="number";
    cell4.className = "data-input";
    length.appendChild(cell4);

    let numbers = document.createElement("td");
    let cell5 = document.createElement("input");
    cell5.type="number";
    cell5.className = "data-input";
    numbers.appendChild(cell5);

    let rate = document.createElement("td");
    let cell6 = document.createElement("input");
    cell6.type="number";
    cell6.className = "data-input";
    rate.appendChild(cell6);

    let below6cft = document.createElement("td");
    let cell7 = document.createElement("input");
    cell7.type = "text";
    cell7.style.color="red";
    cell7.style.textAlign="right";
    cell7.className = "data-input";
    below6cft.appendChild(cell7);

    let above5cft = document.createElement("td");
    let cell8 = document.createElement("input");
    cell8.type = "text";
    cell8.style.color="red";
    cell8.style.textAlign="right";
    cell8.className = "data-input";
    above5cft.appendChild(cell8);


    row.appendChild(seq);
    row.appendChild(wood);
    row.appendChild(breadth);
    row.appendChild(width);
    row.appendChild(length);
    row.appendChild(numbers);
    row.appendChild(rate);
    row.appendChild(below6cft);
    row.appendChild(above5cft);

    table.appendChild(row);

}

// getting row index of selected row from data table

function getRowIndex(clickedRow){
    console.log(clickedRow.rowIndex);
    selectedRowIndex = clickedRow.rowIndex;
}


// deletes selected rows from data table
function deleteRow(){

    // setting subscript like 1st,2nd etc to make aware user that they are deleting right row from the list

    let subscript = "";
    if(selectedRowIndex==1){
        subscript="st";
    }else if(selectedRowIndex==2){
        subscript="nd"
    }else if(selectedRowIndex==3){
        subscript="rd"
    }else{
        subscript="th"
    }
    
    //deleting row
    
    var choice = confirm("Do you want to delete "+ selectedRowIndex + subscript+" record from list?");
    if(choice){
        document.getElementById("dataTable").deleteRow(selectedRowIndex);
        sequence--;
        count();
    }
}

// rearrange number of rows in the table after deleteing specific row

function count(){
    let table = document.getElementById("dataTable");
    let row = table.rows.length;
    let deletedRow = selectedRowIndex;

    for(i=deletedRow;i<=row-1;i++){
        let value = table.rows[i].cells[0].getElementsByTagName('input')[0].value;
        table.rows[i].cells[0].getElementsByTagName('input')[0].value=value.replace(value,i);
    }
}

// refreshing table on clicking new button on UI

function tableRefresh(){
    var myTable = document.getElementById("dataTable");
    var rowCount = myTable.rows.length;
    for (var x=rowCount-1; x>0; x--) {
    myTable.deleteRow(x);
    index=0;
    sequence=0;
    }
}
