<script lang="ts">
import ContactForm from '@/components/ContactForm.vue';
import { ref } from 'vue';

export const blogposts = [
  {
    date: 'July 20, 2023',
    blogposts: [
      {
        id: 'firstpost',
        image: 'Thumbnail',
        title: 'The Site is Now Live!',
        paragraphs: [
          {
            header: 'Hello World',
            content: 'This website is dedicated to my career and hobby, as well as my growth within it; software development. On it, I will list important information about me, the projects I worked and am working on, as well as other things I find interesting! There is already a wealth of information in the Home/About and Project tabs, so make sure to check those out!',
            images: ['AboutPage'],
            imageCaptions: ['The site\'s About page [1903x940]'],
          },
          {
            header: 'About Me',
            content: 'I am a young, passionate Full Stack Developer; though you probably already know that from my About page. I am dedicated to my work, and I genuinely love programming. There is just an unexplainable satisfaction when things you make end up working... but don\'t let me bore you with my obsession haha! As of writing this, I specialise in React.js and Vue.js, though expect that list to increase with time; innovation never stops, after all!',
            images: ['AboutMe'],
            imageCaptions: ['Information about me [1410x768]'],
          },
          {
            header: 'My Projects',
            content: 'As you have most likely noticed by now, the Projects tab of my website will take you on a short trip through my past projects; I will update that page whenever I start any new projects as well. The projects are sorted from oldest to latest, so if you want to trace back the path I have been taking lately, feel free to take a look!',
            images: ['Projects'],
            imageCaptions: ['The site\'s Projects page [1898x931]'],
          },
          {
            header: 'The Blog',
            content: 'So... the Home/About page has information about me, the Projects page lists my projects... what is the blog for, then? At the time of writing, I am planning to use it to post weekly about what I am doing, what I found interesting, as well as talk about my past projects in a little bit more detail; for example about the challenges they brought, things that surprised me, or lessons they taught me which I will never forget. For now this might be the only post, but that will change for sure!',
            images: [],
            imageCaptions: ['The site\'s Projects page [1898x931]'],
          }
        ],
      }
    ],
  }
]

export default {
    name: "Blog",
    setup() {
        const getImageUrl = (postName: string, imageName: string) => {
            return new URL(`../components/BlogImages/${postName}/${imageName}.jpg`, import.meta.url).href;
        };

        const posts = ref(blogposts);

        return {
            posts,
            getImageUrl,
        };
    },
    components: { ContactForm }
}
</script>

<template>
  <div class="blogpage">
    <div class="blog">
      <div class="blog_wrapper">
        <h1 class="blog_title">Blog</h1>

        <div v-for="group of posts" :key="group.date" class="blog_postgroup">
          <h1 class="blog_postgroup-title">
            {{ group.date }}
          </h1>

          <div class="blog_posts">
            <div v-for="post of group.blogposts" :key="post.id" class="blog_post">
              <RouterLink :to="`/blog/${post.id}`" class="blog_postwrapper">
                <img :src="getImageUrl(post.id, post.image)" class="blog_thumbnail" />

                <h1 class="blog_post-text blog_post-text--title">
                  {{ post.title }}
                </h1>

                <h2 class="blog_post-text blog_post-text--description">
                  {{ post.paragraphs[0].content }}
                </h2>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactForm />
  </div>
</template>

<style lang="scss" scoped>
.blog {
  width: 100%;
  background: linear-gradient(180deg, rgba(132,11,179,1) 0%, rgba(55,14,106,1) 25%, rgba(30,11,54,1) 50%, rgba(24,24,24,1) 75%, rgba(30,11,54,1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -2;

  &_wrapper {
    width: 1400px;
    padding: 30px;
    margin: 50px 0;
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

  &_thumbnail {
    object-fit: cover;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    max-height: 200px;
  }

  &_post {
    position: relative;
    min-width: 0;
    overflow: hidden;
    background: linear-gradient(var(--vt-c-indigo), var(--vt-c-indigo)) padding-box,
                linear-gradient(to bottom, darkblue, darkorchid) border-box;
    border-radius: 18px;
    border: 4px solid transparent;
    height: 500px;
    transition: transform 0.2s;

    &s {
      display: grid;
      grid-template-columns: repeat(4, 320px);
      grid-gap: 20px;
      min-width: 0;
    }

    &group {
      margin-top: 50px;

      &-title {
        color: var(--vt-c-text-dark-1);
        font-size: 52px;
        font-family: Happy Monkey;
        position: relative;
        margin-bottom: 20px;

        &::after {
          position: absolute;
          content: "";
          height: 2px;
          width: 100%;
          bottom: 2px;
          left: 0;
          background-color: var(--vt-c-text-dark-1);
          box-shadow: 0 0 20px 3px var(--vt-c-text-dark-1);
          border-radius: 8px;
        }
      }
    }

    &wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 15px;
      overflow: hidden;
    }

    &-text {
      word-wrap: break-word;
      max-height: 200px;
      overflow: hidden;

      &--title {
        color: var(--vt-c-text-dark-1);
        font-size: 32px;
        text-align: center;
        font-family: VT323;
      }

      &--description {
        color: var(--vt-c-text-dark-2);
        font-size: 18px;
        text-align: justify;
        font-family: Klee One;

        --mask: linear-gradient(to bottom, 
            rgba(0,0,0, 1) 0,   rgba(0,0,0, 1) 80%, 
            rgba(0,0,0, 0) 95%, rgba(0,0,0, 0) 0
        ) 100% 50% / 100% 100% repeat-x;
        -webkit-mask: var(--mask); 
        mask: var(--mask);
      }
    }

    &:hover {
      transform: translateY(-10px);
    }
  }
}

@media(max-width: 1400px) { // Narrow screen or big tablet
  .blog {
    &_wrapper {
      width: 1000px;
      padding: 20px;
      margin: 60px 0;
    }

    &_post {
      &s {
        grid-template-columns: repeat(3, 320px);
        grid-gap: 10px;
      }
    }
  }
}

@media(max-width: 1000px) { // Tiny screen or standard tablet
  .blog {
    &_wrapper {
      width: 650px;
      padding: 10px;
      margin: 70px 0;
    }

    &_title {
      font-size: 58px;
    }

    &_post {
      &s {
        grid-template-columns: repeat(2, 320px);
        grid-gap: 5px;
      }

      &group-title {
        font-size: 50px;
      }
    }
  }
}

@media(max-width: 650px) { // Mobile phone
  .blog {
    &_wrapper {
      width: 320px;
      padding: 10px;
      margin: 70px 0;
    }

    &_title {
      font-size: 50px;
    }

    &_post {
      &s {
        grid-template-columns: 320px;
        grid-gap: 10px;
      }

      &group-title {
        font-size: 32px;
      }
    }
  }
}

@media(min-width: 2000px) { // 1440p
  .blog {
    &_wrapper {
      width: 2000px;
      padding: 50px;
    }

    &_title {
      font-size: 70px;
    }

    &_post {
      &s {
        grid-template-columns: repeat(6, 320px);
        grid-gap: 15px;
      }

      &group-title {
        font-size: 60px;
        margin-bottom: 30px;
      }
    }
  }
}

@media(min-width: 3000px) { // 4K
  .blog {
    &_wrapper {
      width: 3000px;
      padding: 75px;
      margin: 75px 0;
    }

    &_title {
      font-size: 100px;
    }

    &_thumbnail {
      border-radius: 16px;
      max-height: 300px;
    }

    &_post {
      border-radius: 24px;
      border: 6px solid transparent;
      height: 700px;

      &s {
        grid-template-columns: repeat(6, 480px);
        grid-gap: 20px;
      }

      &group {
        margin-top: 70px;

        &-title {
          font-size: 80px;
          margin-bottom: 50px;
        }
      }

      &wrapper {
        padding: 25px;
      }

      &-text {
        max-height: 270px;

        &--title {
          font-size: 42px;
        }

        &--description {
          font-size: 24px;
        }
      }

      &:hover {
        transform: translateY(-20px);
      }
    }
  }
}

@media(min-width: 6000px) { // 8K
  .blog {
    &_wrapper {
      width: 6000px;
      padding: 150px;
      margin: 150px 0;
    }

    &_title {
      font-size: 200px;
    }

    &_thumbnail {
      border-radius: 32px;
      max-height: 600px;
    }

    &_post {
      border-radius: 48px;
      border: 12px solid transparent;
      height: 1400px;

      &s {
        grid-template-columns: repeat(6, 960px);
        grid-gap: 40px;
      }

      &group {
        margin-top: 140px;

        &-title {
          font-size: 160px;
          margin-bottom: 100px;
        }
      }

      &wrapper {
        padding: 50px;
      }

      &-text {
        max-height: 540px;

        &--title {
          font-size: 84px;
        }

        &--description {
          font-size: 48px;
        }
      }

      &:hover {
        transform: translateY(-40px);
      }
    }
  }
}
</style>
