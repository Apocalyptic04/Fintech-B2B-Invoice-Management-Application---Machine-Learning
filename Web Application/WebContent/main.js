// fetching

const showheaders = (headers) =>{
    /*const tableArr = headers;
    console.log(tableArr);
    
    let tableRowEle = '<thead class = "header"> <th style="border-radius: 4px 0 0 4px"><input type="checkbox" id="selectAll" onclick="checkAll(this)"/></th>';
    var kk=-1;
    tableArr.forEach(tableRow => {
        kk++;
        if(kk===6)
        {
            tableRowEle += `<th style="border-radius: 0 4px 4px 0" class = "${String(tableRow).toLowerCase()}">` + String(tableRow) + '</th> ';
        }
        else
        {
            tableRowEle += `<th class = "${String(tableRow).toLowerCase()}">` + String(tableRow) + '</th> '; 
        }
    });
    kk=-1;
    tableRowEle += '</thead>';
    console.log(tableRowEle);
    tableMain.innerHtml = tableRowEle;*/
    var ccc=-1;
    const tableMain = document.getElementById("pager");
    let sunny = '<tr> <td style="border-radius: 4px 0 0 4px"> <input id="checkb" type="checkbox"></td>';
    headers.forEach(entry =>{
        ccc++;
        if(ccc===4)
        {
            //const [key,value] = entry;
            sunny += '<td class="key">' + entry + '</td>';
        }
        else if(ccc===6)
        {
            //const [key,value] = entry;
            sunny += '<td>' + entry + '</td>';
        }
        else
        {
            //const [key,value] = entry;
            sunny += '<td>' + entry + '</td>';
        }
    });
    ccc=-1;
    sunny += '</tr>';
    console.log(sunny);
    tableMain.innerHTML += sunny;
}

const showTableOnLoad = (result, page, check = true) =>{
    //console.log(data[0]);
    // Object.keys()
    let data = []; 
    for(i=page*10 ; i< (page+1)*10;i++)
    {
        data.push(result[i]);
    }
    console.log(Object.keys(data[0]));
    const tableArr = data;
    const tableMain = document.getElementById("pager");
    tableMain.innerHTML = "";
    showheaders(Object.keys(data[0]));
    var ccc=-1;
    tableArr.forEach(tableRow =>{
        let sunny = '<tr> <td style="border-radius: 4px 0 0 4px"> <input class="cat" type="checkbox"></td>';
        Object.entries(tableRow).forEach(entry =>{
            ccc++;
            if(ccc===4)
            {
                const [key,value] = entry;
                sunny += '<td class="key">' + value + '</td>';
            }
            else if(ccc===6)
            {
                const [key,value] = entry;
                if(value=="")
                    sunny += '<td>--</td>';
                else
                    sunny += '<td>' + value + '</td>';

            }
            else
            {
                const [key,value] = entry;
                sunny += '<td>' + value + '</td>';
            }
        });
        ccc=-1;
        sunny += '</tr>';
        console.log(sunny);
        tableMain.innerHTML += sunny;
    });
    
}

const prev = function () {
    if (this.currentPage > 0) {
        showTableOnLoad(this.result,this.currentPage-1);
    
    this.currentPage = this.currentPage - 1;
    }
};

const next = function () {
    if (this.currentPage < this.pages-1) {
        //this.showPage(this.currentPage + 1);
        showTableOnLoad(this.result,this.currentPage+1);
    
    this.currentPage = this.currentPage + 1
    }
};
this.currentPage = 0;
this.result = [];
this.pages;
(
    function()
    {        
        fetch('http://localhost:8080/H2HBABBA2663/Fetch')
        .then(response =>{
            return response.json()

        })
        .then(jsonResult =>{
            this.pages = jsonResult.length/10;
            this.result = jsonResult;
            showTableOnLoad(this.result,0);
        })
        .catch(error =>{
            console.log(error);
        })
    }

)() 
//////////////////////////////////////////for add modal///////////////////////////////////////////////////

// get modal element
var modal = document.getElementById('simpleModal');
// get open modal button
var modalBtn = document.getElementById('modalBtn');
//get close button 
var closeBtn = document.getElementsByClassName('closeBtn')[0];
//get cancel button
var cancelBtn = document.getElementsByClassName('c6')[0];

// listen for open click
modalBtn.addEventListener('click', openModal);
// listen for close click
closeBtn.addEventListener('click', closeModal);
// listen for outside modal click
window.addEventListener('click', clickOutside);
// listen for close button click
cancelBtn.addEventListener('click', cancelButton);

// function to open modal
function openModal(){
    modal.style.display = 'block';
}

// function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// function to outside click modal
function clickOutside(e){
    if(e.target == modal)
    modal.style.display = 'none';
}

// function to close modal
function cancelButton(){
    modal.style.display = 'none';
}

/////////////////////////////////////for edit modal//////////////////////////////////////////////////////

// get modal element
var modal2 = document.getElementById('simpleModal2');
// get open modal button
var modalBtn2 = document.getElementById('modalBtn2');
//get close button 
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
//get cancel button
var cancelBtn2 = document.getElementsByClassName('e3')[0];

// listen for open click
modalBtn2.addEventListener('click', openModal2);
// listen for close click
closeBtn2.addEventListener('click', closeModal2);
// listen for outside modal click
window.addEventListener('click', clickOutside2);
// listen for close button click
cancelBtn2.addEventListener('click', cancelButton2);

// function to open modal
function openModal2(){
    modal2.style.display = 'block';
}

// function to close modal
function closeModal2(){
    modal2.style.display = 'none';
}

// function to outside click modal
function clickOutside2(f){
    if(f.target == modal2)
    modal2.style.display = 'none';
}

function cancelButton2(){
    modal2.style.display = 'none';
}

////////////////////////////////////for delete modal///////////////////////////////////////////////////////

// get modal element
var modal3 = document.getElementById('simpleModal3');
// get open modal button
var modalBtn3 = document.getElementById('modalBtn3');
//get close button 
var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];
//get cancel button
var cancelBtn3 = document.getElementsByClassName('d1')[0];

// listen for open click
modalBtn3.addEventListener('click', openModal3);
// listen for close click
closeBtn3.addEventListener('click', closeModal3);
// listen for outside modal click
window.addEventListener('click', clickOutside3);
// listen for close button click
cancelBtn3.addEventListener('click', cancelButton3);

// function to open modal
function openModal3(){
    modal3.style.display = 'block';
}

// function to close modal
function closeModal3(){
    modal3.style.display = 'none';
}

// function to outside click modal
function clickOutside3(k){
    if(k.target == modal3)
    modal3.style.display = 'none';
}

function cancelButton3(){
    modal3.style.display = 'none';
}

//////////////////////check all checkboxes with one checkbox/////////////////////////////
function checkAll(bx) {
    var cbs = document.getElementsByTagName('input');
    for(var i=0; i < cbs.length; i++) {
      if(cbs[i].type == 'checkbox') {
        cbs[i].checked = bx.checked;
      }
    }
}

///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////// pagination /////////////////////////////////////////

/* eslint-env browser */
/* global document */


///////////////////////////////////////////////// search bar //////////////////////////////////////////////

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue, show;
    input = document.getElementById("searchbox");
    filter = input.value.toUpperCase();
    table = document.getElementById("pager");
    tr = table.getElementsByTagName("tr");
    show = document.getElementById("notfound");
    var ans=0;
    var count=0;
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) 
    {
        td = tr[i].getElementsByTagName("td")[3];
        if(td) 
        {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) 
            {
                tr[i].style.display = "";
                ans=1;
                count++;
            } 
            else 
            {
                tr[i].style.display = "none";
                show.style.display = "none";
            }
            if(count === 11)
            {
                break;
            }
        }
    }
    if(ans==0)
    {
        show.style.display = "block";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////

function addition()
{
    //console.log("123");
    let c1 = document.getElementById("c1").value;
    let c2 = document.getElementById("c2").value;
    let c3 = document.getElementById("c3").value;
    let c4 = document.getElementById("c4").value;
    let c5 = document.getElementById("c5").value;
    let c9 = document.getElementById("c9").value;

    if(c1=="" || c2=="" || c3=="" || c4=="" || c5=="" || c9=="")
    {
        alert("All fields are mandatory!!");
        return;
    }
    if(isNaN(c3))
    {
        alert("Please enter valid Invoive No.");
        return;
    }
    if(isNaN(c4))
    {
        alert("Please enter valid Invoice Amount.");
        return;
    }
    //console.log(c1,c2,c3,c4,c5,c9);
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let d = new Date( c5 );
    if ( !!d.valueOf() ) 
    { 
        // Valid date
        year = d.getFullYear();
        month = d.getMonth();
        day = d.getDate();
    } 
    else 
    { 
        /* Invalid date */ 
    }
    //console.log(day,months[month],year);
    //console.log(c5);
    let row = document.createElement('tr');
    let html = '<td style="border-radius: 4px 0 0 4px"><input id="checkb" type="checkbox"></td> <td>' + c1 +'</td> <td>' + c2 + '</td> <td>' + c3 + '</td> <td>' + c4 + '</td> <td>' + c5 +'</td> <td>--</td> <td style="border-radius: 0 4px 4px 0">' + c9 + '</td>';
    row.innerHTML = html;
    //document.getElementById('pager').appendChild(row);
    var params = {
        'customer_name': c1,
        'customer_no': c2,
        'invoice_id': c3,
        'invoice_amount': c4,
        'due_date': c5,
        'notes': c9
    };
    this.result.push(params);
    const options = {
        method: 'POST',
        body: JSON.stringify( params )  
    };
    var url = new URL("http://localhost:8080/H2HBABBA2663/Add");
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url , options )
        .then( response => response.json() )
        .then( response => {
            // Do something with response.
            console.log("abcd");
        } );
        modal.style.display = 'none';
}



//////////////////////////////////////////////////////////////

let jsp_current_page = 1;
const jsp_records_per_page = 4;

let jsp_json_object = JSON.parse(data);

console.log(jsp_json_object);

/**
 * Get the number of items per page based on the length of the JSON object
 * and the number of records per page (set via global variable)
 */
 function jsp_num_pages() {
    return Math.ceil(jsp_json_object.length / jsp_records_per_page);
}

/**
 * Change current page to previous page (-1)
 */
function jsp_prev_page() {
    if (jsp_current_page > 1) {
        jsp_current_page--;
        jsp_change_page(jsp_current_page);
    }
}

/**
 * Change current page to next page (+1)
 */
function jsp_next_page() {
    if (jsp_current_page < jsp_num_pages()) {
        jsp_current_page++;
        jsp_change_page(jsp_current_page);
    }
}

/**
 * Change page, display items in
 the table and show/hide the navigation buttons.
 * This function can be further split into several functional elements, thus
 * simplifying the functions and allowing for more complexity (better pagination
 * styling, better table layout and so on).
 */
function jsp_change_page(page) {
    const btn_prev = document.getElementById('btn-prev');
    const btn_next = document.getElementById('btn-next');
    const listing_table = document.getElementById('listing-table');
    let page_span = document.getElementById('page');
 
    if (page < 1) {
        page = 1;
    }
    if (page > jsp_num_pages()) {
        page = jsp_num_pages();
    }

    listing_table.innerHTML = '';

    for (let i = (page - 1) * jsp_records_per_page; i < (page * jsp_records_per_page) && i < jsp_json_object.length; i++) {
        listing_table.innerHTML += `${jsp_json_object[i].json_item}<br>`;
    }
    page_span.innerHTML = `${page}/${jsp_num_pages()}`;

    btn_prev.style.display = (page === 1) ? 'none' : 'inline-block';
    btn_next.style.display = (page === jsp_num_pages()) ? 'none' : 'inline-block';
}

window.onload = () => {
    document.getElementById('btn-prev').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_prev_page();
    });

    document.getElementById('btn-next').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_next_page();
    });

    jsp_change_page(1);
};

///

function deleterow()
{
    //var gettable = document.getElementById("pager"),rIndex;
    var c = [];
    var rIndex = [];
    /*for(var i = 1; i < gettable.rows.length; i++)
    {
        gettable.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
            console.log(rIndex);
        };
    }*/
    var cbs = document.getElementsByClassName('cat');
    for(var i=0; i < cbs.length; i++) {
      if(cbs[i].type == 'checkbox' && cbs[i].checked == true) {
        c.push(gettable.rows[i+1].cells[1].innerHTML);
        console.log(cbs[i].checked);
        
        rIndex.push(i);
        //break;
      }
    }
    //var c1 = gettable.rows[rIndex+1].cells[1].innerHTML;
    modal3.style.display = 'none';
    
    for(var i=0;i<c.length;i++) {
        var params = {
            'customer_name': c[i]
        };
        var options = {
            method: 'POST',
            body: JSON.stringify( params )  
        };
    var url = new URL("http://localhost:8080/H2HBABBA2663/Delete");
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url , options )
    .then( response => response.json() )
    .then( response => {
        // Do something with response.
        console.log("abcd");
    } );
    }
    for(var i=0;i<rIndex.length; i++) {
    this.result.splice(this.currentPage*10+rIndex[i],1);
    }
    modal3.style.display = 'none';
    showTableOnLoad(this.result,this.currentPage);
}

function editRow()
{
    if(document.getElementById("e1").value=="" || document.getElementById("e2").value=="" )
    {
        alert("All fields are mandatory!!");
        return;
    }
    if(isNaN(document.getElementById("e1").value))
    {
        alert("Please enter valid Invoice Amount.");
        return;
    }
    //var gettable = document.getElementById("pager"),rIndex;
    var c = [];
    var rIndex = [];
    /*for(var i = 1; i < gettable.rows.length; i++)
    {
        gettable.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
            console.log(rIndex);
        };
    }*/
    var cbs = document.getElementsByClassName('cat');
    for(var i=0; i < cbs.length; i++) {
      if(cbs[i].type == 'checkbox' && cbs[i].checked == true) {
        c.push(gettable.rows[i+1].cells[1].innerHTML);
        console.log(cbs[i].checked);
        
        rIndex.push(i);
        //break;
      }
    }
    //var c1 = gettable.rows[rIndex+1].cells[1].innerHTML;
    modal3.style.display = 'none';
    for(var i=0;i<c.length;i++) {
        var params = {
            'customer_name': c[i],
            'invoice_amount': document.getElementById("e1").value,
			'notes': document.getElementById("e2").value
        };
        var options = {
            method: 'POST',
            body: JSON.stringify( params )  
        };
    var url = new URL("http://localhost:8080/H2HBABBA2663/Edit");
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url , options )
    .then( response => response.json() )
    .then( response => {
        // Do something with response.
        console.log("abcd");
    } );
    }
    for(var i=0;i<rIndex.length; i++) {
    console.log(JSON.stringify(this.result[this.currentpage*10+rIndex[i]]));
    this.result[this.currentPage*10+rIndex[i]].invoice_amount= document.getElementById("e1").value;
    this.result[this.currentPage*10+rIndex[i]].notes= document.getElementById("e2").value;
    }
    modal2.style.display = 'none';
    showTableOnLoad(this.result,this.currentPage);
}
