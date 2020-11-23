<template>
  <div>
    <div class="content-image" @click="goToCertificate(certificate.course.id)">
      <button>
        <img v-if="showThumb"
          class="background-img"
          :src="certificate.course.thumbUrl"
          @error="imageLoadError"
          alt="Imagem do curso"
        />
      </button>
      <img
        class="medal"
        src="~/assets/medalha-imagem.svg"
        alt="Imagem de uma medalha"
      />
    </div>
    <div class="footer">
      <div class="title-and-socialMedias">
        <button  type="button" @click="goToCertificate(certificate.course.id)" >
          <p class="certificate-title">{{ certificate.course.title }}</p>
          <p>{{certificate.course.authorName }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificateCard',
  props: ['certificate'],
  data: () => ({
    showThumb: true,
  }),
  methods: {
    imageLoadError() {
      this.showThumb = false;
    },
    goToCertificate(id) {
      // eslint-disable-next-line no-undef
      $nuxt._router.push(
        `/certificado-info/${this.$store.state.user.data.id}/${id}`,
      );
    },
    backgroundClass(certificateBackgroundName) {
      return `background-image: url(${certificateBackgroundName})`;
    },
    mountUrlCertificate(id) {
      return `/pagina-certificado/${this.$store.state.user.data.id}/${id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.content-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 11rem;
  overflow: hidden;
  background-color: var(--primary);
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: 0.4;
}

.medal {
  position: absolute;
  width: 18%;
  height: auto;
}

.certificate-title {
  font-weight: 600;
  font-size: 12px;
}

p {
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #1a1a1a;
}

.sharing-icons {
  position: absolute;
  margin: 4px 0 0 265px;
}

::v-deep .share-container {
  position: absolute;
  right: -35px;
  top: -4px;
}

.footer {
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 80%;
}
</style>