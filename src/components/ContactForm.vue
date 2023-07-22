<template>
  <footer class="contact">
    <div class="contact_wrapper">
      <div class="contact_titlewrapper">
        <h1 class="contact_title">Let's get in touch</h1>
      </div>

      <div class="contact_content">
        <form
          class="contact_form"
          action="https://getform.io/f/99845133-af89-47bf-af11-7ee8bb838e2e"
          method="POST"
        >
          <input
            class="contact_field contact_field--top"
            type="text"
            name="name"
            placeholder="Your Name..."
            title="Please enter your name"
            required
          >
          <input
            class="contact_field"
            type="email"
            name="email"
            placeholder="Your Email..."
            title="Please enter your email address"
            required
          >
          <textarea
            class="contact_field contact_field--long"
            type="text"
            name="message"
            placeholder="Write a message..."
            title="Please enter the message you would like to send"
            required
          ></textarea>
          <button class="contact_submit" type="submit">Send</button>
        </form>

        <div class="contact_separator"></div>

        <div class="contact_socials">
          <a
            class="contact_socialwrapper contact_socialwrapper--top"
            href="https://www.linkedin.com/in/kacper-%C5%82yczba/"
            target="_blank"
          >
            <h1 class="contact_social contact_social--linkedin">kacper-łyczba</h1>
          </a>

          <a
            class="contact_socialwrapper"
            href="https://github.com/kacper-lyczba"
            target="_blank"
          >
            <h1 class="contact_social contact_social--github">kacper-lyczba</h1>
          </a>

          <a class="contact_socialwrapper" href="mailto:kacper.lyczba@gmail.com">
            <h1 class="contact_social contact_social--email">kacper.lyczba@gmail.com</h1>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.contact {
  height: 900px;
  width: 100%;
  background: linear-gradient(180deg, rgba(30,11,54,1) 0%, rgb(48, 9, 95) 100%);
  display: flex;
  justify-content: center;

  &_wrapper {
    position: relative;
    width: 1400px;
    height: 100%;
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

    &wrapper {
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
  }

  &_content {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }

  &_form {
    padding: 35px;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    background-color: var(--vt-c-indigo);
    box-shadow: 0 0 10px 10px var(--vt-c-indigo);
  }

  &_field {
    margin-top: 22px;
    width: 500px;
    border-radius: 35px;
    height: 60px;
    background-color: rgb(48, 9, 95);
    box-shadow: 0 0 5px 5px rgba(30,11,54,1);
    border: rgba(30,11,54,1) solid 2px;
    padding: 25px 15px;
    color: var(--vt-c-text-dark-1);
    transition: border 0.2s, box-shadow 0.2s, background-color 0.2s;
    font-size: 15px;
    font-family: Klee One;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;

    &::placeholder {
      color: var(--vt-c-text-dark-2);
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &:focus {
      outline: 0;
      border: rgb(42, 9, 80) solid 5px;
      box-shadow: 0 0 10px 10px rgb(42, 9, 80);
      background-color: rgb(81, 31, 143);
    }

    &--top {
      margin-top: 2px;
    }

    &--long {
      border-radius: 30px;
      height: 250px;
      resize: none;
      font-size: 12px;
      overflow-y: scroll;
    }
  }

  &_submit {
    margin-top: 30px;
    width: 500px;
    max-height: 53px;
    border-radius: 50px;
    background-color: #6928B9;
    box-shadow: 0 0 5px 5px rgb(78, 7, 165);
    border: rgb(78, 7, 165) solid 2px;
    padding: 15px 0;
    color: var(--vt-c-text-dark-1);
    transition: border 0.2s, box-shadow 0.2s, background-color 0.2s;
    text-align: center;
    font-size: 16px;
    font-family: Happy Monkey;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
      outline: 0;
      border: rgb(55, 10, 218) solid 5px;
      box-shadow: 0 0 20px 5px rgb(55, 10, 218);
      background-color: #5e18df;
      cursor: pointer;
    }
  }

  &_separator {
    width: 3px;
    height: 500px;
    border-radius: 10px;
    background-color: var(--vt-c-indigo);
    box-shadow: 0 0 15px 5px var(--vt-c-indigo);
  }

  &_social {
    color: var(--vt-c-text-dark-1);
    font-family: VT323;
    font-size: 35px;
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 60px;

    &wrapper {
      height: 56px;
      margin-top: 15px;
      display: flex;
      align-items: center;

      &--top {
        margin-top: 0;
      }
    }

    &--linkedin::before {
      content: '';
      background-image: url('./SocialIcons/LinkedIn.svg');
      background-size: contain;
      height: 45px;
      width: 45px;
      position: absolute;
      left: -55px;
    }

    &--github::before {
      content: '';
      background-color: var(--vt-c-text-dark-1);
      border-radius: 30px;
      background-image: url('./SocialIcons/Github.svg');
      background-size: contain;
      height: 45px;
      width: 45px;
      position: absolute;
      left: -55px;
    }

    &--email::before {
      content: '';
      background-image: url('./SocialIcons/Email.svg');
      background-size: contain;
      height: 45px;
      width: 45px;
      position: absolute;
      left: -55px;
    }

    &s {
      width: 570px;
      display: flex;
      flex-direction: column;
      align-items: left;
    }
  }
}

@media(max-width: 1400px) { // Narrow screen or big tablet
  .contact {
    &_wrapper {
      width: 1000px;
    }

    &_form {
      padding: 25px;
      border-radius: 35px;
    }

    &_field {
      margin-top: 20px;
      width: 380px;
      border-radius: 25px;
      height: 50px;
      padding: 15px 10px;
      font-size: 15px;

      &--top {
        margin-top: 2px;
      }

      &--long {
        border-radius: 30px;
        height: 250px;
        font-size: 12px;
      }
    }

    &_submit {
      margin-top: 28px;
      width: 380px;
      max-height: 53px;
      border-radius: 40px;
    }

    &_separator {
      height: 420px;
    }

    &_social {
      font-size: 34px;

      &s {
        width: 430px;
      }
    }
  }
}

@media(max-width: 1000px) { // Tiny screen or standard tablet
  .contact {
    height: 1150px;

    &_wrapper {
      width: 600px;
    }

    &_title {
      font-size: 58px;

      &wrapper {
        margin-top: 0;
      }
    }

    &_content {
      margin-top: 80px;
      flex-direction: column;
      height: 863px;
    }

    &_separator {
      width: 420px;
      height: 3px;
    }
  }
}

@media(max-width: 600px) { // Mobile phone
  .contact {
    height: 900px;
    width: 100%;

    &_wrapper {
      width: 320px;
    }

    &_title {
      font-size: 30px;

      &wrapper {
        margin-top: 80px;
      }
    }

    &_content {
      margin-top: 50px;
      flex-direction: column;
      height: 663px;
    }

    &_form {
      padding: 15px;
      border-radius: 25px;
    }

    &_field {
      margin-top: 20px;
      width: 230px;
      border-radius: 25px;
      height: 50px;
      padding: 15px 10px;
      font-size: 15px;

      &--top {
        margin-top: 2px;
      }

      &--long {
        border-radius: 30px;
        height: 250px;
        font-size: 12px;
      }
    }

    &_submit {
      margin-top: 28px;
      width: 230px;
      max-height: 53px;
      border-radius: 40px;
      padding: 15px 0;
    }

    &_separator {
      width: 240px;
      height: 3px;
    }

    &_social {
      margin-left: 30px;
      font-size: 21px;
      line-height: 22px;

      &wrapper {
        height: 26px;
        margin-top: 10px;

        &--top {
          margin-top: 0;
        }
      }

      &--linkedin::before {
        height: 20px;
        width: 20px;
        left: -25px;
      }

      &--github::before {
        border-radius: 30px;
        height: 20px;
        width: 20px;
        left: -25px;
      }

      &--email::before {
        height: 20px;
        width: 20px;
        left: -25px;
      }

      &s {
        width: 230px;
      }
    }
  }
}

@media(max-width: 300px) { // Tiny mobile phone
  .contact {
    display: none;
  }
}

@media(min-width: 2000px) { // 1440p
  .contact {
    height: 1400px;
    width: 100%;

    &_wrapper {
      width: 2000px;
    }

    &_title {
      font-size: 75px;

      &wrapper {
        margin-top: 80px;
      }
    }

    &_content {
      margin-top: 50px;
      height: 1063px;
    }

    &_form {
      padding: 30px;
      border-radius: 35px;
    }

    &_field {
      margin-top: 30px;
      width: 800px;
      border-radius: 45px;
      height: 100px;
      padding: 20px 25px;
      font-size: 30px;

      &--top {
        margin-top: 2px;
      }

      &--long {
        border-radius: 50px;
        height: 450px;
        font-size: 24px;
      }
    }

    &_submit {
      margin-top: 38px;
      width: 800px;
      max-height: 73px;
      border-radius: 40px;
      padding: 19.5px 0;
      font-size: 25px;
    }

    &_separator {
      width: 4px;
      height: 800px;
    }

    &_social {
      margin-left: 70px;
      font-size: 60px;
      line-height: 62px;

      &wrapper {
        height: 65px;
        margin-top: 20px;

        &--top {
          margin-top: 0;
        }
      }

      &--linkedin::before {
        height: 60px;
        width: 60px;
        left: -65px;
      }

      &--github::before {
        border-radius: 3000px;
        height: 60px;
        width: 60px;
        left: -65px;
      }

      &--email::before {
        height: 60px;
        width: 60px;
        left: -65px;
      }

      &s {
        width: 860px;
      }
    }
  }
}

@media(min-width: 3000px) { // 4K
  .contact {
    height: 2000px;
    width: 100%;

    &_wrapper {
      width: 3000px;
    }

    &_title {
      font-size: 95px;

      &wrapper {
        margin-top: 120px;
      }
    }

    &_content {
      margin-top: 75px;
      height: 1563px;
    }

    &_form {
      padding: 45px;
      border-radius: 65px;
    }

    &_field {
      margin-top: 40px;
      width: 1200px;
      border-radius: 65px;
      height: 150px;
      padding: 30px 35px;
      font-size: 45px;

      &--top {
        margin-top: 2px;
      }

      &--long {
        border-radius: 70px;
        height: 650px;
        font-size: 36px;
      }
    }

    &_submit {
      margin-top: 38px;
      width: 1200px;
      max-height: 101px;
      border-radius: 50px;
      padding: 24.5px 0;
      font-size: 40px;
    }

    &_separator {
      width: 4px;
      height: 1100px;
    }

    &_social {
      margin-left: 120px;
      font-size: 90px;
      line-height: 95px;

      &wrapper {
        height: 120px;
        margin-top: 10px;

        &--top {
          margin-top: 0;
        }
      }

      &--linkedin::before {
        height: 100px;
        width: 100px;
        left: -110px;
      }

      &--github::before {
        border-radius: 3000px;
        height: 100px;
        width: 100px;
        left: -110px;
      }

      &--email::before {
        height: 100px;
        width: 100px;
        left: -110px;
      }

      &s {
        width: 1290px;
      }
    }
  }
}

@media(min-width: 6000px) { // 8K
  .contact {
    height: 4000px;
    width: 100%;

    &_wrapper {
      width: 6000px;
    }

    &_title {
      font-size: 190px;

      &wrapper {
        margin-top: 240px;
      }
    }

    &_content {
      margin-top: 150px;
      height: 3126px;
    }

    &_form {
      padding: 90px;
      border-radius: 130px;
    }

    &_field {
      margin-top: 80px;
      width: 2400px;
      border-radius: 130px;
      height: 300px;
      padding: 60px 70px;
      font-size: 90px;

      &--top {
        margin-top: 4px;
      }

      &--long {
        border-radius: 140px;
        height: 1300px;
        font-size: 72px;
      }
    }

    &_submit {
      margin-top: 76px;
      width: 2400px;
      max-height: 198px;
      border-radius: 100px;
      padding: 49px 0;
      font-size: 80px;
    }

    &_separator {
      width: 8px;
      height: 2200px;
    }

    &_social {
      margin-left: 240px;
      font-size: 180px;
      line-height: 190px;

      &wrapper {
        height: 240px;
        margin-top: 20px;

        &--top {
          margin-top: 0;
        }
      }

      &--linkedin::before {
        height: 200px;
        width: 200px;
        left: -220px;
      }

      &--github::before {
        border-radius: 3000px;
        height: 200px;
        width: 200px;
        left: -220px;
      }

      &--email::before {
        height: 200px;
        width: 200px;
        left: -220px;
      }

      &s {
        width: 2580px;
      }
    }
  }
}
</style>
