self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("gb-cache-v1").then(cache => {
      return cache.addAll([
        "/GoldenBoys_MMN_Trophy/index.html",
        "/GoldenBoys_MMN_Trophy/register.html",
        "/GoldenBoys_MMN_Trophy/admin.html",
        "/GoldenBoys_MMN_Trophy/adminDashboard.html",
        "/GoldenBoys_MMN_Trophy/team-details.html",
        "/GoldenBoys_MMN_Trophy/success.html",
        "/GoldenBoys_MMN_Trophy/GoldenBoys.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
