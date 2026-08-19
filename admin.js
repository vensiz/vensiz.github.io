const adminData =
JSON.parse(
localStorage.getItem("vensiz_admin")
);


if(!adminData){

    window.location.href =
    "admin-login.html";

}



const adminInfo =
document.querySelector(".admin-info");


if(adminInfo){

    adminInfo.innerHTML =
    `
    🛡 ${adminData.username} | ${adminData.rank}
    `;

}
