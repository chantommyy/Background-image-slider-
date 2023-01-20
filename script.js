let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

    //clear all images
    function reset(){
      for (let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
      }
    }

    //Initial slider
    function startSlide(){
      reset();
      sliderImages[0].style.display = 'block';
    }

    //show previos slider
    function leftSlide(){
      reset();
      sliderImages[current - 1].style.display = 'block';
      current--;
    }


  //show next slider
  function rightSlide(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
  }

    //left arrow click, it has first image, click the left button, go to the last page which is the maximum page (.length)
    arrowLeft.addEventListener('click', () => {
      if(current === 0){
        current = sliderImages.length;
      }
      leftSlide();
    });
    //If it shows the last image, we want to go back to the first image.
    arrowRight.addEventListener('click', () => {
      if(current === sliderImages.length - 1){
        current = -1
      }
      rightSlide();
    });
