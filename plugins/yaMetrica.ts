export default defineNuxtPlugin(() => {
  const yaMetricaId = 103498479;
  
    useHead({
      noscript: [ // Add noscript for Yandex Metrika
        { 
          key: 'yandex-metrika-noscript',
          innerHTML: `<div><img src="https://mc.yandex.ru/watch/${yaMetricaId}" style="position:absolute; left:-9999px;" alt="" /></div>`,
          tagPosition: 'bodyClose' 
        }
      ]
    });
  
    if (import.meta.client) {
      // Yandex.Metrika script
      const yaMetrikaScript = document.createElement('script');
      yaMetrikaScript.type = 'text/javascript';
      yaMetrikaScript.innerHTML = `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
        ym(${yaMetricaId}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
        });
      `;
      document.head.appendChild(yaMetrikaScript);
    }
  });

// <!-- Yandex.Metrika counter -->
// <script type="text/javascript">
//     (function(m,e,t,r,i,k,a){
//         m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//         m[i].l=1*new Date();
//         for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
//         k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
//     })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103498479', 'ym');

//     ym(103498479, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
// </script>
// <noscript><div><img src="https://mc.yandex.ru/watch/103498479" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
// <!-- /Yandex.Metrika counter -->
