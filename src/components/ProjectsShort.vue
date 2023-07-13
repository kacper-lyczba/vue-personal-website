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
</style>