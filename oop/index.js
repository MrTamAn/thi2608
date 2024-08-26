let newlist = new CustomerList("Astral City");
let p1 = new Customer(1,"Soc", "02193", "yyy", "mai@gm");
newlist.addNewCustomer(p1);

function show(){
    let list = newlist.getAll()
    let show = ``
    for (let i = 0; i < list.length; i++) {
        show +=`
        <tr>
        <td>${list[i].id}</td>
        <td>${list[i].name}</td>
        <td>${list[i].phone}</td>
        <td>${list[i].address}</td>
        <td>${list[i].mail}</td>
    </tr>`
    }
    document.getElementById("tbody").innerHTML = show;
}
show();
function showFormAdd(){
    let showAdd = ``;
    showAdd+= `
<input type="number" placeholder="Nhap ID" id="id">
<input type="text" placeholder="Nhap Ten khach" id="name">
<input type="number" placeholder="Nhap SDT" id="phone">
<input type="text" placeholder="Nhap Dia chi" id="address">
<input type="email" placeholder="Nhap Email" id="mail">
<button onclick="addNew()">Thêm</button>`
    document.getElementById("div").innerHTML = showAdd;
}
function addNew(){
   let id = document.getElementById("id").value
   let name = document.getElementById("name").value
   let phone = document.getElementById("phone").value
   let address = document.getElementById("address").value
   let mail = document.getElementById("mail").value
    let newCus = new Customer(id,name,phone,address,mail)
    newlist.addNewCustomer(newCus)
    show()
}