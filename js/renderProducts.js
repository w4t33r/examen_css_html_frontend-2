const productsContainer = document.querySelector('.wrapper-main');

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
    // Получаем данные из products.json
    const response = await fetch('./js/products.json');
    console.log(response)
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    console.log(productsArray)
    // Запускаем ф-ю рендера (отображения товаров)
    renderProducts(productsArray);
}

// function renderProducts(productsArray) {
//     productsArray.forEach(function (item) {
//         const productHTML = `<div class="col-md-6">
// 						<div class="card mb-4" data-id="${item.id}">
// 							<img class="product-img" src="img/roll/${item.imgSrc}" alt="">
// 							<div class="card-body text-center">
// 								<h4 class="item-title">${item.title}</h4>
// 								<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>
//
// 								<div class="details-wrapper">
//
// 									<!-- Счетчик -->
// 									<div class="items counter-wrapper">
// 										<div class="items__control" data-action="minus">-</div>
// 										<div class="items__current" data-counter>1</div>
// 										<div class="items__control" data-action="plus">+</div>
// 									</div>
// 									<!-- // Счетчик -->
//
// 									<div class="price">
// 										<div class="price__weight">${item.weight}г.</div>
// 										<div class="price__currency">${item.price} ₽</div>
// 									</div>
// 								</div>
//
// 								<button data-cart type="button" class="btn btn-block btn-outline-warning">
// 									+ в корзину
// 								</button>
//
// 							</div>
// 						</div>
// 					</div>`;
//         productsContainer.insertAdjacentHTML('beforeend', productHTML);
//     });

// function renderProducts(productsArray) {
//     productsArray.forEach(function (item) {
//         const productHTML = `
//     <section class="tours">
//         <div class="wrapper-main">
//             <div class="wrapper-tours tour">
//                 <div class="tour-img">
//                     <img src="./images/tours/${item.imgSrc}" alt="" class="tour_thumb">
//                 </div>
//                 <div class="tour-info">
//                     <h3 class="tour-title">
//                     ${item.tour_title}
//                     </h3>
//                     <p class="tour-description">
//                     ${item.tour_description}
//                     </p>
//                 </div>
//             </div>
//
//          <div class="wrapper-tours tour">
//                 <div class="tour-info">
//                     <h3 class="tour-title">
//                     ${item.tour_title}
//
//                     </h3>
//                     <p class="tour-description">
//                     ${item.tour_description}
//
//                     </p>
//                 </div>
//                 <div class="tour-img tour-mobile">
//                     <img src="./images/tours/${item.imgSrc}" alt=""
//                          class="tour_thumb">
//                 </div>
//             </div>
//
//             </div>
// </section>
// `;
//         productsContainer.insertAdjacentHTML('beforeend', productHTML);
//     });
// }

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `
   <div class="wrapper-tours tour">
                <div class="tour-img">
                    <img src="./images/tours/${item.imgSrc}" alt="Prefecture in Focus: Tottori" class="tour_thumb">
                </div>
                <div class="tour-info">
                    <h3 class="tour-title">
                      ${item.tour_title}
                    </h3>
                    <p class="tour-description">
                      ${item.tour_description}
                    </p>
                    <a href="#" class="tour-more">
                        VIEW MORE
                    </a>
                </div>

            </div>
            <div class="wrapper-tours tour">

                <div class="tour-info">
                    <h3 class="tour-title">
                       ${item.tour_title}
                       </h3>
                    <p class="tour-description">
                      ${item.tour_description}
                    </p>
                    <a href="#" class="tour-more">
                        VIEW MORE
                    </a>
                </div>
                <div class="tour-img tour-mobile">
                    <img src="./images/tours/${item.imgSrc}" alt="Featured Neighborhood: Kyoto’s Arashiyama"
                         class="tour_thumb">
                </div>
`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}