<template>
  <div class="contact">
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
  </div>
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
      margin-top: 60px;
      display: flex;
      justify-content: center;
    }
  }

  &_content {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    text-align: center;
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
</style>
