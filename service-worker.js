/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/1899/11/30/picotcp-vuln/index.html","113b70636e8fbc103004acf8a77d1d68"],["/2017/04/06/失我本心/index.html","90660dd0db12b1fa709f7558c112cdd1"],["/2017/07/04/回忆便是那丝丝懊悔/index.html","d013aa6d8ff461ab3796b045cec07377"],["/2017/08/08/号码薄的亡灵/index.html","6db407bd4dd371d2f4db882e43f999e6"],["/2018/06/22/渡过时光来看你/index.html","c2090033ba78d912234e1d2e45bb1ca9"],["/2019/01/29/4month/index.html","cd9192afb20423851a41ced1ced66113"],["/2019/04/26/赠史蒂夫和佩姬/index.html","a1436ea0fc363e0013ded99bc4413620"],["/2019/06/02/19信安/index.html","774fb5c017fac8c240e2d4074389dc5b"],["/2019/07/21/phpunserialize/index.html","4659a04b769189f535da830940931fe3"],["/2019/08/17/精英计划CTP培训记录/index.html","e175504025cf189168feb2981244eb97"],["/2019/09/22/19宿迁/index.html","26d7bb51d018453c309d82a1ba531b6a"],["/2019/10/18/Win-exploitS-E-H/index.html","257357e16dbed226bfeca2499c00d64f"],["/2019/10/22/HeapSpray/index.html","e1d6aaa4286ae41f1722bdfc17c57820"],["/2019/10/26/Gusubei/index.html","801f2f42b950cbf4089ac5e5d8aede18"],["/2019/11/07/浏览器UAF/index.html","6df7bd1f8c60017e3f180196f4371b58"],["/2019/11/12/Three-Write/index.html","df6617be48663f86068bcc169d1ca542"],["/2019/11/20/2019-11-20/index.html","b16e1e801ef64f15fff79147692990f1"],["/2019/11/22/how2heap1/index.html","3853c360b8e2deb733b943bf2caf2b29"],["/2019/11/25/how2heap2/index.html","06f9fe2c155ccd8c41440f2b28a45ad8"],["/2019/12/01/CVE-2012-1876/index.html","fb3b53ea4177204e511b6187f1984e2c"],["/2019/12/20/qwn2own/index.html","091d3a0be1e707b362297dd7b58253ed"],["/2019/12/21/Shellcode-Write/index.html","6f994fc7647d45d34ca1d9bec7686c42"],["/2019/12/25/AFL-FUZZ/index.html","9a0cf6ffaf26856d7e9d7c3dd821e971"],["/2020/01/25/how2heap3/index.html","6cd1e9a9c451a32faf8a5794b96f61fb"],["/2020/01/27/how2heap4/index.html","4f1acb1a0211f40b346f6ed599696019"],["/2020/02/15/v8/index.html","fbbc21d781c4f6328ab4e235c685669c"],["/2020/02/22/roll-a-v8/index.html","e784d0ecc7d80068ad3e76b9173b7e63"],["/2020/03/14/kernel-pwn/index.html","4baf93c2a80a1a1ea877875b42a949c3"],["/2020/04/15/AFL-v8/index.html","1f86598ba2d67c0780c1ade197ae3330"],["/2020/10/06/v8-Instrumentation/index.html","9d28741cf135b198161ffc9195e1b5c9"],["/2021/01/30/mips-pwn/index.html","87cd8f8200cd94b4caa5859296cfbbdf"],["/2021/04/02/QEMU-CVE-2015-5165/index.html","b3a5e0f35b0b82db62478f47ea125fcf"],["/2021/07/12/留给这不长不短的时光/index.html","c663c13fafa993585c6baafcf74ce13c"],["/2022/07/30/nexus5/index.html","5606317fb08950a0df7462aa8e132e41"],["/2099/12/14/Diary/index.html","f8b1defe71aa0a9fc25dd13dae2631c2"],["/404.html","65eedd0ac942272278b2de901b74a854"],["/about/index.html","2dfa85ccd7d093d880ae3afa024cd093"],["/archives/1899/11/index.html","91308331ebdd5b7524145be9872afb1d"],["/archives/1899/index.html","8a31667c9c928821ec7ba30970b3f054"],["/archives/2017/04/index.html","49b9953d41930b4d6e1bf9a623371152"],["/archives/2017/07/index.html","03ae8ee331aa5e62108df1956dd8ceed"],["/archives/2017/08/index.html","0532514fcd9654245e0c3204e059cc2d"],["/archives/2017/index.html","e64c46b5f5cb39418a485954062cbf8c"],["/archives/2018/06/index.html","60e2d2ec3e7edd566fb4a28040565466"],["/archives/2018/index.html","cc6d2b792e774da0319291081f6c3db8"],["/archives/2019/01/index.html","5a25474f3ad3839b4cf6311fe94f2900"],["/archives/2019/04/index.html","075dfb8a5920abc31ae373516fd56ba7"],["/archives/2019/06/index.html","d122379cd8a690eb7003d10224bc91d4"],["/archives/2019/07/index.html","52cabc7c96082d4e74af2178d472a591"],["/archives/2019/08/index.html","eb6defab99a627edd00bb7113abf8a09"],["/archives/2019/09/index.html","188b23ed5ace69e31209e0ac7e608c6f"],["/archives/2019/10/index.html","1c92b93e7035536b2cb44f62fe0b9a59"],["/archives/2019/11/index.html","b17e3d920a031ff02e959f6e6aeaeaa3"],["/archives/2019/12/index.html","aeef38800ebfd69d5bf0df5a6a9a6ddb"],["/archives/2019/index.html","b7481b7cb89ca79340f30d5ab044d022"],["/archives/2020/01/index.html","3760e35115fd528a1807e7e5feec7258"],["/archives/2020/02/index.html","99b96d683e59292ca9cf856a96586af8"],["/archives/2020/03/index.html","6a59944be823a20d1152d06023730a66"],["/archives/2020/04/index.html","9ec778e4311f0ef8deadd5a85cb9bb58"],["/archives/2020/10/index.html","4f102b940f37c89fa4b10095b1e9e11b"],["/archives/2020/index.html","2117a1d33c764ee5506ec210816fbc6e"],["/archives/2021/01/index.html","3f89fb9c41a595b71f4d8920aa93e9e7"],["/archives/2021/04/index.html","66e2ee9618532b6030f3da539699bfab"],["/archives/2021/07/index.html","73aa9d1ace42440e28b8539d2ef45292"],["/archives/2021/index.html","608f358ac11df10bcd4d26d1340efa9a"],["/archives/2022/07/index.html","ea2b9f86e4f93a7c5f32593dce59856d"],["/archives/2022/index.html","8100e3a9e95e92ee997b2e9c253abae3"],["/archives/2099/12/index.html","d46c4e1dfd380a9f23cdbdb79a792a64"],["/archives/2099/index.html","a2dd4f871218ada3909bbaf6062b625f"],["/archives/index.html","7794da1d96c2e504f396d82c779cd8ff"],["/categories/CTF/index.html","307d3e1166ea6d6c983138721bcbfde2"],["/categories/CTF/page/2/index.html","976408bf0d3d02760b9d6b586d5c62cd"],["/categories/IE漏洞/index.html","99f42b523d34433bc1dfe1fc1e598a1b"],["/categories/Kernel-IOT/index.html","7c606e72972532462fc8fa54bbdea2ec"],["/categories/Win漏洞/index.html","126fae7b7485770c432df1729afd3ae2"],["/categories/index.html","f35c16808b463bac65412e39c5e7e444"],["/categories/v8/index.html","9a3a42882bcffd9d16963a073b42a99c"],["/categories/影评/index.html","aabcca0f5bdb228aa2e05ad6863da4ab"],["/categories/散文/index.html","257ee1e66287da2280594dd0659da448"],["/categories/日记/index.html","6d80233057c0ba0dbf88e3af1a4390c0"],["/categories/模糊测试/index.html","89279c66a1185aba43adef3d62ae5e16"],["/categories/移动/index.html","0b34c7150f1be5441436cb9346625663"],["/categories/虚拟化漏洞/index.html","2a89a267fb4026fadc1240b87e325293"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","67be54c116680404679fa3255e7f5406"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/hexo.png","ac77a0f5c80eae6fbbd7469f22d64e78"],["/images/hexo2.svg","e71b0b7979617416ac9b75796b1f5c3d"],["/images/hexo3.svg","42ddde76dd37c2af89b79aaa34575e6f"],["/images/icons/apple-touch-icon.png","c6c00c9be15b382da19533953abd4522"],["/images/icons/icon-128x128.png","3a7dc1e88964ec2adc12d3c76c21210c"],["/images/icons/icon-144x144.png","ee8e03a4d64e71960c7b5e6250d130f0"],["/images/icons/icon-152x152.png","c6c00c9be15b382da19533953abd4522"],["/images/icons/icon-256x256.png","dab35c5af42c7945602bc617431943c9"],["/images/icons/icon-512x512.png","a74c040a55e8948ffb59fe8ab334f6f3"],["/images/icons_bak/icon-128x128.png","e2a69982dd2b2949109491a0a7383bad"],["/images/icons_bak/icon-144x144.png","1e009c18b869c2c3aa3e27747f57912f"],["/images/icons_bak/icon-152x152.png","a1087b7c5e8c6963a8600028616bd478"],["/images/icons_bak/icon-192x192.png","9049d562968a3fbb9d7ddf72dcb94a49"],["/images/icons_bak/icon-384x384.png","38476279086c6d558bc9420b1d747989"],["/images/icons_bak/icon-512x512.png","a4dd53ec743cb5b11654635acf067f91"],["/images/icons_bak/icon-72x72.png","717721d320b27772d01c628fe064a433"],["/images/icons_bak/icon-96x96.png","a3d5dddf55712d5dbef5b007e2062607"],["/img/063Kee.jpg","2743d50d4cdc25e58f2526f32dde0296"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5WTH0f.jpg","069bbfed129f1c85d92dc2e377dfbd58"],["/img/7GdBdp.jpg","fc6a91ec1bc416c508aca07b3858b24e"],["/img/9tBe6z.jpg","0604d8a5e8960e669311b0e7cc4a1390"],["/img/MYzR3f.jpg","172b9aa4eff6f37f148b174d9d198208"],["/img/XsPKP4.jpg","056ea4bf6ffeda677200c72a7c0ddb73"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/aqaMIn.jpg","4bdc7dd32bb7a4fa085fe21e2f71d20d"],["/img/ayHKVP.jpg","1493b1aa76d9230037bf639dde06bbd2"],["/img/eBQfnI.jpg","df3af7fcce4c81416f5c6ca77a3e4d2c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/g3PvYJ.jpg","9368fa07170a5120e065f00162f59ecc"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/nexus折腾小记1.png","3a1a709f6d1d1039768c0093e580f350"],["/img/nexus折腾小记10.png","1fc1af62036f683d81f8b8404bc5ef20"],["/img/nexus折腾小记3.png","197dda76e41ef34d111895a2bec6c8fd"],["/img/nexus折腾小记4.png","6e7221f94bfa25d0a755c27caa426aad"],["/img/nexus折腾小记5.png","de8e95178fafd71b4e95ef799fd83eb8"],["/img/nexus折腾小记7.jpg","423d101a09afd952a3000eb957121464"],["/img/nexus折腾小记8.jpg","118679848f879e66412c92bd4a67fff3"],["/img/nexus折腾小记9.jpg","14f0047bc2637066151f34d3b8dc6954"],["/img/tJBFnf.jpg","373baa224dda2dab2b9580db47c1b39d"],["/img/堆利用-2.png","79513d369645c85d8afbb98fa10d9d6b"],["/img/堆利用.png","79513d369645c85d8afbb98fa10d9d6b"],["/img/戈薇.jpeg","e18791000cc5b6728b88a08c1a0c04cb"],["/img/百年孤独.jpeg","8a8e0346e51060fd1cf34ea4c4821845"],["/index.html","ffa9bc3efc373880ee7fddf90f2f6807"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","a1f55bd718787c903be98ef2ba5ea567"],["/manifest.json","b0bbd37c7ccdf005e57781f7e4f52a7a"],["/music/index.html","4c6101ad3e61bbb4f744565d05e384a3"],["/page/2/index.html","1f5dd4031a265af8e97b8a58aaf03b19"],["/sitemap.xml","8f48e3a043bafdf698d2ea30f78cc454"],["/tags/CTF/index.html","6532cae77dc22b30954c8e73c402bd8b"],["/tags/CTF/page/2/index.html","d707fc49ba3fb39efe8bf7f770f50cb1"],["/tags/Diary/index.html","cc5ae3a2a79ef9d6a7371c111d690465"],["/tags/Exploit/index.html","7f226191d7db8951d8eef04461fa8292"],["/tags/FUZZ/index.html","975152cc5ea5a0947ebc501bc289ca42"],["/tags/HEAP/index.html","b3650f320c3f068efc62d8c128a6f2ab"],["/tags/TA手中握着一个红色的按钮/index.html","4a2608784b2934386318961e919a76b5"],["/tags/Web渗透/index.html","916f17b27897dd03be7d06ce3f6d0557"],["/tags/cve/index.html","caa55724f9e321ed16d0566efbcfec44"],["/tags/index.html","ffeae24d868cb875ab556ea89a83e52a"],["/tags/信息安全/index.html","6f782c5fac7d97f5a14930e692600017"],["/tags/回忆便是那丝丝懊悔/index.html","7aa677f231cb5c0646b06aac262a5a84"],["/tags/旅途是一场修行/index.html","dbabdea7b4b815a84222d5bd3b40e94c"],["/tags/日常/index.html","68e37b90a2dddd325c3704770550e6c6"],["/tags/毕业季/index.html","cd85443ba807c90c91e3b359dde95970"],["/tags/浏览器/index.html","7b6129bb71f5eb40260b00dbb3423ce1"],["/tags/第七年之后/index.html","d3c8f7e52a36c8e8973f2e4308957773"],["/tags/第六年/index.html","f213eb971ea349e91a3aa6ba4eb2c0c5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




