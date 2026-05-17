'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "949bb986488447230e409d8cb48eadb0",
".git/config": "9e4faf25949654ec3b89baa839803756",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6b2c14d04de25fc9febd44b3e2c9d3d7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d30433bd6c4e9131de978c4f2a65538d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec2baf85f786be769b18be5165a24d7c",
".git/logs/refs/heads/main": "06f346bf518658820834681b401dc127",
".git/logs/refs/remotes/origin/HEAD": "c054ddd0ba4f660da56529fbc0449450",
".git/logs/refs/remotes/origin/main": "c01cc5d9932499ade57c73ae271a3f07",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/29f0840e3c618e64ec66f61748ac55d9afb836": "bbf5443f4f10052128846a23268370fb",
".git/objects/0f/c6e90eb9dca978692cede2c4ae68f051b36042": "36909017423e5ae0b2ba49619e03b3af",
".git/objects/11/6c9dffe92f213be8ca3e825771f2b068c41706": "921049b149e383d6979e4b981283d75b",
".git/objects/14/e5f516e3d086c3a2fa7c4c0ef8c677b9f328e9": "843a6687fafa645d661bd5d4b38bdc9d",
".git/objects/16/bb383cede08408e48b73dc0911023fb58c72ae": "543b35bfd87cbc4603e1eef1068cbcdf",
".git/objects/1a/ab86917555a4133f82fa564c6567da49a14dd5": "ab5ed94e86a36b52396782af567c5185",
".git/objects/1c/50890d1759bd255302d61742b2509de6060513": "e85ed87fdf68515d19a4042225870d4f",
".git/objects/1f/f90a80ad828beaf74c290d98f47f36be596d83": "95187e63e5ca1d2a1224e04ee16e6396",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/78f0c45f40302e77f8aebd7e665105a458b4f2": "b5831b32a464b30a8b1cb0ab53afb866",
".git/objects/24/f754eed03aff1709d0545e1fc7599b51821f62": "391b264d600cbab0454826ccca0ab860",
".git/objects/26/52487ce4ee248c2562ad6c58315442534e630c": "3d097d8a8a483f44d703c487f50078d0",
".git/objects/29/aba7e1a4b6b97426e8546312aca53b87ce6a41": "36a50c3afef12ca4b3c1c9e2e7e9d19e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/13084b5c8405ec6c0ebb098a89a8a2f7ef7c28": "f4ce90bf8e9f2e84a339d5a1417315bc",
".git/objects/2c/4a70f8a7f638bf529316ac2824bdf6d2bbe68b": "f1f08d36fcaba053901079fc7adea34e",
".git/objects/2e/e21aa15682dce2032fd4e04a70695431817fd4": "671ab2bc83a12929f5596084f700a84f",
".git/objects/2f/168cce2aa354abd22a89a1d87794fa66323272": "d8e4e016018cf8ee6531b94780668475",
".git/objects/37/143f0dcd3901cea4993324dc121b5a54b0938e": "808ff6c5811f04478b32da57ad895260",
".git/objects/3b/0c32ef2d26bb9345184a1bd7ec5cc1764cd3e7": "1300d2b2e416923a6ce2c41a22e96d0d",
".git/objects/41/e990b1dd7227cde77e96836f43b1c7c0ae0c25": "4db7c3018ae7f26f3db016d85ed75922",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/203a85e4327bf5358db0a400ec74e59b88e19c": "2568701586ff8daa63a1c1b0f6f28a3e",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/9078b0d204aa541ea2398cc81186a71ee780db": "3279dbbf5045965290c5a0265e01e26c",
".git/objects/57/4cc8cebc96b41d82d90176634971ea066fa71d": "0e15827b4230cc47181ef01349ed476d",
".git/objects/57/6996e85cc2cc42de60caefdf2d12e90903f5b0": "17f7ea786324b87431cc1d6d92639999",
".git/objects/5e/1e605e5047dd48837d864c6903e7ae8097f137": "91a43cbe4a65690984dde28d6a830967",
".git/objects/6a/61cc9dd6155e315dd52596224ae7c038c11a1c": "2f12631e9d15f68460c2b5b5eae04fd0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/76/cfd01a3cf13728d157d1ae841f180b1cc28693": "a2411ace98ebedfa8fc5bfba2ab781f5",
".git/objects/77/a24046295012e446570e56c9c668d96f4af87f": "22bd4359a5ea2295ea6276d53f675318",
".git/objects/79/eaa3331e47e15d1ba251e4c0853ac54c2bf9c0": "d64e9a2f04b86e1b9477da9ce9137c8d",
".git/objects/79/ffc9f406e95f7bae34c005cbca6bb71c3447e0": "3dd3c271fd8da84ff59d7144dcf3af00",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/225b8ab3e8b45d84191ede889f91e990b6febb": "57f038574b6ef25b2e12d6663b10d797",
".git/objects/7e/74d20e9d30b889788698e8f1d7cc5e1650335a": "b669fb0c205b0a431ae3336eeebed3b7",
".git/objects/7e/fb301797a10ec9676673fade39a399049bd26d": "dba82a914906e257612737e9c1e3eba6",
".git/objects/80/2993554fefca35b9de3677635e414117b6b584": "7304914848459e0c8a2b0de5205f431e",
".git/objects/82/b7954271ea32d0227fd8e825a73c8053931c99": "fc418fbad1d6eb5c66ac32b49ce5a969",
".git/objects/86/1f61d3f35a2e88b3436f08ffe3630e8d0c38dd": "dae336363e46339aed15266689f0f796",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/4732aadd1b587c8ebed5af3f3aa485dc1b27c4": "50c707716d824b74c446f8ce319ab008",
".git/objects/8e/8d31d685a360afa4362e5a300ae865b84d2175": "6331eeb5c0ea9c81378b3ddca0c9ab82",
".git/objects/91/edfdbee221347d7f9757f58145c0929f5e95ca": "a8fa75d9765cc66dc2ba5eb977c52d32",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/c9c36aab5cc54319d21026185aa62eaecc35ba": "b7e7897a9f1f8a6707f96c2863862416",
".git/objects/a6/8516fda8e849709c83a0312224939e5c9e106f": "5551259ff356e9e44c171aa6b2312c77",
".git/objects/ab/c0b7c37ec9eeeb9312e5161ad2542ce00cfa9d": "8ad57e34e5fe1cda46419c66007604a1",
".git/objects/ab/e873634c5b6218fd96b474471468f23f1e3fd1": "68cbe443ac51f9923c36c088a31f002e",
".git/objects/ae/81c701c510d79c01186963ed4d9d3c68e83cde": "48f86629fc21d714b5363f0dcb826422",
".git/objects/b5/f8393875967ebb1a85a69ef6a668111b3e28a5": "115ad6fc8f7c4f19d4ee84934aee2237",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/137389d3adf6985931bd866971dd0a8e21d976": "f4d5fc4e2da2efa1ff3bf575326fd3ff",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/b68994dda7ce9fdf219d94ee25dece1ec74e50": "85061b9a20252361910adb13d0ce46f3",
".git/objects/c1/9adb952181d7d0b8e7102ad1aeafe498f218eb": "3aef7c4e9f2ca846fbfadefb0090dd5d",
".git/objects/c3/30eb29004977bc41716e762fa2433490a19b08": "2b4d9d6952ad9f2beb19eb27b2d64014",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/8d1568fa5bddd4c6037ffc747c2503ed73e536": "95dce82368accbf8468032dc27196d6c",
".git/objects/c8/7021731907c671904a72eb8fa58761ebedba9e": "b885aa43687b4c877b970acd34dafd05",
".git/objects/c9/74c654b74957060d6814d0adedd92ef4a039c8": "472b932ee111de1ff2725d5ab895ad70",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/02f314cf4e8873e261171250158fca4f45d813": "965b458d8645e99f6eadbf7851c83180",
".git/objects/cd/234e72b619f72bc66b4fbbcdd1b426f72cff93": "926d2bd39534416b1f047590e41a17b8",
".git/objects/d0/f446d27186080faf80517168e2c2f65077e2ee": "e30e36824b762b0473a12a815d2ce38d",
".git/objects/d2/5ef335eee94efe3aaadab9d890fa3a0ec3faac": "749d03315ae18f6cf8d231681b1dcd04",
".git/objects/d3/20a9af4afb1f78f647ab06a6eb6d07c6f63f50": "2f6ae093d2349bb2c73586cd4e5dcde9",
".git/objects/d3/811ea6d0300d81fa2dd916cd6330c07281caf0": "44b800ad9cd415d2f5624f866336c687",
".git/objects/d3/95cdb71fe074bdbddff4c0bcc60c25cecbaa3d": "6858a48bf988751cdbd0e08cb1b8488b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/3322de9add716c1e9f971b2b788b38e03e43be": "91b72f63117136baf00d102033caed0e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/de/063207b8a51051e30091fb8bf7b7d50c739999": "30bff28caba786b8a0471f7dce833f31",
".git/objects/de/bb8ac18abeb0a4043bbc38da5aacc77705b094": "e278b4afadabb5177596579664df75af",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/a0b61b8098be961f4f98a4203248e1102b55e3": "3a2890ff310a97bf3a935a767c58b5fb",
".git/objects/e7/520e06dc12f38e3b1c7d34ef53c6dd01da8753": "3982173c397811e1e1f494056fd58585",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/1cc04a3586a245c209e7bc74fd34cfea9ed490": "e7dad581d7238a131b9455f3650e7af5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/2effd8594cd38b74273c5ca690d5fc416487a6": "427f59ab9c090a482f94c754d07bc3de",
".git/objects/f5/44abf867c0570ab78529f67e2f9aa1acd37867": "07538d2bf96b5cc59d1ad6ade491fef5",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/545b14a34889086e1661ac45e9c13e9807d8b5": "497106a844f200af6aafaf8f2af7419c",
".git/objects/f9/cb1a2b5d8e76877e3a1ee8115188cfebb5148a": "b1bd9ed0f2304c9a69e28e06b65c6d68",
".git/objects/fc/eceff7cf48d81131094f60c60b4debf19b1f61": "49c1bae1781c1a252e6f48dc56f1afd7",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "a5add773e7c9ce76c894dcea7fe65b42",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a5add773e7c9ce76c894dcea7fe65b42",
"assets/AssetManifest.bin": "9f5eb7ef19f3db749df46dfa069f69cc",
"assets/AssetManifest.bin.json": "88bb279ebc88c56e65c0aeb7113eb447",
"assets/AssetManifest.json": "a674f666b78a125f401b8a5bbbee586c",
"assets/assets/audio/1.mp3": "781f396efd12911eb4826011cbb1560c",
"assets/assets/audio/2.mp3": "2b8681e37de899893177a8355f58fd9b",
"assets/assets/audio/3.mp3": "98ffd052978530c210716b238317fd36",
"assets/assets/audio/4.mp3": "49b0e72e48ecd7f95163ac6038c7d0b3",
"assets/assets/audio/5.mp3": "1cfd4aa7693a15c4cde870c67eb02c4f",
"assets/assets/audio/6.mp3": "7767e9c69d6c08a1d09d94a6785cf73f",
"assets/assets/video/v1.mp4": "9478e58a0923ea142abc9d1db33e52aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e80f29cb0e7763fa13ffb4432858c7eb",
"assets/NOTICES": "fa2526c98a15dd2f026d7da594473bd5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "6e7641b27714dc860a85c9f3b2b7b5e9",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "ed0c7d4777480a3787c3d965bab72d91",
"icons/Icon-192.png": "101f1c92c2bd3ead0b4b6b6811a55718",
"icons/Icon-512.png": "58201c30023f84307ba28fa26d769d05",
"icons/Icon-maskable-192.png": "101f1c92c2bd3ead0b4b6b6811a55718",
"icons/Icon-maskable-512.png": "58201c30023f84307ba28fa26d769d05",
"index.html": "238bb3e94ffebb6ad050995076c6b303",
"/": "238bb3e94ffebb6ad050995076c6b303",
"main.dart.js": "bbaf0328977eb3845272cfe886aac3c7",
"main.dart.mjs": "6dd5f29e9692bfdefe3216799a1993cd",
"main.dart.wasm": "8207e9db8f76c77044840be17d05be8c",
"manifest.json": "93cd88416868f9cf9fcfb304024a886d",
"version.json": "2866c24fc4e357178447799389aa513e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
