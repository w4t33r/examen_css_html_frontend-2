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

function showData(value) {
    console.log('DATA:', value)
}



async function getData(value) {
    const result = await fetch("js/products.json");
    result.json().then(res =>
        res.forEach((item) => {
            console.log(item)
            const keys = Object.keys(item);
            keys.forEach(key => {
                console.log('key foreach',key)
                if (value === item[key]) {
                    renderFound(item)
                    let data = new Array(item)
                    showData(data)
                    localStorage.removeItem('id');
                }



            });
        })
    );

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

