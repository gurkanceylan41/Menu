import { buttonsData, menu } from "./db.js";
import { calculatePrice, elements } from "./helpers.js";

//*Butonların bulundugu alana tıkladıgımızda searchCategory calısır.
elements.buttonsArea.addEventListener("click", searchCategory);

//! FONKSİYONLAR
function searchCategory(e) {
  //* Tıkladıgımız butonun data özelliklerine eriştik ve bir değişkene aktardık
  const category = e.target.dataset.category;

  const filteredMenu = menu.filter((item) => item.category === category);

  if (category === "all") {
    renderMenuItems(menu);
  } else {
    renderMenuItems(filteredMenu);
  }

  renderButtons(category);
}
//*Ekrana menu elemanlarını aktaran fonksiyondur
function renderMenuItems(menuItems) {
  elements.menuArea.innerHTML = menuItems
    .map(
      (menuItem) => `
     <a    
        id="cart"
        href="productDetail.html?id=${menuItem.id} "
        class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2"
      >
        <img class="raunded shadow" src="${menuItem.img}" alt="" />
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <h5>${menuItem.title}</h5>
            <p class="text-success">${calculatePrice(menuItem.price)}₺</p>
          </div>
          <p class="lead">
            ${menuItem.desc}
          </p>
        </div>
      </a>
  
  
  `
    )
    .join("");
}

function renderButtons(active) {
  elements.buttonsArea.innerHTML = "";

  //* Yeni butonlar oluturmak icin buttonsdata icerisindeki verileri dönüp her bir veri için bir button oluştururuz
  buttonsData.forEach((btn) => {
    //* Her bir veri için bir HTML buton etiketi oluştur
    const buttonElement = document.createElement("button");

    buttonElement.className = "btn btn-outline-dark filter-btn";
    //* Oluşturdugumuz butonlara class ekledik

    //* Oluşturdugumuz butonun içerigini değiştirme
    buttonElement.textContent = btn.text;
    //*Oluşturdugumuz butonun hangi kategoride oldugu bilgisini button elementine ekledik
    buttonElement.dataset.category = btn.value;

    //*HTML e gönderme
    elements.buttonsArea.appendChild(buttonElement);
    //* Egerki active kategorisiyle buton eşleşirse ona farklı class ekle
    if (btn.value === active) {
      buttonElement.classList.add("bg-dark", "text-light");
    }
  });
}

//!OLAY İZLEYİCİLERİ
//* Sayfa yüklendigi anda renderMenuItems fonksiyonunu çalıştır ve menu parametresini gönder
addEventListener("DOMContentLoaded", () => {
  renderMenuItems(menu);
  renderButtons("all");
});

//*Butonların bulundugu alana tıkladıgımızda searchCategory calısır.
elements.buttonsArea.addEventListener("click", searchCategory);
