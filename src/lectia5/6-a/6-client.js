const apiUrl = "http://localhost:8000/api/";

async function get(url) {
        return (await axios.get(url)).data;
}

async function post(url, body){
    return(await axios.post(url, 
        JSON.stringify(body),{
        headers: {"Content-Type": "application/json"}
    })).data;
}

async function loadTable(){
    let data = await get(apiUrl+"getList");
    let tableDiv=document.getElementById("tableData");

    if(!data||!tableDiv){
        return;
    }
    let myTable = document.getElementById("myTable");
    if(myTable) {
        myTable.remove();
    }
    
    let myHtmlCode = [];
    myHtmlCode.push("<table id='myTable' border='1' style='margin-top: 15px;'>");
    myHtmlCode.push("<thead>");
    myHtmlCode.push("<tr> <th hidden> Id </th> <th> Name </th> <th> Age </th>");
    myHtmlCode.push("</thead>");
    myHtmlCode.push("<tbody>");

    for(let item of data){
        myHtmlCode.push(`<tr> <td hidden> ${item.id} </td> <td> ${item.name} </td> <td> ${item.age} </td>`);
    }

    myHtmlCode.push("</tbody>");
    myHtmlCode.push("</table>");

    tableDiv.innerHTML = myHtmlCode.join("");
}

async function sendData(){
    let name = document.getElementById("inputName").value;
    let age = document.getElementById("inputAge").value;

    if(!name || !age){
        alert("Completeaza toate campurile!!");
        return;
    }

    await post(apiUrl+"postList", {name: name, age: age});

    await loadTable();
}

async function searchById() {
  const id = document.getElementById("inputId").value;
  const resultDiv = document.getElementById("searchResult");

  if (!id) {
    resultDiv.innerHTML = "<p style='color:red'>Introdu un ID!</p>";
    return;
  }

  try {
    const data = await get(apiUrl + "getObj/" + id);
    resultDiv.innerHTML = `<p>Rezultat:</p> <p> ID: ${data.id} Nume: ${data.name} Varsta: ${data.age}</p>`;
  } catch (err) {
    console.error(err);
    resultDiv.innerHTML =
      "<p style='color:red'>Resursa nu a fost gasita...</p>";
  }
}

loadTable();