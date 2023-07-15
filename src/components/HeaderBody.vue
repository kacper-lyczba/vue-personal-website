<template>
  <header class="header">
    <div class="header_wrapper">
      <div class="header_text-wrapper">
        <h2 class="header_subtitle">Hello World, I am</h2>
        <h1 class="header_title">Kacper Łyczba</h1>
        <h2 class="header_subtitle">A Fullstack Web Developer</h2> 
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, rgba(30,11,54,1) 0%, rgba(202,55,130,1) 100%);
  overflow: hidden;
  border-radius: 35px;
  z-index: 3;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-image: url('../img/background.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }

  &_wrapper {
    max-width: 1400px;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }

  &_text-wrapper {
    position: absolute;
    bottom: 25%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  &_title {
    color: var(--vt-c-text-dark-1);
    font-weight: 500;
    font-size: 85px;
    line-height: 88px;
    font-family: VT323;
    text-transform: uppercase;
    text-align: center;
  }

  &_subtitle {
    color: var(--vt-c-text-dark-2);
    font-weight: 400;
    font-size: 40px;
    font-family: Happy Monkey;
    text-align: center;
    text-transform: uppercase;
  }
}

@media(max-width: 1400px) { // Narrow screen or big tablet
  .header_wrapper {
    max-width: 1000px;
  }
}

@media(max-width: 1000px) { // Tiny screen or standard tablet
  .header {
    &_wrapper {
      max-width: 600px;
    }

    &_title {
      font-size: 83px;
    }

    &_subtitle {
      font-size: 37px;
    }
  }
}

@media(max-width: 600px) { // Mobile phone
  .header {
    &_wrapper {
      max-width: 320px;
    }

    &_title {
      font-size: 53px;
      line-height: 65px;
    }

    &_subtitle {
      font-size: 17px;
    }
  }
}

@media(min-width: 2000px) { // 1440p
  .header {
    &_wrapper {
      max-width: 2000px;
    }

    &_title {
      font-size: 100px;
      line-height: 110px;
    }

    &_subtitle {
      font-size: 45px;
    }
  }
}

@media(min-width: 3000px) { // 4K
  .header {
    border-radius: 100px;

    &_wrapper {
      max-width: 3000px;
    }

    &_title {
      font-size: 140px;
      line-height: 150px;
    }

    &_subtitle {
      font-size: 70px;
    }
  }
}

@media(min-width: 6000px) { // 8K
  .header {
    border-radius: 200px;

    &_wrapper {
      max-width: 6000px;
    }

    &_title {
      font-size: 280px;
      line-height: 300px;
    }

    &_subtitle {
      font-size: 140px;
    }
  }
}
</style>
