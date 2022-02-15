
<template>
  <div class="bg-light-green h-fit">
    <main class="text-black flex justify-center items-center">
        <div class="flex flex-col justify-center items-center lg:flex-row lg:items-center lg:h-min lg:w-full lg:h-full lg:justify-around" style="height: 84vh;">
            <div class="text-center flex flex-col items-center">
                <h1 class="mt-7 lg:mt-0 text-3xl font-bold mb-5 lg:text-6xl font-semibold leading-normal">
                    <p style="line-height: 1.2;">Hola, soy <br>Paula Pereyra</p>
                </h1>
                <span>Soy <span
                   class="txt-rotate"
                   data-period="5000"
                   data-rotate='[ "analista de sistemas.", "desarrolladora web junior." ]'></span></span>
                <a href="#aboutme" class="w-52 mt-5 bg-dark-pink hover:bg-dark-pink-hover text-white font-bold py-2 px-4 rounded">Sobre mí</a>
            </div>
            <div class="m-9"><img src="@/assets/img/foto1.svg" alt="imagen vector" class="w-56 lg:w-96" /></div>
        </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "Home",
    mounted(){

      /* Configuración del texto animado */
      var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };

      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function() {
          that.tick();
        }, delta);
      };

      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
      };
    }
  }
</script>

<style type="scss">
  .txt-rotate > .wrap { border-right: 0.08em solid #666 }
</style>
