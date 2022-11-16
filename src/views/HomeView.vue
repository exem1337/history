<template>
  <div class="container">
    <div class="content-wrapper">
      <img src="profile.jpg" alt="#">
      <div>
        <h1>Обо мне</h1>
        <p>
          Толстых Александра Дмитриевна, родилась 24 ноября 2001 года в с. Ташла Ташлинского района Оренбургской области. <br> Проживаю в городе Оренбурге. Обучалась в МБОУ «Ташлинская СОШ», которую окончила с отметками «хорошо» и «отлично». <br> В школе вела активную спортивную жизнь, участвуя в соревнованиях по волейболу, занимая в преимуществе 1 места. <br> С 2008 по 2015 г. обучалась в «Ташлинской ДШИ» и окончила с отличием. Начиная с 2015 года обучалась волейболу в «Ташлинской ДЮСШ». <br> С 2019 г. - студентка ИСГИМ в Оренбургском Государственном университете по направлению «История». <br> Имею опыт работы с детьми в качестве вожатой, а также специалиста центра коммуникаций. Не замужем.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.content-wrapper {
  margin-top: 120px;
  display: flex;

  img {
    width: 400px;
    height: 420px;
    border-radius: 8px;
    object-fit: cover;
    object-position: top left;
  }

  h1 {
    color: #e06594;
    font-size: 4rem;
    margin-left: 20px;
  }

  p {
    margin-left: 20px;
    font-size: 1.5rem;
    line-height: 30px;
  }
}
</style>
