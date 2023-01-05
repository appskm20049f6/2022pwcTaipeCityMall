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
let post = document.querySelector("#post");
let nameinput = document.querySelector("#nameinput");
let phoneNumber = document.querySelector("#phoneNumber");
let email = document.querySelector("#email");
let postalcode = document.querySelector("#postalcode");
let addides = document.querySelector("#addides");
let years = "";
let checkid = document.querySelector("#checkid");
let checkadd = document.querySelector("#checkadd");

//圖片上傳轉化base64

//圖片上傳轉化base64預覽

const checkon = (e) => {
  if (e == 1) {
    years = "yes";
    sessionStorage.setItem("years", 1);
  }
  if (e == 0) {
    years = "no";
    sessionStorage.setItem("years", 0);
  }
};

const settes = () => {
  sessionStorage.setItem("name", nameinput.value);
  sessionStorage.setItem("phoneNumber", phoneNumber.value);
  sessionStorage.setItem("email", email.value);
  sessionStorage.setItem("postalcode", postalcode.value);
  sessionStorage.setItem("addides", addides.value);
  sessionStorage.setItem("name", nameinput.value);

  post.style.display = "none";

  let yearcheck = sessionStorage.getItem("years");

  if (yearcheck == 0) {
    checkid.style.display = "flex";
  }
};
