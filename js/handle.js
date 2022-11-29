const productsContainer = document.querySelector('.wrapper-main');
const target = document.querySelectorAll(".places-card-link")
const handleClick = (event => {
    const res = event.target.id
    console.log('HandleClick', res)
    localStorage.setItem('id', res)
    window.location.assign('single-test.html')
    // HTTP 301 response
})
target.forEach(handle => {
    handle.addEventListener('click', handleClick)
})

getData(localStorage.getItem('id'))

async function getData(value) {
    const result = await fetch("js/products.json");
    result.json().then(res =>
        res.filter((item) => {
            if (item.id === value) {
                renderFound(item)
                console.log('item:id', item.id)
                console.log('v', value)
            }
        }))
}

const renderFound = (item) => {
    localStorage.removeItem('id');
    productsContainer.innerHTML +=
        `
        <div class="wrapper-tours tour">
                <div class="tour-img">
                    <img src="./images/tours/${item.imgSrc_second}" alt=${item.alt} class="tour_thumb">
                </div>
                <div class="tour-info">
                    <h3 class="tour-title">
                      ${item.tour_title}
                    </h3>
                    <p class="tour-description">
                      ${item.tour_description}
                    </p>
                   
                </div>

        </div>
    </div>            
   <div class="wrapper-tours tour">

                <div class="tour-info">
                    <h3 class="tour-title">
                   
                       </h3>
                    <p class="tour-description">
                      ${item.tour__desc}
                    </p>
                    <a href="about-tours.html" class="tour-more">
                        VIEW MORE
                    </a>
                </div>
                <div class="tour-img tour-mobile">
                    <img src="./images/tours/${item.imgSrc}" alt=${item.alt}
                         class="tour_thumb">
                </div>
   </div>`;
}

