var sequence = 0;
var index = 0;


// generating rows and cells on + button click
function createRow(){
    var table = document.getElementById("dataTable");
    var columns = document.getElementById("dataTable").rows[0].cells.length;
    
    var row = table.insertRow(index+1);
    index++;
    
    for(i=0;i<columns;i++){
        var cell = row.insertCell(i);
        if(i==0){
            sequence++;
            cell.innerHTML=sequence;
        } else if(i==1){
            cell.innerHTML = "<input type=text onclick=getTableRow() style=width:95%;height:25px;border-right:2px solid black></input>"
        }
        else if(i>=2 && i<=6){
            cell.innerHTML = "<input type=number onclick=getTableRow()></input>"
        }
        else {
            cell.innerHTML = "<input type=number onclick=getTableRow() style=color:red;></input>"
        }
    }
}

// deleting cells from latest entry on clicking x button

function deleteRow(){
    if(index!==0){
        document.getElementById("dataTable").deleteRow(index);
        index--;
        sequence--;
    }
}

function tableRefresh(){
    var table=document.getElementById("dataTable");   
}


