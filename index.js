
const slides = document.querySelectorAll('.slide') // коллекция узлов со слайдами
const prev = document.querySelector('.vector_left')
const next = document.querySelector('.vector_right') // кнопки влево вправо

const selectedItem= document.querySelectorAll('.page_item')
const selectedProj= document.querySelectorAll('.photo_projects-completed-item') // между стрелками и ссылки сверху

let currentSlideIndex = 0
let currentSlide = slides[currentSlideIndex];

currentSlide.classList.add('active') // отображение первого слайда

function showNextSlide() {
  let nextSlideIndex = (currentSlideIndex + 1) % slides.length;
  currentSlide = slides[currentSlideIndex];
  let nextSlide = slides[nextSlideIndex];

  currentSlide.classList.add('prev-slide'); 
  nextSlide.classList.add('next-slide');
  currentSelectedAllRemove()
  
  setTimeout(function(){
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    currentSlide.classList.remove('prev-slide');
    nextSlide.classList.remove('next-slide');
    currentSlideIndex = nextSlideIndex;
    currentSelectedAllAdd()
  },100);
}

function showPreviousSlide() {
  let previousSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  currentSlide = slides[currentSlideIndex];
  let nextSlide = slides[previousSlideIndex];

  currentSlide.classList.add('next-slide'); 
  nextSlide.classList.add('prev-slide');
  currentSelectedAllRemove()
  
  setTimeout(function(){
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    currentSlide.classList.remove('next-slide');
    nextSlide.classList.remove('prev-slide');
    currentSlideIndex = previousSlideIndex;
    currentSelectedAllAdd()
  },100);
} 
// функции переключения влево вправо

prev.addEventListener('click', showPreviousSlide)
next.addEventListener('click', showNextSlide)
//  переключение влево вправо

function currentSelectedAllAdd() {
  let currentItem = selectedItem[currentSlideIndex]
  let currentProj = selectedProj[currentSlideIndex]
  currentItem.classList.add('current'); 
  currentProj.classList.add('current');
}
function currentSelectedAllRemove() {
  let currentItem = selectedItem[currentSlideIndex]
  let currentProj = selectedProj[currentSlideIndex]
  currentItem.classList.remove('current'); 
  currentProj.classList.remove('current');
}
// эти функции нужны для стрелочек(Влево, вправо), чтобы отслеживать текущий слайд

selectedItem.forEach(function(node,index){  
  node.addEventListener('click',function(){
    let clickedIndex = Array.from(selectedItem).indexOf(node) // определяет индекс кликнутого
    let trackPreviosSlideItem = selectedItem[currentSlideIndex]
    let trackSlideItem = selectedItem[clickedIndex]

    let trackPreviosSlideProj = selectedProj[currentSlideIndex]
    let trackSlideProj = selectedProj[clickedIndex] // определяет каждой ссылке предыдущий и след индекс
    

    if (clickedIndex === currentSlideIndex) {
      true
    }
    if (clickedIndex > currentSlideIndex) {
      showSelectedSlideMore(clickedIndex)
      trackPreviosSlideItem.classList.remove('current'); // удаляет класс пердыдущему слайду
      trackPreviosSlideProj.classList.remove('current');
      
      currentSlideIndex = clickedIndex
      
      trackSlideItem.classList.add('current'); // добавляет класс кликнутому слайду
      trackSlideProj.classList.add('current');
    }
    if (clickedIndex < currentSlideIndex) {
      showSelectedSlideLess(clickedIndex)
      trackPreviosSlideItem.classList.remove('current');
      trackPreviosSlideProj.classList.remove('current');
      
      currentSlideIndex = clickedIndex
      
      trackSlideItem.classList.add('current');
      trackSlideProj.classList.add('current');
    }
  })
})
selectedProj.forEach(function(node,index){
  node.addEventListener('click',function(){
    let clickedIndex = Array.from(selectedProj).indexOf(node)
    let trackPreviosSlideProj = selectedProj[currentSlideIndex]
    let trackSlideProj = selectedProj[clickedIndex]

    let trackPreviosSlideItem = selectedItem[currentSlideIndex]
    let trackSlideItem = selectedItem[clickedIndex]
    
    if (clickedIndex === currentSlideIndex) {
      true
    }
    if (clickedIndex > currentSlideIndex) {
      showSelectedSlideMore(clickedIndex)
      trackPreviosSlideItem.classList.remove('current');
      trackPreviosSlideProj.classList.remove('current');
      
      currentSlideIndex = clickedIndex
      
      trackSlideItem.classList.add('current');
      trackSlideProj.classList.add('current'); 
    } 
    if (clickedIndex < currentSlideIndex) {
      showSelectedSlideLess(clickedIndex)
      trackPreviosSlideItem.classList.remove('current');
      trackPreviosSlideProj.classList.remove('current');
      
      currentSlideIndex = clickedIndex
      
      trackSlideItem.classList.add('current');
      trackSlideProj.classList.add('current');
    }
  })
})




function showSelectedSlideMore(index) {
  currentSlide = slides[currentSlideIndex];
  let nextSlide = slides[index];

  currentSlide.classList.add('prev-slide'); 
  nextSlide.classList.add('next-slide');
  
  setTimeout(function(){
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    currentSlide.classList.remove('prev-slide');
    nextSlide.classList.remove('next-slide');
    
  },100);
}
function showSelectedSlideLess(index) {
  currentSlide = slides[currentSlideIndex];
  let nextSlide = slides[index];

  currentSlide.classList.add('next-slide'); 
  nextSlide.classList.add('prev-slide');
  
  setTimeout(function(){
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
    currentSlide.classList.remove('next-slide');
    nextSlide.classList.remove('prev-slide');
  },100);
}

currentSelectedAllAdd()