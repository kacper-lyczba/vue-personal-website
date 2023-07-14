<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'ProjectsShort',
  setup() {
    const getImageUrl = (name: string) => {
      return new URL(`./ProjectThumbnails/${name}.jfif`, import.meta.url).href
    }

    const projects = ref([
      { name: 'Bose Landing Page', image: 'Bose', description: 'A landing page of a company that sells speakers and headphones; written in pure HTML and CSS, without the use of JavaScript.', link: 'https://kacper-lyczba.github.io/html-layout-bose/' },
      { name: 'React ToDo App', image: 'Todo', description: 'An application that handles a list of ToDos through the use of an API, written in React with TypeScript.', link: 'https://kacper-lyczba.github.io/react-todo-app/' },
      { name: 'Mobile Phone Catalog', image: 'Phone', description: 'This website was a group project written in React with the use of React-Router; it\'s a catalog of mobile phones, minus the transaction functionality.', link: 'https://fe-feb20-nu-clear-react-or.github.io/product_catalog/#/home' }
    ]);

    return {
      projects, getImageUrl
    };
  }
}
</script>

<template>
  <div class="projects">
    <div class="projects_wrapper">
      <h1 class="projects_title">My projects</h1>

      <div class="projects_examples-window">
        <div class="projects_examples-wrapper">
          <div v-for="item in projects" v-bind:key="item.image" class="projects_example">
            <a class="projects_example-imagewrapper" v-bind:href="item.link" target="_blank">
              <img v-bind:src="getImageUrl(item.image)" class="projects_example-image" />
            </a>

            <div class="projects_example-textwrapper">
              <h1 class="projects_example-text-title">{{ item.name }}</h1>
              <h2 class="projects_example-text-subtitle">{{ item.description }}</h2>
            </div>
          </div>

          <RouterLink to="/about" class="projects_examples-button">
            <div class="projects_examples-buttontext">
              Browse More
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  position: relative;
  background: linear-gradient(180deg, rgba(24,24,24,1) 0%, rgba(30,11,54,1) 100%);

  &_wrapper {
    width: 1400px;
    margin-top: 60px;
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

  &_example {
    grid-row-start: 1;
    grid-row-end: 8;
    min-width: 0;
    min-height: 0;
    margin: 20px;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 2px;
      left: -20px;
      top: 0;
      border-radius: 10px;
      background-color: rgb(42, 9, 80);
      box-shadow: 0 0 15px 5px rgb(42, 9, 80);
    }

    &::after {
      position: absolute;
      content: "";
      height: 100%;
      width: 2px;
      right: -20px;
      bottom: 0;
      border-radius: 10px;
      background-color: rgb(42, 9, 80);
      box-shadow: 0 0 15px 5px rgb(42, 9, 80);
    }
    
    &-image {
      width: 100%;
      height: 100%;
      padding: 10px;
      object-fit: cover;
      transition: transform 0.2s;

      &wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        max-height: 212px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        transform: scale(105%);
      }
    }

    &-text {
      &wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-title {
        color: var(--vt-c-text-dark-1);
        font-weight: 600;
        font-size: 25px;
        font-family: Klee One;
        text-align: center;
      }

      &-subtitle {
        color: var(--vt-c-text-dark-2);
        font-family: Klee One;
        text-align: justify;
        font-size: 19.4px;
      }
    }

    &s {
      &-window {
        position: relative;
        margin-top: 60px;
        width: 80%;
        height: 580px;
        background-color: var(--vt-c-indigo);
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px 10px var(--vt-c-indigo);
      }

      &-wrapper {
        height: 90%;
        width: 95%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(8, 1fr);
        grid-gap: 5px;
        min-width: 0;
        min-height: 0;
      }

      &-button {
        grid-row: 8;
        grid-column-start: 1;
        grid-column-end: 4;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1e0d33;
        border-radius: 20px;
        transition: transform 0.2s, border 0.4s;

        &text {
          color: var(--vt-c-text-dark-1);
          font-size: 35px;
          text-align: center;
          font-weight: 400;
          font-family: VT323;
        }

        &:hover {
          transform: scale(102%);
          border: #18092b solid 5px;
        }
      }
    }
  }
}

@media(max-width: 1400px) { // Narrow screen or big tablet
  .projects {
    &_wrapper {
      width: 1000px;
    }

    &_example {
      margin: 15px;

      &-text {
        &-title {
          font-size: 20px;
        }

        &-subtitle {
          font-size: 17.4px;
        }
      }

      &s-buttontext {
        font-size: 32px;
      }
    }
  }
}

@media(max-width: 1000px) { // Tiny screen or standard tablet
  .projects {
    &_wrapper {
      width: 600px;
    }

    &_title {
      font-size: 58px;
    }

    &_example {
      margin: 5px 15px;
      
      &-image {
        padding: 6px;

        &wrapper {
          max-height: 110px;
        }
      }

      &-text {
        &-title {
          font-size: 16px;
        }

        &-subtitle {
          font-size: 13.4px;
          text-align: center;
        }
      }

      &s {
        &-window {
          margin-top: 58px;
          height: 500px;
          border-radius: 27px;
        }

        &-buttontext {
          font-size: 26px;
        }
      }
    }
  }
}

@media(max-width: 600px) { // Mobile phone
  .projects {
    height: 1400px;

    &_wrapper {
      width: 300px;
      margin-top: 60px;
    }

    &_title {
      font-size: 35px;
    }

    &_example {
      grid-column-start: 1;
      grid-column-end: 9;
      grid-row: auto;

      &::before {
        height: 2px;
        width: 100%;
        left: 0;
        top: -15px;
      }

      &::after {
        height: 2px;
        width: 100%;
        right: 0;
        bottom: 0px;
      }
      
      &-image {
        width: 100%;
        height: 100%;
        padding: 10px;

        &wrapper {
          max-height: 156px;
        }
      }

      &-text {
        &-title {
          font-size: 17px;
        }

        &-subtitle {
          font-size: 14.4px;
          text-align: center;
        }
      }

      &s {
        &-window {
          margin-top: 58px;
          width: 80%;
          height: 1250px;
          border-radius: 30px;
        }

        &-wrapper {
          height: 95%;
          width: 90%;
          grid-template-rows: repeat(3, 1fr);
          grid-template-columns: repeat(8, 1fr);
        }

        &-button {
          grid-row: 4;
          grid-column-start: 1;
          grid-column-end: 9;

          &text {
            font-size: 24px;
          }

          &:hover {
            transform: scale(101%);
            border: #18092b solid 2px;
          }
        }
      }
    }
  }
}

@media(max-width: 300px) { // Tiny mobile phone
  .projects {
    display: none;
  }
}

@media(min-width: 2000px) { // 1440p
  .projects {
    height: 1400px;

    &_wrapper {
      width: 2000px;
      margin-top: 60px;
    }

    &_title {
      font-size: 75px;
    }

    &_example {
      &-image {
        padding: 15px;

        &wrapper {
          max-height: 286px;
        }
      }

      &-text {
        &-title {
          font-size: 40px;
        }

        &-subtitle {
          font-size: 34.4px;
          text-align: justify;
          margin: 0 11px;
        }
      }

      &s {
        &-window {
          margin-top: 80px;
          width: 80%;
          height: 950px;
          border-radius: 80px;
        }

        &-wrapper {
          height: 90%;
          width: 95%;
        }

        &-button {
          border-radius: 35px;

          &text {
            font-size: 50px;
          }

          &:hover {
            transform: scale(102.5%);
            border: #18092b solid 8px;
          }
        }
      }
    }
  }
}

@media(min-width: 3000px) { // 4K
  .projects {
    height: 1600px;

    &_wrapper {
      width: 3000px;
      margin-top: 60px;
    }

    &_title {
      font-size: 95px;
    }

    &_example {
      &-image {
        padding: 20px;

        &wrapper {
          max-height: 406px;
        }
      }

      &-text {
        &-title {
          font-size: 60px;
        }

        &-subtitle {
          font-size: 49.4px;
          text-align: justify;
          margin: 0 11px;
        }
      }

      &s {
        &-window {
          margin-top: 80px;
          width: 80%;
          height: 1300px;
          border-radius: 120px;
        }

        &-wrapper {
          height: 90%;
          width: 95%;
        }

        &-button {
          border-radius: 60px;

          &text {
            font-size: 75px;
          }

          &:hover {
            transform: scale(102.5%);
            border: #18092b solid 12px;
          }
        }
      }
    }
  }
}

@media(min-width: 6000px) { // 8K
  .projects {
    height: 3400px;

    &_wrapper {
      width: 6000px;
      margin-top: 120px;
    }

    &_title {
      font-size: 190px;
    }

    &_example {
      &-image {
        padding: 40px;

        &wrapper {
          max-height: 812px;
        }
      }

      &-text {
        &-title {
          font-size: 120px;
        }

        &-subtitle {
          font-size: 98.4px;
          text-align: justify;
          margin: 0 22px;
        }
      }

      &s {
        &-window {
          margin-top: 240px;
          width: 80%;
          height: 2600px;
          border-radius: 240px;
        }

        &-wrapper {
          height: 90%;
          width: 95%;
        }

        &-button {
          border-radius: 120px;

          &text {
            font-size: 150px;
          }

          &:hover {
            transform: scale(102.5%);
            border: #18092b solid 24px;
          }
        }
      }
    }
  }
}
</style>