// import { AdvertisementService } from '~/services/advertisement.service';
// import { FetchError } from "ofetch";
// import type { FeedbackData } from '~/types/advertisement';
import { getLocalStorageItem } from '@/utilities/helpers/browser';

export const ANIMATION_SHOWN = 'animation-shown';

export const useMainStore = defineStore('main', () => {
    const showMatrix = ref(true);
    const showLoading = ref(false);
    const showMainPage = ref(false);
    const wasAnimationShown = ref('');
    // const successMessage = ref("");
    // const isSubmitPending = ref(false); 

// async function sendFeedback(body: FeedbackData, token: string) {
//     errorMessage.value = "";
//     successMessage.value = "";
//     try {

//     if (!token) {
//       throw new Error("Error fetching sendFeedback. Problem with reCAPTCHA");
//     } 
    
//       await AdvertisementService.postFeedback(body, token);
//       successMessage.value = "Got it! We’ll be in touch shortly!";
//     } catch (e) {
//       const errorMessageResponse = e instanceof FetchError ? (e.data?.message ?? "Please check your connection and try again") : "Something went wrong";
//       console.log(errorMessageResponse);
//       errorMessage.value = errorMessageResponse;
//     } finally {
//         isSubmitPending.value = false;
//     }
//   }

  onMounted(() => {
    wasAnimationShown.value = getLocalStorageItem(ANIMATION_SHOWN) ?? '';
    if (wasAnimationShown.value) {
      showMatrix.value = false;
      showLoading.value = false;
      showMainPage.value = true;
    }
  });


  return {
    showMatrix,
    showLoading,
    showMainPage,
    // successMessage,
    // isSubmitPending,
    // sendFeedback,
  };
});
