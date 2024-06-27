document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o carrossel
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000, // Tempo em milissegundos para trocar de slide automaticamente
      ride: 'carousel'
    });
  
    // Adiciona um evento customizado para quando o slide for alterado
    myCarousel.addEventListener('slide.bs.carousel', function (event) {
      console.log('Slide alterado para: ', event.to);
    });
  
    // Exemplo de como parar e iniciar o carrossel programaticamente
    document.querySelector('#carouselExampleIndicators').addEventListener('mouseover', function () {
      carousel.pause();
    });
    document.querySelector('#carouselExampleIndicators').addEventListener('mouseout', function () {
      carousel.cycle();
    });
  });
  