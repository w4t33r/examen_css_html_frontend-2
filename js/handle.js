const productsContainer = document.querySelector('.wrapper-main');
// const link = document.querySelectorAll('.header_link')


// link.forEach(createURL => {
//     createURL.addEventListener('click', function () {
//         const getId = parseInt(EventTarget.id)
//         console.log(getId)
//         getData(getId)
//     })
// })

const j = document.querySelectorAll(".places-card-link")
const handleClick = (event => {
    const res = event.target.id
    console.log('HandleClick', res)
    localStorage.setItem('id', res)
    window.location.assign('single-test.html')
    // HTTP 301 response
})
j.forEach(handle => {
    handle.addEventListener('click', handleClick)
})

const out = localStorage.getItem('id')
console.log(typeof out, 'out')
console.log('LocalStorage-out', out)
getData(out)

async function getData(value) {
    console.log('Value-func', value)
    const result = await fetch("js/products.json");
    console.log(typeof value)
    console.log(result)
    result.json().then(res =>
        res.forEach((item) => {
            const keys = Object.keys(item);
            keys.forEach(key => {
                if (value === item[key]) {
                    console.log('EQUAL.');
                    console.log('Value:', value)
                    console.log('Itemkey', item[key])
                    console.log('not-equal')
                    renderFound(item);
                    localStorage.removeItem('id');
                }

            });
        })
    );

}

const renderFound = (item) => {
    productsContainer.innerHTML +=
        `
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
                </div>`;
}
