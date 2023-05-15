// key : ebb580daf8a6e1fcec5b215244ed1d71

// https://www.flickr.com/services/rest

const base = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const key = "ebb580daf8a6e1fcec5b215244ed1d71";
const per_page = 500;
const format = "json";
const frame = document.querySelector("#list");

const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

//해당 url값으로 비동기식 데이터 호출
fetch(url)
  .then((data) => {

    console.log(data);//가져온 데이터 전체를 보여줌
    let result = data.json(); //가져온 데이터중에 json형태의 값으로 변환함
    console.log(result); //결과물로 만들어진 데이터를 보여준다 
    return result; //해당 결과를 리턴(반환)해줘야 쓸수있다
  })
  .then((json) => {
    //반환된 값을 json이라는 매개변수로 받은뒤
    let items = json.photos.photo; //콘솔에서 본것처럼 그안의 photos 안의 photo로 접근함
    // console.log(items) ; //500장의 사진이 json객체 배열로

    let htmls = "";

    items.map((el) => {
      console.log(el);

      let imgSrc = `http://live.staticflicker.com/${el.server}/${el.id}_${el.secret}_m.jpg`;
      //이미지의 썸네일 url주소
      let imgSrcBig = `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_b.jpg`;
      //큰이미지 주소

      htmls +=`
        <li class="item">
          <div>
            <a href=${imgSrcBig}>
              <img src=${imgSrc}>
            </a>
            <p>${el.title}</a>
          </div>
        </li>
      `;
    })

    frame.innerHTML = htmls;
  })