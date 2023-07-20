<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'ProjectsFull',
  setup() {
    const getImageUrl = (name: string) => {
      return new URL(`./ProjectThumbnails/${name}.jfif`, import.meta.url).href
    }

    const projectlist = ref([
      { name: 'Bose Landing Page', image: 'Bose', description: 'A landing page of a company that sells speakers and headphones, Bose. For my first larger project like this, I have decided to challenge myself to implement a responsive design with interactive elements, such as the collapsable menu, purely in HTML and CSS, without the use of any JavaScript whatsoever.', link: 'https://kacper-lyczba.github.io/html-layout-bose/' },
      { name: 'React ToDo App', image: 'Todo', description: 'An application that handles a list of ToDos; and while that on its own might not sound very impressive, this project was very important for my journey. In this application, I have utilized React, as well as the React Transition Group library in order to make the ToDos not only functional and editable, but also good-looking.', link: 'https://kacper-lyczba.github.io/react-todo-app/' },
      { name: 'Mobile Phone Catalog', image: 'Phone', description: 'This website was a group project; we were a team of 5, with each having their own responsibilities. The project was written in React, using React Router to handle the tabs. Notably, I was not only a contributor to the project, but also the main debugger; I set up the Linter, sorted conflicts, and eventually fixed the Router when it ran into a bizarre issue with how one of the members utilized the require() function.', link: 'https://fe-feb20-nu-clear-react-or.github.io/product_catalog/#/home' },
      { name: 'Personal Website', image: 'PersonalSite', description: 'Well... Hi. As you might have guessed, it is the website you are looking at right now. Unlike my other projects, I had no instructions nor guides on how to develop this one, just me, myself, and my mind. On top of that, I decided to go wild and challenge myself by writing the whole thing in a framework I\'ve never worked with before, Vue.Js. I am very proud of the result, to say the least!', link: 'https://www.suaby.quest' }
    ]);

    return {
      projectlist, getImageUrl
    };
  }
}
</script>

<template>
  <div class="projectlist">
    <div class="projectlist_wrapper">
      <h1 class="projectlist_title">Timeline of Notable Projects</h1>

      <div class="projectlist_projects">
        <div v-for="item in projectlist" :key="item.image" class="projectlist_project">
          <div class="projectlist_projectinfo">
            <h1 class="projectlist_project-text-title">{{ item.name }}</h1>
            <h2 class="projectlist_project-text-subtitle">{{ item.description }}</h2>
          </div>

          <div class="projectlist_separator">
            <div class="projectlist_circle"></div>
            <div class="projectlist_circle"></div>
            <div class="projectlist_circle"></div>
            <div class="projectlist_circle projectlist_circle--big"></div>
            <div class="projectlist_circle"></div>
            <div class="projectlist_circle"></div>
            <div class="projectlist_circle"></div>
          </div>

          <a class="projectlist_project-imagewrapper" :href="item.link" target="_blank">
            <img :src="getImageUrl(item.image)" class="projectlist_project-image" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projectlist {
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(132,11,179,1) 0%, rgba(55,14,106,1) 25%, rgba(30,11,54,1) 50%, rgba(24,24,24,1) 75%, rgba(30,11,54,1) 100%);

  &_wrapper {
    width: 1400px;
    margin-top: 120px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &_title {
    color: var(--vt-c-text-dark-1);
    font-size: 60px;
    font-weight: 600;
    font-family: Happy Monkey;
    text-align: center;
    text-transform: uppercase;
    position: relative;

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

  &_circle {
    background-color: var(--vt-c-text-dark-2);
    height: 15px;
    width: 15px;
    border-radius: 3000px;
    margin: 25px 0;

    &--big {
      background: transparent;
      height: 25px;
      width: 25px;
      border: var(--vt-c-text-dark-1) solid 7px;
    }
  }

  &_separator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &_project {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-image {
      width: 100%;
      height: 100%;
      padding: 10px;
      object-fit: cover;
      transition: transform 0.2s;

      &wrapper {
        position: relative;
        width: 45%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        transform: scale(105%);
      }
    }

    &info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 45%;
    }

    &-text {
      &-title {
        color: var(--vt-c-text-dark-1);
        font-size: 48px;
        font-weight: 600;
        font-family: Happy Monkey;
        text-align: right;
        position: relative;
        margin-bottom: 15px;

        &::after {
          position: absolute;
          content: "";
          height: 2px;
          width: 100%;
          bottom: 0px;
          left: 0;
          background-color: var(--vt-c-text-dark-2);
          box-shadow: 0 0 20px 3px var(--vt-c-text-dark-2);
          border-radius: 8px;
        }
      }

      &-subtitle {
        color: var(--vt-c-text-dark-2);
        font-size: 20px;
        font-weight: 600;
        font-family: Klee One;
        position: relative;
        text-align: justify;
      }
    }

    &s {
      margin: 50px 0;
    }
  }
}

@media(max-width: 1400px) { // Narrow screen or big tablet
  .projectlist {
    &_wrapper {
      width: 1000px;
    }

    &_title {
      font-size: 56px;
    }

    &_project-text {
      &-title {
        font-size: 36px;
      }

      &-subtitle {
        font-size: 17px;
      }
    }
  }
}

@media(max-width: 1000px) { // Tiny screen or standard tablet

  .projectlist {
    &_wrapper {
      width: 600px;
      margin-top: 110px;
      padding: 0 25px;
    }

    &_title {
      font-size: 53px;
    }

    &_circle {
      height: 12px;
      width: 12px;
      margin: 23px 0;

      &--big {
        height: 20px;
        width: 20px;
        border: var(--vt-c-text-dark-1) solid 6px;
      }
    }

    &_project {
      &-image {
        padding: 5px;
      }

      &-text {
        &-title {
          font-size: 22px;
          margin-bottom: 10px;
        }

        &-subtitle {
          font-size: 15px;
        }
      }
    }
  }
}

@media(max-width: 600px) { // Mobile phone
  .projectlist {
    &_wrapper {
      width: 320px;
      margin-top: 100px;
      padding: 0 10px;
    }

    &_title {
      font-size: 30px;

      &::after {
        bottom: -1px;
      }
    }

    &_circle {
      height: 6px;
      width: 6px;
      margin: 20px 0;

      &--big {
        height: 10px;
        width: 10px;
        border: var(--vt-c-text-dark-1) solid 3px;
      }
    }

    &_project {
      &-image {
        padding: 3px;
      }

      &-text {
        &-title {
          font-size: 11.2px;
          margin-bottom: 6px;
        }

        &-subtitle {
          font-size: 10px;
        }
      }

      &s {
        margin: 25px 0;
      }
    }
  }
}

@media(min-width: 2000px) { // 1440p
  .projectlist {
    &_wrapper {
      width: 2000px;
      margin-top: 160px;
      padding: 0 10px;
    }

    &_title {
      font-size: 70px;
    }

    &_circle {
      height: 16px;
      width: 16px;
      margin: 40px 0;

      &--big {
        height: 32px;
        width: 32px;
        border: var(--vt-c-text-dark-1) solid 9px;
      }
    }

    &_project {
      &-image {
        padding: 15px;

        &wrapper {
          width: 46%;
        }
      }

      &info {
        width: 46%;
      }

      &-text {
        &-title {
          font-size: 50px;
          margin-bottom: 16px;
        }

        &-subtitle {
          font-size: 25px;
        }
      }
    }
  }
}

@media(min-width: 3000px) { // 4K
  .projectlist {
    &_wrapper {
      width: 3000px;
      margin-top: 200px;
    }

    &_title {
      font-size: 90px;
    }

    &_circle {
      height: 22px;
      width: 22px;
      margin: 62px 0;

      &--big {
        height: 44px;
        width: 44px;
        border: var(--vt-c-text-dark-1) solid 12.5px;
      }
    }

    &_project {
      &-text {
        &-title {
          font-size: 70px;
          margin-bottom: 24px;
        }

        &-subtitle {
          font-size: 45px;
        }
      }

      &s {
        margin: 85px 0;
      }
    }
  }
}

@media(min-width: 6000px) { // 8K
  .projectlist {
    &_wrapper {
      width: 6000px;
      margin-top: 400px;
      padding: 0 20px;
    }

    &_title {
      font-size: 180px;
    }

    &_circle {
      height: 44px;
      width: 44px;
      margin: 124px 0;

      &--big {
        height: 88px;
        width: 88px;
        border: var(--vt-c-text-dark-1) solid 25px;
      }
    }

    &_project {
      &-image {
        padding: 30px;
      }

      &-text {
        &-title {
          font-size: 140px;
          margin-bottom: 48px;
        }

        &-subtitle {
          font-size: 90px;
        }
      }

      &s {
        margin: 170px 0;
      }
    }
  }
}
</style>
