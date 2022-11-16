<template>
  <header>
    <span>Мое портфолио</span> 
    <img src="paw.png" alt="#">
    <div class="nav-wrapper">
      <RouterLink to="/books" class="nav-item">Статьи</RouterLink>
      <RouterLink to="/" class="nav-item">Биография</RouterLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  box-shadow: 0px 5px 12px 0px rgba(34, 60, 80, 0.13);
  z-index: 999;
  position: relative;

  img {
    position: absolute;
    left: 200px;
    top: 20px;
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 1.5rem;
    font-weight: 500;
    color: #e06594;
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    width: 180px;
    margin-right: 20px;

    .nav-item {
      text-transform: uppercase;
      cursor: pointer;
      box-sizing: border-box;
      text-decoration: none;
      color: #010101;

      &.router-link-exact-active {
        border-bottom: 2px solid #e06594;
      }

      &:hover {
        border-bottom: 2px solid #e06594;
      }
    }
  }  
}
</style>