/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "60af27267be8e36b39b59db96f65726a"
  },
  {
    "url": "assets/css/0.styles.25059dc5.css",
    "revision": "149f84be64a666fd9944270afc97ff6c"
  },
  {
    "url": "assets/img/1.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.eec387ab.js",
    "revision": "4ecf34d0a9e54367b052204aa26e566e"
  },
  {
    "url": "assets/js/3.d639fa91.js",
    "revision": "749ea5ece300c1897c83d85343195aa3"
  },
  {
    "url": "assets/js/4.99d4d64c.js",
    "revision": "76b484c3f61f27d1deb90d918c298c34"
  },
  {
    "url": "assets/js/5.36f9c396.js",
    "revision": "2c784936bfafc81e1e3e7448fc2a1ef6"
  },
  {
    "url": "assets/js/6.39c9a3ad.js",
    "revision": "053742a3604a615e9c619e56987da049"
  },
  {
    "url": "assets/js/7.c8f112ea.js",
    "revision": "e299887d37da06a8d5a9aaaef3ba1678"
  },
  {
    "url": "assets/js/8.83a718ee.js",
    "revision": "97663adb68a0052a862f3bbdeb4a510a"
  },
  {
    "url": "assets/js/app.5273d11c.js",
    "revision": "493eedf0f580e4075e8630e0e33eb518"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "index.html",
    "revision": "5ccccd1b313e21813dc51b99e3d3c0bb"
  },
  {
    "url": "logo.png",
    "revision": "96c96ed3614a49fa55a5e841d1a3a5cc"
  },
  {
    "url": "start/index.html",
    "revision": "59820e100cd52d671ee03ffe3a192960"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
