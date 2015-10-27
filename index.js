'use strict';
module.exports = {
	  get Standard() {
        return window.devicePixelRatio <= 1;
    },
    get SD() {
        return window.screen.width < 1280 || window.screen.height < 720;
    },
    get HD() {
        return window.screen.width >= 1280 && window.screen.width < 1920 || window.screen.height >= 720 && window.screen.height < 1080;
    },
    get FullHD() {
        return window.screen.width >= 1920 && window.screen.width < 2000 || window.screen.height >= 1080 && window.screen.height < 1600;
    },
    get UltraHD() {
        return window.screen.width >= 2000 || window.screen.height >= 1600;
    },
    get QuadHD() {
        return window.screen.width >= 3000 || window.screen.height >= 1800;
    },
    get Retina() {
        return window.devicePixelRatio > 1;
    }
};
