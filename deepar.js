const deepar = await import(
  "https://cdn.jsdelivr.net/npm/deepar/js/deepar.esm.js"
);
import Carousel from "./carousel.js";
// Log the version. Just in case.

// Top-level await is not supported.
// So we wrap the whole code in an async function that is called immediatly.
(async function () {
  // Get the element you want to place DeepAR into. DeepAR will inherit its width and height from this and fill it.
  const previewElement = document.getElementById("deepar-canvas");

  // trigger loading progress bar animation
  //   const loadingProgressBar = document.getElementById("loading-progress-bar");
  //   loadingProgressBar.style.width = "100%";

  // All the effects are in the public/effects folder.
  // Here we define the order of effect files.
  const effectList = [
    "./effects/sunglas.deepar",
    "./effects/Red-Glass-Frame-with-Black-Metal.deepar",
    "./effects/handleless-Red-Glass.deepar",
    "./effects/handleless-blue-glass.deepar",
    "./effects/handleless-Black-Glass.deepar",
    "./effects/ray-ban-wayfarer.deepar",
    "./effects/Black-Sunglasses.deepar",
    "./effects/Rayban-Blue-Sunglass.deepar",
    "./effects/circle-frame-glass.deepar",
    "./effects/RaybanPurple.deepar",
    "./effects/Red-Glass-Frame-with-Black-Metal.deepar",
  ];
  let deepAR = null;
  // Initialize DeepAR with an effect file.
  try {
    deepAR = await deepar.initialize({
      licenseKey:
        "ce036f51766b00e5e92d6ce685e652ed9aba1f244cc9a500294f72f366f929a637eefa7fc2effa6a",
      previewElement,
      effect: effectList[0],
      // Removing the rootPath option will make DeepAR load the resources from the JSdelivr CDN,
      // which is fine for development but is not recommended for production since it's not optimized for performance and can be unstable.
      // More info here: https://docs.deepar.ai/deepar-sdk/platforms/web/tutorials/download-optimizations/#custom-deployment-of-deepar-web-resources

      additionalOptions: {
        cameraConfig: {
          // facingMode: 'environment'  // uncomment this line to use the rear camera
        },
      },
    });
    console.log("effrct", effectList);
  } catch (error) {
    console.error(error);
    // document.getElementById("loading-screen").style.display = "none";
    // document.getElementById("permission-denied-screen").style.display = "block";
    return;
  }

  // Hide the loading screen.
  //   document.getElementById("loading-screen").style.display = "none";
  //   document.getElementById("deepar-canvas").style.display = "block";

  window.effect = effectList[0];

  const glassesCarousel = new Carousel("carousel");
  glassesCarousel.onChange = async (value) => {
    // const loadingSpinner = document.getElementById("loading-spinner");

    if (window.effect !== effectList[value]) {
      //   loadingSpinner.style.display = "block";
      await deepAR.switchEffect(effectList[value]);
      window.effect = effectList[value];
    }
    // loadingSpinner.style.display = "none";
  };
})();
