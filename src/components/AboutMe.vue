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
</style>
