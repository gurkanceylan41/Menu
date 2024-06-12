import { menu } from "./db.js";
import { calculatePrice, elements } from "./helpers.js";

//*Urldeki parameteleri yönetibilmek için new URLSearchParams classından örnek oluşturduk
//* Örneği oluştururken kendi URLmiizde ki parametreleri gönderdik.
const search = window.location.search;
const searchParams = new URLSearchParams(search);
const paramid = searchParams.get("id");

//*Url'den aldıgımız paramid değişkenini numbera çevirdik ve sonrasında bu idli elemanı dizi içerisinden bulduk.
const product = menu.find((item) => item.id === Number(paramid));

elements.outlet.innerHTML = `

<div class="d-flex justify-content-between aling-items-center">
        <a href="index.html"><i class="bi bi-house fs-1"></i></a>
        <div>
          <p>anasayfa / ${
            product.category
          } / ${product.title.toLocaleLowerCase()}</p>
        </div>
      </div>
      <h1 class="text-center my-3 shadow p-2 rounded">${product.title}</h1>
      <div class="d-flex justify-content-center aling-items-center">
        <img
          style="max-width: 480px"
          class="img-fluid shadow rounded"
          src="${product.img}"
          alt=""
        />
      </div>
      <div>
        <h3 class="my-5">
          Ürün Kategorisi: <span class="text-success">${product.category}</span>
        </h3>
        <h3>Ürün Fiyatı: <span class="text-success">${calculatePrice(
          product.price
        )}₺</span></h3>
      </div>
      <p class="lead fs-3">
        ${product.desc}
      </p>


`;
