<template>
  <div class="navbar">
    <div class="navbar_wrapper">
      <div class="navbar_shapes">
        <div class="navbar_shape"></div>
        <div class="navbar_shape triangle"></div>
        <div class="navbar_shape circle"></div>
      </div>

      <nav class="nav">
        <div class="nav_link-wrapper">
          <RouterLink to="/" class="nav_link">Home</RouterLink>
          <RouterLink to="/projects" class="nav_link">Projects</RouterLink>
          <RouterLink to="/blog" class="nav_link">Blog</RouterLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--color-background);
  z-index: 9;

  &_wrapper {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
  }

  &_shape {
    height: 40px;
    width: 40px;
    background-color: var(--vt-c-indigo);
    margin-right: 5px;

    &s {
      display: flex;
      flex-direction: row;
    }
  }
}

.circle {
  border-radius: 100%;
  margin-right: 0;
}

.triangle {
  height: 0px;
  width: 0px;
  background-color: transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid var(--vt-c-indigo);
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &_link {
    margin-left: 20px;
    font-weight: 700;
    font-size: 20px;
    color: var(--vt-c-text-dark-2);
    position: relative;
    text-align: center;
  }
}

.router-link-active {
  color: var(--vt-c-text-dark-1);

  &::after {
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    bottom: -1px;
    left: 0;
    background-color: var(--vt-c-text-dark-1);
    border-radius: 8px;
  }
}

@media(max-width: 1400px) { // Narrow screen or big tablet
  .navbar_wrapper {
    max-width: 1000px;
  }
}

@media(max-width: 1000px) { // Tiny screen or standard tablet
  .navbar_wrapper {
    max-width: 600px;
  }
}

@media(max-width: 600px) { // Mobile phone
  .navbar {
    &_wrapper {
      max-width: 320px;
    }

    &_shape {
      height: 30px;
      width: 30px;
    }
  }

  .triangle {
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 30px solid var(--vt-c-indigo);
  }

  .nav_link {
    margin-left: 10px;
    font-size: 16px;
  }
}

@media(min-width: 2000px) { // 1440p
  .navbar {
    &_wrapper {
      padding: 20px 0;
      max-width: 2000px;
    }

    &_shape {
      height: 50px;
      width: 50px;
      margin-right: 8px;
    }
  }

  .triangle {
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 50px solid var(--vt-c-indigo);
  }

  .nav_link {
    margin-left: 23px;
    font-size: 25px;
  }
}

@media(min-width: 3000px) { // 4K
  .navbar {
    &_wrapper {
      padding: 25px 0;
      max-width: 3000px;
    }

    &_shape {
      height: 65px;
      width: 65px;
      margin-right: 8px;
    }
  }

  .triangle {
    border-left: 32.5px solid transparent;
    border-right: 32.5px solid transparent;
    border-bottom: 65px solid var(--vt-c-indigo);
  }

  .nav_link {
    margin-left: 26px;
    font-size: 35px;
  }
}

@media(min-width: 6000px) { // 8K
  .navbar {
    &_wrapper {
      padding: 45px 0;
      max-width: 6000px;
    }

    &_shape {
      height: 100px;
      width: 100px;
      margin-right: 14px;
    }
  }

  .triangle {
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid var(--vt-c-indigo);
  }

  .nav_link {
    margin-left: 50px;
    font-size: 60px;
  }
}
</style>
