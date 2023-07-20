<script lang="ts">
import { ref } from 'vue';
import { blogposts } from '@/views/BlogView.vue';
import { useRoute } from 'vue-router';
import ContactForm from './ContactForm.vue';

export default {
    name: "BlogPost",
    setup() {
        let date;

        const getImageUrl = (postName: string, imageName: string) => {
            return new URL(`./BlogImages/${postName}/${imageName}.jpg`, import.meta.url).href;
        };

        const findPost = (id: string) => {
          for (let i = 0; i < blogposts.length; i++) {
            for (let n = 0; n < blogposts[i].blogposts.length; n++) {
              if (blogposts[i].blogposts[n].id === id) {
                date = ref(blogposts[i].date);

                return blogposts[i].blogposts[n];
              }
            }
          }

          throw new Error('An error has occured while loading post data')
        }

        const route = useRoute();
        const post = ref(findPost(`${route.params.id}`));

        return {
            date,
            post,
            getImageUrl,
        };
    },
    components: { ContactForm }
}
</script>

<template>
  <div class="blogpost-page">
    <div class="blogpost">
      <article class="blogpost_wrapper">
        <h2 class="blogpost_date">
          {{ date }}
        </h2>

        <h1 class="blogpost_title">
          {{ post.title }}
        </h1>

        <section class="blogpost_paragraphwrapper" v-for="paragraph in post.paragraphs" :key="paragraph.header">
          <div class="blogpost_paragraph-headerwrapper">
            <h1 class="blogpost_paragraph-header">
              {{ paragraph.header }}
            </h1>
          </div>

          <div class="blogpost_paragraph-content">
            {{ paragraph.content }}
          </div>

          <div class="blogpost_imagecontainer" v-for="image, index in paragraph.images" :key="`${paragraph.header}_${image}`">
            <div class="blogpost_imagewrapper">
              <img class="blogpost_image" :src="getImageUrl(post.id, image)" />

              <div class="blogpost_imagecaption">
                {{ paragraph.imageCaptions[index] }}
              </div>
            </div>
          </div>

          <div class="blogpost_separatorwrapper">
            <div class="blogpost_separator"></div>
          </div>
        </section>
      </article>
    </div>

    <ContactForm />
  </div>
</template>

<style lang="scss" scoped>
.blogpost {
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(132,11,179,1) 0%, rgba(55,14,106,1) 25%, rgba(30,11,54,1) 50%, rgba(24,24,24,1) 75%, rgba(30,11,54,1) 100%);

  &_wrapper {
    width: 1400px;
    display: flex;
    flex-direction: column;
    margin: 100px 0;
    padding: 20px;
  }

  &_date {
    font-size: 18px;
    color: var(--vt-c-text-dark-2);
    font-family: Happy Monkey;
    margin-bottom: -16px;
  }

  &_title {
    font-size: 48px;
    color: var(--vt-c-text-dark-1);
    font-family: VT323;
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

  &_paragraph {
    &-header {
      font-size: 40px;
      color: var(--vt-c-text-dark-1);
      font-family: VT323;
      line-height: 34px;
      text-align: center;

      &wrapper {
        margin-top: 12px;
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }

    &-content {
      font-size: 24px;
      color: var(--vt-c-text-dark-2);
      font-family: Klee One;
      word-wrap: break-word;
      margin: 12px 0;
      font-weight: 600;
      text-align: justify;
      text-indent: 40px;
    }
  }

  &_separator {
    height: 2px;
    width: 85%;
    background-color: var(--vt-c-indigo);
    box-shadow: 0 0 20px 3px var(--vt-c-indigo);
    border-radius: 8px;

    &wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 30px 0 15px;
    }
  }

  &_image {
    width: 100%;
    margin-bottom: -5px;
    background: linear-gradient(var(--vt-c-indigo), var(--vt-c-indigo)) padding-box,
                linear-gradient(to bottom, #375572, #1e2670) border-box;
    border-radius: 18px;
    border: 6px solid transparent;
    transition: transform 0.2s;
    
    &container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: -10px;
      position: relative;
    }

    &wrapper {
      margin-top: 10px;
      width: 750px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &caption {
      font-size: 18px;
      color: var(--vt-c-text-dark-2);
      font-family: VT323;
      margin-top: 10px;
    }

    &:hover {
      transform: scale(103%);
    }
  }
}

@media(max-width: 1400px) { // Narrow screen or big tablet
  .blogpost_wrapper {
    width: 1000px;
    padding: 15px;
  }
}

@media(max-width: 1000px) { // Tiny screen or standard tablet
  .blogpost {
    &_wrapper {
      width: 600px;
      margin: 80px 0;
    }

    &_date {
      font-size: 16px;
    }

    &_title {
      font-size: 44px;
    }

    &_paragraph {
      &-header {
        font-size: 36px;
        line-height: 30px;
      }

      &-content {
        font-size: 21px;
        text-indent: 30px;
      }
    }
  }
}

@media(max-width: 600px) { // Mobile phone
  .blogpost {
    &_wrapper {
      width: 320px;
      margin: 80px 0;
      padding: 15px;
    }

    &_date {
      font-size: 16px;
      margin-bottom: -10px;
    }

    &_title {
      font-size: 32px;
    }

    &_paragraph {
      &-header {
        font-size: 32px;
        line-height: 26px;

        &wrapper {
          margin-top: 12px;
        }
      }

      &-content {
        font-size: 20px;
        margin: 12px 0;
        text-indent: 20px;
      }
    }

    &_separator {
      height: 2px;
      width: 85%;
      box-shadow: 0 0 20px 3px var(--vt-c-indigo);
      border-radius: 8px;

      &wrapper {
        margin: 30px 0 15px;
      }
    }

    &_image {
      margin-bottom: -5px;
      border-radius: 18px;
      border: 6px solid transparent;
      
      &container {
        margin-bottom: -10px;
      }

      &wrapper {
        margin-top: 10px;
        padding: 20px;
      }

      &caption {
        font-size: 14px;
        margin-top: 10px;
      }

      &:hover {
        transform: scale(103%);
      }
    }
  }
}

@media(min-width: 2000px) { // 1440p
  .blogpost {
    &_wrapper {
      width: 2000px;
    }

    &_date {
      font-size: 28px;
      margin-bottom: -16px;
    }

    &_title {
      font-size: 52px;
    }

    &_paragraph {
      &-header {
        font-size: 48px;
        line-height: 44px;

        &wrapper {
          margin-top: 18px;
        }
      }

      &-content {
        font-size: 34px;
        margin: 12px 0;
        text-indent: 40px;
      }
    }

    &_image {
      &wrapper {
        width: 1000px;
      }

      &caption {
        font-size: 24px;
      }
    }
  }
}

@media(min-width: 3000px) { // 4K
  .blogpost {
    &_wrapper {
      width: 3000px;
      margin: 150px 0;
    }

    &_date {
      font-size: 36px;
      margin-bottom: -20px;
    }

    &_title {
      font-size: 76px;
    }

    &_paragraph {
      &-header {
        font-size: 68px;
        line-height: 62px;

        &wrapper {
          margin-top: 22px;
        }
      }

      &-content {
        font-size: 44px;
      }
    }

    &_separator {
      height: 3px;
      box-shadow: 0 0 20px 6px var(--vt-c-indigo);
    }

    &_image {
      border-radius: 32px;
      border: 12px solid transparent;

      &wrapper {
        width: 1500px;
      }

      &caption {
        font-size: 36px;
      }
    }
  }
}

@media(min-width: 6000px) { // 8K
  .blogpost {
    &_wrapper {
      width: 6000px;
      margin: 300px 0;
    }

    &_date {
      font-size: 72px;
      margin-bottom: -40px;
    }

    &_title {
      font-size: 152px;
    }

    &_paragraph {
      &-header {
        font-size: 136px;
        line-height: 124px;

        &wrapper {
          margin-top: 44px;
        }
      }

      &-content {
        font-size: 88px;
        margin: 24px 0;
        text-indent: 60px;
      }
    }

    &_separator {
      height: 6px;
      box-shadow: 0 0 40px 12px var(--vt-c-indigo);
      border-radius: 16px;

      &wrapper {
        margin: 60px 0 30px;
      }
    }

    &_image {
      margin-bottom: -10px;
      border-radius: 36px;
      border: 12px solid transparent;
      
      &container {
        margin-bottom: -20px;
      }

      &wrapper {
        margin-top: 20px;
        width: 3000px;
        padding: 40px;
      }

      &caption {
        font-size: 72px;
        margin-top: 20px;
      }
    }
  }
}
</style>
