let ibendo1 = document.querySelector("#ibendo-1");
let ibendo2 = document.querySelector("#ibendo-2");
let ibendo3 = document.querySelector("#ibendo-3");
let ibendo4 = document.querySelector("#ibendo-4");
let ibendo5 = document.querySelector("#ibendo-5");
let navbar = document.querySelector("#navbar");

let title = document.querySelector("#title");

let ibendoChange = (c) => {
  if (c == 1) {
    title.innerHTML = `<img src="./img/index-title.png" alt="" data-aos="fade-down">`;

    navbar.children[0].children[0].children[4].children[0].innerHTML =
      "<p>現在</p>";
    ibendo1.style.display = "flex";
    ibendo2.style.display = "none";
    ibendo3.style.display = "none";
    ibendo4.style.display = "none";
    navbar.children[0].children[0].classList.add("card-change");
  }
  if (c == 2) {
    for (let index = 0; index < 5; index++) {
      navbar.children[index].children[0].classList.remove("card-change");
    }
    navbar.children[1].children[0].children[4].children[0].innerHTML =
      "<p>現在</p>";
    title.innerHTML = `<img src="./img/index-title2.png" alt="" data-aos="fade-down" >"`;
    ibendo1.style.display = "none";
    ibendo2.style.display = "flex";
    ibendo3.style.display = "none";
    ibendo4.style.display = "none";
    navbar.children[1].children[0].classList.add("card-change");
  }
  if (c == 3) {
    for (let index = 0; index < 5; index++) {
      navbar.children[index].children[0].classList.remove("card-change");
    }

    title.innerHTML = `<img src="./img/index-title3.png" alt="" data-aos="fade-down" >"`;
    ibendo1.style.display = "none";
    ibendo2.style.display = "none";
    ibendo3.style.display = "flex";
    ibendo4.style.display = "none";
    navbar.children[2].children[0].classList.add("card-change");
  }
  if (c == 4) {
    for (let index = 0; index < 5; index++) {
      navbar.children[index].children[0].classList.remove("card-change");
    }
    navbar.children[3].children[0].children[4].children[0].innerHTML =
      "<p>現在</p>";
    title.innerHTML = `<img src="./img/index-title4.png" alt="" data-aos="fade-down" >"`;
    ibendo1.style.display = "none";
    ibendo2.style.display = "none";
    ibendo3.style.display = "none";
    ibendo4.style.display = "flex";
    navbar.children[3].children[0].classList.add("card-change");
  }
};

// 時刻表切換
let streamMonth = document.querySelector("#streamMonth");
let streamToday = document.querySelector("#streamToday");
let streamDay = document.querySelector("#streamDay");
let vtuberTime = document.querySelector("#vtuberTime");
let vtuberName = document.querySelector("#vtuberName");
let vtuberPeople = document.querySelector("#vtuberPeople");
let vtubercard = document.querySelector("#vtubercard");
let idCard = document.querySelector("#idCard");
let vtubercardbackground = document.querySelector("#vtubercard-background");
let streamcard = document.querySelector("#streamcard");
let idCardLittle = document.querySelector("#idCard-little");
let sixup = document.querySelector(".sixup");

let today = new Date();
let month = today.getMonth() + 1;
let kyo = today.getDate();

let changeDate = (day) => {
  axios.get("./json/data.json").then(function (response) {
    idCard.innerHTML = "";
    //確認今天幾個人直播並劃出卡
    let vtuberArr = [];

    for (let index = 0; index < 76; index++) {
      if (response.data[index].date == day) {
        vtuberArr.push(response.data[index]);
      }
    }

    for (let index = 0; index < vtuberArr.length; index++) {
      idCard.innerHTML += `<a href="${vtuberArr[index].url}" class="sixup">
  <div
      class="vtubercard"
      id="vtubercard"
  >

      <div class="card-1">
          <div class="card-2">
              <div
                  class="vtubercard-people"
                  id="vtuberPeople"
              >
              
                  <img
                      src=${vtuberArr[index].img}
                  >

              </div>
              <div class="card-mark1">
                  <div class="mark"></div>
              </div>
              <div class="card-mark2">
                  <div class="mark"></div>
              </div>
              <div class="card-mark3">
                  <div class="mark"></div>
              </div>
              <div class="card-mark4">
                  <div class="mark"></div>
              </div>
          </div>

      </div>
      <div class="card-1-bottom">
          <div class="card-1-bottom1">
              <div class="ten-1"></div>
          </div>
          <div
              class="card-1-bottom2"
              id="vtuberName"
          >
              <p>${vtuberArr[index].name}</p>
          </div>
          <div class="card-1-bottom3">
              <div class="ten-2"></div>
          </div>
      </div>

      <div
          class="vtubercard-time"
          id="vtuberTime"
      >
          <p>${vtuberArr[index].time}</p>
      </div>
  </div>
</a>`;
      //修改今天日期
      streamMonth.innerHTML = `<p>${vtuberArr[index].month}月</p>`;
      streamDay.innerHTML = `<p>${vtuberArr[index].date}</p>`;
    }
  });
};

//漢堡開關
let clos = document.querySelector("#clos");
let taggerbg = document.querySelector("#taggerbg");
let linnkerbg = document.querySelector("#linnkerbg");

let hamber = (e) => {
  if (e == 1) {
    linnkerbg.style.display = "none";
    taggerbg.style.display = "none";
    clos.innerHTML = `<a href="javascript:hamber(2);">🎵</a>`;
  } else {
    linnkerbg.style.display = "block";
    taggerbg.style.display = "block";
    clos.innerHTML = `<a href="javascript:hamber(1);">🎵</a>`;
  }
};

//表單資料記錄傳送
let datainput = document.querySelector("#datainput");
let nameinput = document.querySelector("#nameinput");
let phoneNumber = document.querySelector("#phoneNumber");
let email = document.querySelector("#email");
let postalcode = document.querySelector("#postalcode");
let addides = document.querySelector("#addides");
let years = "";
let checkid = document.querySelector("#checkid");
let checkadd = document.querySelector("#checkadd");

//圖片上傳轉化base64正面
let upp1 = document.querySelector("#upp1");
let input = document.querySelector("#idcardon");
let demo = document.querySelector("#onpreview");
let reader = new FileReader();
reader.onload = (e) => {
  demo.src = e.target.result;
  sessionStorage.setItem("IDCardRS", demo.src);
};
let upload = (e) => {
  let uploadimg = e.target.files || e.dataTransfer.files;
  reader.readAsDataURL(uploadimg[0]);
  upp1.style.display = "none";
};
input.addEventListener("change", upload);

//圖片上傳轉化base64反面
let upp2 = document.querySelector("#upp2");
let input2 = document.querySelector("#idcardclose");
let demo2 = document.querySelector("#closepreview");
let reader2 = new FileReader();
reader2.onload = (e) => {
  demo2.src = e.target.result;
  sessionStorage.setItem("IDCardWS", demo2.src);
};
let upload2 = (e) => {
  let uploadimg = e.target.files || e.dataTransfer.files;
  reader2.readAsDataURL(uploadimg[0]);
  upp2.style.display = "none";
};
input2.addEventListener("change", upload2);

//存是否超過18歲
const checkon = (e) => {
  if (e == 1) {
    years = "yes";
    sessionStorage.setItem("isAdult", 1);
  }
  if (e == 0) {
    years = "no";
    sessionStorage.setItem("isAdult", 0);
  }
};

//暫存表單資料
let nameinputcheck = document.querySelector("#nameinputcheck");
let phoneNumbercheck = document.querySelector("#phoneNumbercheck");
let emailcheck = document.querySelector("#emailcheck");
let postalcodecheck = document.querySelector("#postalcodecheck");
let addidescheck = document.querySelector("#addidescheck");
let onpreviewcheck = document.querySelector("#onpreviewcheck");
let closepreviewcheck = document.querySelector("#closepreviewcheck");

const settes = () => {
  sessionStorage.setItem("name", nameinput.value);
  sessionStorage.setItem("phone", phoneNumber.value);
  sessionStorage.setItem("email", email.value);
  sessionStorage.setItem("zcode", postalcode.value);
  sessionStorage.setItem("address", addides.value);

  let yearcheck = sessionStorage.getItem("isAdult");
  if (yearcheck == 0) {
    datainput.style.display = "none";
    checkid.style.display = "flex";
    checkadd.style.display = "none";
  } else if (yearcheck == 1) {
    datainput.style.display = "none";
    checkid.style.display = "none";
    checkadd.style.display = "flex";

    nameinputcheck.innerHTML = `<p>${sessionStorage.getItem("name")}</p>`;
    phoneNumbercheck.innerHTML = `<p>${sessionStorage.getItem("phone")}</p>`;
    emailcheck.innerHTML = `<p>${sessionStorage.getItem("email")}</p>`;
    postalcodecheck.innerHTML = `<p>${sessionStorage.getItem("zcode")}</p>`;
    addidescheck.innerHTML = `<p>${sessionStorage.getItem("address")}</p>`;

    onpreviewcheck.innerHTML = `
    <img src="${sessionStorage.getItem("IDCardRS")}"
    style="height: 17.6vh; width: 27.2vh;">`;
    closepreviewcheck.innerHTML = `
    <img src="${sessionStorage.getItem("IDCardWS")}"
    style="height: 17.6vh; width: 27.2vh;">`;
  } else {
    alert("請確認是否填寫完畢。");
  }
};

const postcheck = () => {
  let dataId = JSON.stringify({
    name: sessionStorage.getItem("name"),
    phone: sessionStorage.getItem("phone"),
    zcode: sessionStorage.getItem("zcode"),
    address: sessionStorage.getItem("address"),
    isAdult: sessionStorage.getItem("isAdult"),
    IDCardRS: sessionStorage.getItem("IDCardRS"),
    IDCardWS: sessionStorage.getItem("IDCardWS"),
  });

  axios({
    method: "POST",
    url: "https://pwc.gameflier.com/service/api/taipeicitymall",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: dataId,
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
