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
      max-width: 300px;
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

@media(max-width: 300px) { // Tiny mobile phone
  .navbar {
    &_wrapper {
      max-width: 150px;
      flex-direction: column;
      align-items: center;
    }

    &_shape {
      height: 20px;
      width: 20px;
    }
  }

  .triangle {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid var(--vt-c-indigo);
  }

  .nav_link {
    margin-left: 6px;
    font-size: 12px;
  }
}
</style>
