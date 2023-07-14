<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'AboutMe',
  setup() {
    const getImageUrl = (name: string) => {
      return new URL(`./TechIcons/${name}.svg`, import.meta.url).href
    }

    const techstack = ref([
      'React',
      'Vue',
      'Redux',
      'NodeJS',
      'Vite',
      'HTML',
      'CSS',
      'TypeScript',
      'JavaScript',
      'PostgreSQL'
    ]);

    return {
      techstack, getImageUrl
    };
  }
}
</script>

<template>
  <main class="about">
    <div class="about_wrapper">
      <h1 class="about_title">About me</h1>

      <div class="about_content">
        <div class="about_separator about_separator--big"></div>

        <img src="../img/Me.png" class="about_image" />

        <div class="about_separator"></div>

        <h2 class="about_description">
          I am a young, aspiring Full-Stack Developer. I have been fascinated with programming since a very young age, and have since been chasing that passion. Throughout my still-short time in the field, I have become proficient at React, TypeScript, Node.JS, Git, and especially debugging. It isn't possible to write perfect code all the time after all, and dealing with errors is, in my opinion, what defines a developer.
        </h2>

        <div class="about_separator about_separator--big"></div>
      </div>

      <div class="about_technologystack">
        <h1 class="about_techtitle">Technology Stack</h1>
        <ul class="about_techlist">
          <li v-for="item in techstack" v-bind:key="item" class="about_techitem">
            <div class="about_techitem-imagewrapper">
              <img v-bind:src="getImageUrl(item)" class="about_techitem-image" />
            </div>

            <div class="about_techitem-textwrapper">
              <h2 class="about_techitem-text">{{ item }}</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.about {
  height: 1150px;
  width: 100%;
  position: relative;
  background: linear-gradient(180deg, rgba(30,11,54,1) 0%, rgba(24,24,24,1) 100%);
  top: -50px;
  display: flex;
  justify-content: center;
  z-index: 2;

  &_wrapper {
    max-width: 1400px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  &_title {
    position: relative;
    margin-top: 120px;
    color: var(--vt-c-text-dark-1);
    font-weight: 600;
    font-size: 60px;
    font-family: Happy Monkey;
    text-align: center;
    text-transform: uppercase;

    &::after {
      position: absolute;
      content: "";
      height: 2px;
      width: 100%;
      bottom: 10px;
      left: 0;
      background-color: var(--vt-c-text-dark-1);
      box-shadow: 0 0 20px 3px var(--vt-c-text-dark-1);
      border-radius: 8px;
    }
  }

  &_content {
    max-width: 1400px;
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &_separator {
    width: 3px;
    height: 55%;
    border-radius: 10px;
    background-color: var(--vt-c-indigo);
    box-shadow: 0 0 15px 5px var(--vt-c-indigo);

    &--big {
      height: 80%;
    }
  }

  &_image {
    width: 360px;
    height: 360px;
    object-fit: cover;
    background: linear-gradient(115deg, rgba(248, 248, 248, 0.808) 0%, rgba(24,24,24,1) 85%);
    border-radius: 180px;
    box-shadow: 8px 8px 15px 5px #600b96;
  }

  &_description {
    word-wrap: break-word;
    max-width: 781px;
    text-align: justify;
    font-weight: 600;
    color: var(--vt-c-text-dark-1);
    font-family: Klee One;
  }

  &_tech {
    &nologystack {
      width: 800px;
      padding: 20px;
      background-color: var(--vt-c-indigo);
      display: flex;
      border-radius: 45px;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 0 10px 10px var(--vt-c-indigo);
    }

    &title {
      margin-bottom: 25px;
      color: var(--vt-c-text-dark-1);
      font-family: VT323;
      text-transform: uppercase;
      font-size: 52.8px;
      line-height: 52px;
      position: relative;

      &::after {
        position: absolute;
        content: "";
        height: 1px;
        width: 100%;
        bottom: 1px;
        left: 0;
        background-color: var(--vt-c-text-dark-1);
        box-shadow: 0 0 20px 3px var(--vt-c-text-dark-1);
        border-radius: 8px;
      }
    }

    &list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }

    &item {
      list-style: none;
      display: inline-block;
      margin: 0 3px;
      margin-bottom: 45px;
      background-color: #32495f;
      border-radius: 40px;
      height: 130px;
      width: 130px;
      position: relative;
      border-color: #32495f;
      transition: border 0.2s;
      
      &-image {
        height: 90px;
        width: 90px;
        transition: transform 0.2s;
        
        &wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &:hover {
          transform: scale(110%);
        }
      }

      &-text {
        color: var(--vt-c-text-dark-1);
        opacity: 0;
        visibility: hidden;
        font-weight: 600;
        transition: opacity 0.2s, visibility 0.2s;
        font-family: Klee One;

        &wrapper {
          display: flex;
          justify-content: center;
        }
      }

      &:hover &-text {
        visibility: visible;
        opacity: 1;
      }

      &:hover {
        border: #1e3142 solid 5px;
      }
    }
  }
}

@media(max-width: 1400px) { // Narrow screen or big tablet
  .about {
    &_wrapper {
      max-width: 1000px;
    }

    &_content {
      max-width: 1000px;
    }

    &_image {
      width: 300px;
      height: 300px;
    }

    &_description {
      max-width: 581px;
      font-size: 16px;
    }
  }
}

@media(max-width: 1000px) { // Tiny screen or standard tablet
  .about {
    height: 800px;

    &_wrapper {
      max-width: 600px;
    }

    &_title {
      font-size: 58px;
    }

    &_content {
      max-width: 600px;
    }

    &_image {
      width: 160px;
      height: 160px;
    }

    &_description {
      max-width: 341px;
      font-size: 11px;
    }
    
    &_tech {
      &nologystack {
        width: 400px;
        padding: 16px;
        border-radius: 35px;
      }

      &title {
        font-size: 43.8px;
        line-height: 44px;
      }

      &item {
        margin-bottom: 20px;
        border-radius: 25px;
        height: 65px;
        width: 65px;
        
        &-image {
          height: 50px;
          width: 50px;
        }

        &-text {
          font-size: 10px;
        }
      }
    }
  }
}

@media(max-width: 600px) { // Mobile phone
  .about {
    height: 1400px;

    &_wrapper {
      max-width: 300px;
    }

    &_title {
      font-size: 35px;
    }

    &_content {
      max-width: 300px;
      flex-direction: column;
      margin-top: 30px;
    }

    &_separator {
      width: 55%;
      height: 3px;

      &--big {
        width: 80%;
      }
    }

    &_image {
      width: 200px;
      height: 200px;
    }

    &_description {
      max-width: 260px;
      font-size: 12px;
    }
    
    &_tech {
      &nologystack {
        width: 200px;
        padding: 12px;
        border-radius: 25px;
        margin-top: 50px;
      }

      &title {
        text-align: center;
      }
    }
  }
}

@media(max-width: 300px) { // Tiny mobile phone
  .about {
    height: 1150px;

    &_wrapper {
      max-width: 150px;
    }

    &_title {
      font-size: 25px;
    }

    &_content {
      max-width: 150px;
      margin-top: 25px;
    }

    &_image {
      width: 140px;
      height: 140px;
    }

    &_description {
      max-width: 260px;
      font-size: 12px;
    }
    
    &_tech {
      &nologystack {
        width: 120px;
        padding: 12px;
        border-radius: 25px;
        margin-top: 50px;
      }

      &title {
        font-size: 23.8px;
        line-height: 24px;
        text-align: center;
      }

      &item {
        margin-bottom: 12px;
        border-radius: 15px;
        height: 40px;
        width: 40px;
        
        &-image {
          height: 30px;
          width: 30px;
          transition: transform 0.2s;
        }

        &-text {
          font-size: 8px;
        }
      }
    }
  }
}

@media(min-width: 2000px) { // 1440p
  .about {
    height: 2000px;

    &_wrapper {
      max-width: 2000px;
    }

    &_title {
      font-size: 75px;
    }

    &_content {
      max-width: 2000px;
      margin-top: 35px;
    }

    &_image {
      width: 600px;
      height: 600px;
      border-radius: 3000px;
    }

    &_description {
      max-width: 1110px;
      font-size: 30px;
    }
    
    &_tech {
      &nologystack {
        width: 1800px;
        padding: 25px;
        border-radius: 110px;
        margin-top: 100px;
      }

      &title {
        font-size: 68.8px;
        line-height: 69px;
        margin-bottom: 50px;
      }

      &item {
        margin-bottom: 95px;
        border-radius: 100px;
        height: 300px;
        width: 300px;
        
        &-image {
          height: 220px;
          width: 220px;
        }

        &-text {
          font-size: 60px;
        }

        &:hover {
          border: #1e3142 solid 15px;
        }
      }
    }
  }
}

@media(min-width: 3000px) { // 4K
  .about {
    height: 2250px;

    &_wrapper {
      max-width: 3000px;
    }

    &_title {
      font-size: 95px;
    }

    &_content {
      max-width: 3000px;
      margin-top: 65px;
    }

    &_image {
      width: 700px;
      height: 700px;
      box-shadow: 16px 16px 30px 30px #600b96;
    }

    &_description {
      max-width: 1540px;
      font-size: 40px;
    }
    
    &_tech {
      &nologystack {
        width: 2000px;
        padding: 25px;
        border-radius: 110px;
        margin-top: 100px;
      }

      &title {
        font-size: 74.8px;
        line-height: 75px;
        margin-bottom: 50px;
      }

      &item {
        margin-bottom: 95px;
        border-radius: 100px;
        height: 340px;
        width: 340px;
        
        &-image {
          height: 250px;
          width: 250px;
        }

        &-text {
          font-size: 60px;
        }

        &:hover {
          border: #1e3142 solid 15px;
        }
      }
    }
  }
}

@media(min-width: 6000px) { // 8K
  .about {
    height: 4500px;

    &_wrapper {
      max-width: 6000px;
    }

    &_title {
      font-size: 190px;
    }

    &_content {
      max-width: 6000px;
      margin-top: 110px;
    }

    &_image {
      width: 1400px;
      height: 1400px;
      box-shadow: 32px 32px 60px 60px #600b96;
    }

    &_description {
      max-width: 3080px;
      font-size: 80px;
    }
    
    &_tech {
      &nologystack {
        width: 4000px;
        padding: 50px;
        border-radius: 220px;
        margin-top: 200px;
      }

      &title {
        font-size: 148.8px;
        line-height: 149px;
        margin-bottom: 100px;
      }

      &item {
        margin-bottom: 190px;
        border-radius: 200px;
        height: 680px;
        width: 680px;
        
        &-image {
          height: 540px;
          width: 540px;
        }

        &-text {
          font-size: 120px;
        }

        &:hover {
          border: #1e3142 solid 30px;
        }
      }
    }
  }
}
</style>
