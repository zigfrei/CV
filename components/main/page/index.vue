<script setup lang="ts">
const show = ref(false);

const { t } = useI18n();

onMounted(() => {
  show.value = true;
});
</script>

<template>
  <section class="resume" :class="{ 'fade-in': show }">
    <div class="resume-header">
      <nuxt-img
        src="/avatar7.png"
        alt="Logo"
        width="350"
        height="350"
        class="avatar-image"
      />
      <div class="header-text">
        <h1 class="font-h1 header-title">{{ t('main.name') }}<br >{{ t('main.surname') }}</h1>
        <p class="header-subtitle font-b1">{{ t('main.position') }}</p>
      </div>
    </div>
    <div class="resume-content">
      <main-page-aside />
      <div class="resume-main">
        <div class="resume-main-block">
          <base-title>{{ t('main.experience') }}</base-title>
          <p class="paragraf-title font-b3">{{ t('main.commercial_experience') }}</p>
          <div class="paragraf-grid">
            <p class="paragraf-text paragraf-text-subtitle font-b4">
              {{ t('main.april_2024_to_present') }}
            </p>
            <div class="paragraf-grid-main">
              <nuxt-link
                to="https://switchcase.dev/"
                target="_blank"
                class="paragraf-link font-b4"
                >SwitchCase</nuxt-link
              >
              <p class="paragraf-text font-b4">{{ t('main.frontend_developer') }}</p>
              <p class="paragraf-text font-b4">
                {{ t('main.responsibilities') }}
              </p>
            </div>
          </div>

          <div class="paragraf-grid">
            <p class="paragraf-text paragraf-text-subtitle font-b4">
              {{ t('main.september_2023_to_april_2024') }}
            </p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">{{ t('main.private_practice_freelance') }}</p>
              <p class="paragraf-text font-b4">{{ t('main.frontend_developer') }}</p>
              <p class="paragraf-text font-b4">
                {{ t('main.nextjs_landing_responsibility') }}
              </p>
              <p class="paragraf-text font-b4">
                {{ t('main.wordpress_theme_cartjs') }}
              </p>
              <p class="paragraf-text font-b4">
                HTML+CSS+JS:
                <nuxt-link
                  to="https://www.accu-traffic.ca/"
                  target="_blank"
                  class="paragraf-link font-b4"
                  >www.accu-traffic.ca</nuxt-link
                >
              </p>
            </div>
          </div>

          <div class="paragraf-grid">
            <p class="paragraf-text paragraf-text-subtitle font-b4">
              {{ t('main.september_2023_to_april_2024') }}
            </p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">{{ t('main.internship_unpaid') }}</p>
              <p class="paragraf-text font-b4">{{ t('main.frontend_developer') }}</p>
              <p class="paragraf-text font-b4">
                {{ t('main.course_website_development') }}
                <nuxt-link
                  to="https://tesseramosaic.art/"
                  target="_blank"
                  class="paragraf-link font-b4"
                  >https://tesseramosaic.art/</nuxt-link
                >
              </p>
            </div>
          </div>

          <p class="paragraf-title font-b3">{{ t('main.learning_experience') }}</p>
          <div class="paragraf-grid">
            <p class="paragraf-text paragraf-text-subtitle font-b4">
              {{ t('main.may_2021_to_may_2023') }}
            </p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">
                {{ t('main.frontend_fullstack_developer') }}
              </p>
              <p class="paragraf-text font-b4">
                {{ t('main.learning_projects_intro') }}
              </p>
              <p class="paragraf-text font-b5">
                {{ t('main.learning_project_1') }}
              </p>

              <p class="paragraf-text font-b5">
                {{ t('main.learning_project_2') }}
              </p>

              <p class="paragraf-text font-b5">
                {{ t('main.learning_project_3') }}
              </p>

              <p class="paragraf-text font-b5">
                {{ t('main.learning_project_4') }}
              </p>
            </div>
          </div>

          <p class="paragraf-title font-b3">{{ t('main.non_relevant_experience') }}</p>
          <div class="paragraf-grid">
            <p class="paragraf-text paragraf-text-subtitle font-b4">
              {{ t('main.august_2011_to_august_2023') }}
            </p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">{{ t('main.grodno_azot') }}</p>
              <p class="paragraf-text font-b5">{{ t('main.leading_process_engineer') }}</p>
              <p class="paragraf-text font-b5">
                {{ t('main.chemical_industry_12_years') }}
              </p>
              <p class="paragraf-text font-b5">
                {{ t('main.career_progression') }}
              </p>
            </div>
          </div>
        </div>

        <div class="resume-main-block">
          <base-title>{{ t('main.education') }}</base-title>
          <p class="paragraf-title font-b3">
            {{ t('main.additional_professional_education_courses') }}
          </p>
          <div class="paragraf-grid">
            <p class="paragraf-text font-b4">{{ t('main.education_2021_2023') }}</p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">
                {{ t('main.frontend_fullstack_developer') }}
              </p>
              <p class="paragraf-text font-b5">
                {{ t('main.course_program_name') }}
              </p>
              <p class="paragraf-text font-b5">{{ t('main.yandex_practicum') }}</p>
            </div>
          </div>

          <p class="paragraf-title font-b3">{{ t('main.higher_education') }}</p>
          <div class="paragraf-grid">
            <p class="paragraf-text font-b4">{{ t('main.education_2006_2011') }}</p>
            <div class="paragraf-grid-main">
              <p class="paragraf-text font-b4">{{ t('main.chemist_process_engineer') }}</p>
              <p class="paragraf-text font-b5">
                {{ t('main.specialization_org_petchem_synthesis') }}
              </p>
              <p class="paragraf-text font-b5">
                {{ t('main.belarus_state_tech_university') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq-content">
      <base-title>{{ t('main.faq_title') }}</base-title>
      <main-faq />
    </div>
  </section>
</template>

<style scoped>
.resume {
  opacity: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1520px;
  padding: 0 40px 64px 40px;
  transition: opacity 0.3s ease-in-out;
  /* border: thick double var(--color-text-green) */
}

.fade-in {
  opacity: 1;
}

.resume-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: thick double var(--color-text-green);
  padding: 16px 24px;
  gap: 32px;
}

.avatar-image {
}

.header-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  /* width: 100%; */
  gap: 32px;
  padding-right: 160px;
}

.header-title {
  color: var(--color-text-green);
}

.header-subtitle {
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

.resume-content {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(320px, 400px) 1fr;
  border: thick double var(--color-text-green);
}

.paragraf-title {
  width: 100%;
  text-align: left;
  padding: 0 0 0 5px;
  color: var(--color-black);
  background-color: var(--color-text-green);
}

.paragraf-text {
  text-wrap: balance;
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs);
}

.paragraf-link {
  color: var(--color-text-green);
  text-decoration: none;
  transition: color 0.3s ease;
  text-shadow: var(--text-shadow-parametrs);
}
.paragraf-link:hover {
  color: var(--color-lemon);
}

.paragraf-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 16px;
  border-bottom: 1px dashed var(--color-text-green);
  padding-bottom: 4px;
}

.paragraf-grid-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
}

.paragraf-separator {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed var(--color-text-green);
  margin: 1 16px 0;
}

.resume-main {
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
}

.resume-main-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
}

.faq-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  border: thick double var(--color-text-green);
}

@media (max-width: 1100px) {
  .resume {
    /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1520px;
  padding: 0 40px 64px 40px; */
    /* border: thick double var(--color-text-green) */
    padding: 0 16px 32px 16px;
  }

  .resume-header {
    /* width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: thick double var(--color-text-green);
  padding: 16px 24px;
  gap: 32px; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
  }

  .avatar-image {
  }

  .header-text {
    /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
   width: 100%;
  gap: 32px;
  padding-right: 160px; */
    padding: 0;
    gap: 12px;
    text-align: center;
    align-items: center;
  }

  .header-title {
    /* color: var(--color-text-green); */
  }

  .header-subtitle {
    /* color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs); */
  }

  .resume-content {
    /* width: 100%;
  display: grid;
  grid-template-columns: minmax(320px, 400px) 1fr;
  border: thick double var(--color-text-green); */
    grid-template-columns: minmax(320px, 1fr);
  }

  .resume-content > aside {
    order: 2;
  }

  .paragraf-title {
    /* width: 100%;
  text-align: left;
  padding: 0 0 0 5px;
  color: var(--color-black);
  background-color: var(--color-text-green); */
  }

  .paragraf-text {
    /* text-wrap: balance;
  color: var(--color-text-green);
  text-shadow: var(--text-shadow-parametrs); */
  }

  .paragraf-text-subtitle {
    text-align: center;
    font-weight: 600;
  }

  .paragraf-link {
    /* color: var(--color-text-green);
  text-decoration: none;
  transition: color 0.3s ease;
  text-shadow: var(--text-shadow-parametrs); */
  }
  .paragraf-link:hover {
    /* color: var(--color-lemon); */
  }

  .paragraf-grid {
    /* width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 16px;
  border-bottom: 1px dashed var(--color-text-green);
  padding-bottom: 4px; */
    grid-template-columns: 1fr;
  }

  .paragraf-grid-main {
    /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px; */
  }

  .paragraf-separator {
    /* width: 100%;
  height: 1px;
  border-bottom: 1px dashed var(--color-text-green);
  margin: 1 16px 0; */
  }

  .resume-main {
    /* padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px; */
    padding: 16px 6px;
    gap: 12px;
  }

  .resume-main-block {
    /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px; */
  }
}
</style>
