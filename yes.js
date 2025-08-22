const febHolidays = [
  "KUU KUU✨ che tu mari",
  "KUU KUU✨ 🤭",
  "Dosti ka rishta sabse pyaara hai, aur usme tu ho toh sabse khaas hai 🤍",
  "Har khushi tujhse judi hai KUU KUU✨",
  "Dil kehna chahta hai bahut kuch, par shabdon me simat nahi paata 💭",
  "Teri muskaan meri duniya roshan kar deti hai ✨",
  "Main kuch keh nahi paata, par tujhse juda reh nahi paata 💖",
  "Dosti se shuru hua safar, aur dil tak pahunch gaya 💕",
  "Tu meri duaon ka wo hissa hai, jise main kabhi khona nahi chahta 🤲",
  "Tere bina lagta hai jaise kahani adhoori ho 💫",
  "Zindagi ke safar me tu ek anmol tohfa hai 🎁",
  "Teri baaton me wo nasha hai jo kabhi utarta nahi 😌",
  "Dosti ka matlab samjha tune, aur khamoshi ka matlab samjha maine 🥺",
  "Tere bina din adhura lagta hai 🌙",
  "Dosti humari jaise ek anmol moti hai, jo har din aur chamakti hai ✨",
  "Kabhi kabhi sochta hu, tu meri zindagi ka sabse khoobsurat raaz hai 💌",
  "Kisi ki zarurat ban jaana hi asli dosti hai, aur tu wahi hai 🤍",
  "Dil ki dhadkanon me ek naam basa hai... KUU KUU✨ 💕",
  "Tere saath waqt udta hai, aur yaadein ruk jaati hai ⏳",
  "Bina kahe sab kuch keh jaati hai teri aankhen 👀",
  "Tu hai toh sab kuch hai, tu na ho toh kuch bhi nahi 🕊",
  "Aansu aaye toh teri yaad sambhal leti hai 💧",
  "Har pal dil me ek hi khwahish hoti hai: tu hamesha khush rahe 🤲",
  "KUU KUU✨, tu meri dosti ka sabse pyara hisa hai 🤍",
  "Dosti aur khamoshi dono tujhse hi judti hai 💭",
  "Dil ke raaz bataane ki zarurat nahi, tu khud samajh jaati hai 💫",
  "Kabhi na socha tha dosti itni khoobsurat hogi 💕",
  "Zindagi ke safar me ek dua hai – tu hamesha mere saath rahe 🌹",
  "Jab bhi tu online hoti hai, din apne aap better lagta hai 🌞",
  "Ek ajeeb sa sukoon milta hai tere saath baat karke 😇",
  "Dosti me jo rishta hai, wo kisi lafz se bhi zyada gehra hai ✨",
  "Kabhi kabhi dil kehta hai, tu bas ek dua ka nateeja hai 🙏",
  "Teri yaadon ka sahara hai, jo har din ko behtareen banata hai 💕",
  "Har khushi tujhse shuru, aur har muskaan tujhpe khatam 🌸",
  "KUU KUU✨, tu meri adhuri kahani ka sabse khoobsurat adhyay hai 📖",
  "Kuch rishton ka koi naam nahi hota, bas wo dil me bas jaate hai... jaise tu 💖",
  "Dosti aur mohabbat ke beech jo rekha hai, tu wahi pal hai jo usse khubsoorat banata hai ✨",
  "Tu meri duniya ka wo hissa hai, jise main khud se bhi zyada sambhalta hu 🥺"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
