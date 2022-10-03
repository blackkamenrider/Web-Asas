



 let     time = 50; /*esta variavel mostra quanto tempo em mile segundo vai durar */
         currentImageIndex = 0; /*esta variável mostra qual imagem esta acontecendo agora*/
      /*   images = document.querySelectorAll("#slider img"), /*esta variável guarda todas as imagens que irei manipular o local na frente do recebe o valor de, mostra o local onde elas estao*/
        /* max = images.length; /*maximo de imagens que tenho irei colocar o tamanho da variavel que guarda todas as imagens*/

// passei as variaveis images e max para local porque nao funcionaram aqui fora


//nextImage puxa a proxima imagem
    function nextImage(){
     let images = document.querySelectorAll("#slider img");
     let max = images.length;

        /* console.log(max);*/

       images[currentImageIndex].classList.remove("selected");

        currentImageIndex++;

        if(currentImageIndex >= max){
            currentImageIndex = 0;
        }

        images[currentImageIndex].classList.add("selected");
    }



    /*esta funçao dará inicio ao loop de imagens */
    function start(){
        setInterval(() => {
            //troca de images
            nextImage();
        }, time); // ele fica executando uma funçao em cada momento neste caso coloquei minha variavel time
    }


   window.addEventListener("load", start);/*quando a window for totalmente carregada sera executado a func start*/
